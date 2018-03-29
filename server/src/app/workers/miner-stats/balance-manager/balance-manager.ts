import { IInvestment, Transactions } from "../../../services/schemas";
import { ICurrencyTransaction } from "../currency-api/models/currency-transaction";
import { EthApi, ZcashApi } from "../currency-api/currencies";
import { CurrencyApi } from "../currency-api/currency-api";
import { User } from "../../../entity/user.entity";
import { Miner } from "../../../entity/miner.entity";
import { MinerUser } from "../../../entity/miner-user.entity";


export class BalanceManager {

  /**
   * Currency APIes enum
   * @type {{eth: EthApi; zcash: ZecApi}}
   */
  public static currencyAPIes = {
    eth: EthApi,
    zcash: ZcashApi,
  };
  /**
   * Currency api for investment addressType
   */
  private currencyAPI: CurrencyApi;

  /**
   * Init manager with miner
   * @param {Miner} miner
   */
  public constructor(private miner : Miner) {
    this.currencyAPI = new BalanceManager.currencyAPIes[miner.currency](miner.address);
  }
  /**
   * Get transactions
   * @returns {Promise<ICurrencyTransaction[] | ICurrencyTransaction[]>}
   */
  public async getTransactions() : Promise<ICurrencyTransaction[]> {
    const { getLastTransaction, getTransactions } = this.currencyAPI;
    const { lastTransactionId } = this.miner;
    return !lastTransactionId ? [await getLastTransaction()] : await getTransactions(lastTransactionId)
  }
  /**
   * Get balance delta from transactions list
   * @param {ICurrencyTransaction[]} transactions
   * @param {number} percent
   */
  public getBalanceDelta(transactions: ICurrencyTransaction[] = [], percent : number = 100): number {
    const delta = transactions.reduce((previousValue, currentValue) => previousValue + currentValue.value, 0);
    return (delta / 100) * percent;
  }
  // /**
  //  * Update user entry with new balance value if balance has changed
  //  * @param {number} balance
  //  * @param {IUserModel} user
  //  * @param {IInvestment} investment
  //  * @returns {Promise<void>}
  //  */
  // public async changeBalance() {
  //   const {user, minerUser, miner} = this;
  //
  //   // await Users.findOneAndUpdate({ _id: user._id }, { balance: { [investment.addressType]: balance } });
  //   // const transaction = new Transactions({
  //   //   userId: user._id,
  //   //   amount: balance,
  //   //   currency: user.balance[investment.addressType],
  //   //   transactionType: 'miner-reward'
  //   // });
  //   // await transaction.save();
  // }



}

