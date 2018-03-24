import { EthApi, ZcashApi } from './currency-api/currencies';
import { MONGODB_URI } from '../../config/environments.config';
import { Users } from '../../modules/account/schemas/user.schema';
import { Investments } from '../../services/schemas';
import { BalanceManager } from "./balance-manager/balance-manager";
import { MinersList } from "../../services/schemas/miners.schema";
import { getRepository} from "typeorm";
import { Miner } from "../../entity/miner.entity";
import { User, UserBalance, UserEarnings } from "../../entity/user.entity";
import { Transaction } from "../../entity/transaction.entity";


const agenda = new (require('agenda'))({
  db: {
    address: MONGODB_URI,
  }
});


/**
 * Update user balance
 * Iterate through all miners
 * Get all miner related users and update their balances according how much money they invested into miner fundraising
 */
agenda.define('Update user balances', async () => {
  const minerRepository = await getRepository(Miner);
  const userRepository = await getRepository(User);
  const balanceRepository = await getRepository(UserBalance);
  const userEarningsRepository = await getRepository(UserEarnings);
  const transactionRepository = await  getRepository(Transaction);
  const miners = await minerRepository.find({
    relations: ['users'],
  });

  await Promise.all(miners.map(async miner => {
    const balanceManager = new BalanceManager(miner);
    const transactions = await balanceManager.getTransactions();
    const minerUsers = miner.users;
    const users = await userRepository.find({
      relations : ['balance', 'earnings'],
      where: {
        id: minerUsers.map(item => item.userId)
      }
    });
    users.map(async user => {
      const minerUser = minerUsers.find(one => one.userId == user.id);
      const balanceDelta = Number(balanceManager.getBalanceDelta(transactions, minerUser.percent));
      if (balanceDelta) {
        const transaction = Object.assign(new Transaction(), {
            amount: balanceDelta,
            currency: miner.currency,
            transactionType: 'miner-reward',
            userId: user.id
        });
        const oldBalance =  Number(user.balance[ miner.currency ]);
        const oldEarnings = Number(user.earnings[ miner.currency ]);
        await Promise.all([
          balanceRepository.updateById(user.balance.id, {
            [ miner.currency ]: oldBalance + balanceDelta
          }),
          userEarningsRepository.updateById(user.earnings.id, {
            [ miner.currency ]: oldEarnings + balanceDelta
          }),
          transactionRepository.save(transaction)
        ]);
      }
    });
  }));


});


agenda.on('ready', () => {
  agenda.every('12 hours', 'Update user balances');
  agenda.start();
});





