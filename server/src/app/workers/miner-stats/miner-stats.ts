import { EthApi, ZcashApi } from './currency-api/currencies';
import { MONGODB_URI } from '../../config/environments.config';
import { Users } from '../../modules/account/schemas/user.schema';
import { Investments } from '../../modules/common/schemas';
import { BalanceManager } from "./balance-manager/balance-manager";
import { MinersList } from "../../modules/common/schemas/miners.schema";

const agenda = new (require('agenda'))({
  db: {
    address: MONGODB_URI,
  },
});


agenda.define('update users balance', async () => {
  const users = await Users.find();
  users.map(async user => {
    const investments = await Investments.find({ userId: user._id });
    investments.map(async investment => {
      const balanceManager = new BalanceManager(user, investment);
      const transactions = await balanceManager.getTransactions();
      const balanceDelta = balanceManager.getBalanceDelta(transactions);
      if (balanceDelta) await balanceManager.changeBalance(balanceDelta, user, investment);
    });
  });
});

agenda.define('get miners balances', async () => {
  const miners = await MinersList.find();
  miners.map(async miners => {
    const balanceManager = new BalanceManager(miners, investment);
    const transactions = await balanceManager.getTransactions();
    const balanceDelta = balanceManager.getBalanceDelta(transactions);
    if (balanceDelta) await balanceManager.changeBalance(balanceDelta, miners, investment);
  });
});



/*
  agenda.on('ready', () => {
  agenda.every('3 minutes', 'update users balance');
  agenda.start();
});
*/


// const zcashApi = new ZcashApi('t1MA6amzZUk2yUdptk7RXMTw59K4nF1JDkQ');

//
// const zecApi = new ZecApi('t1cZqETvYG25MfZpaMT6buYipPbVhmt21js');
// const ethApi = new EthApi('0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae');
//
// zcashApi.getTransactions('c55a5574d4803175364bdb09dd074674547672c0bbb5485a18554ca6bf1111ed').then(transactions => {
//   console.log(transactions);
//   console.log('===========');
//   console.log(`Transactions count is : ${transactions.length}`);
// });
//
// ethApi.getTransactions('0x7784c7b823aad665e667e47227d4aa585728e01661496054adbe1ce643d62973').then(transactions => {
//   console.log(transactions);
//   console.log('===========');
//   console.log(`Transactions count is : ${transactions.length}`);
// });
