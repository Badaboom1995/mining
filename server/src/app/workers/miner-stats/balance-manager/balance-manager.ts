import { IInvestment, Transactions } from "../../../modules/common/schemas";
import { IUserModel, Users } from "../../../modules/account/schemas/user.schema";
import { ICurrencyTransaction } from "../currency-api/models/currency-transaction";
import { EthApi, ZcashApi } from "../currency-api/currencies";
import { CurrencyApi } from "../currency-api/currency-api";


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
   *
   * @param {IUserModel} user
   * @param {IInvestment} investment
   */
  public constructor(private user: IUserModel, private investment: IInvestment) {
    this.currencyAPI = new BalanceManager.currencyAPIes[investment.addressType](investment.address);
  }

  /**
   * Get transactions
   * @returns {Promise<ICurrencyTransaction[] | ICurrencyTransaction[]>}
   */
  public async getTransactions() {
    const { getLastTransaction, getTransactions } = this.currencyAPI;
    const { lastTransactionId } = this.investment;
    return !lastTransactionId ? [await getLastTransaction()] : await getTransactions(lastTransactionId)
  }


  /**
   * Get balance delta from transactions list
   * @param {ICurrencyTransaction[]} transactions
   */
  public getBalanceDelta(transactions: ICurrencyTransaction[] = []): number {
    return transactions.reduce((previousValue, currentValue) => previousValue + currentValue.value, 0);
  }

  /**
   * Update user entry with new balance value if balance has changed
   * @param {number} balance
   * @param {IUserModel} user
   * @param {IInvestment} investment
   * @returns {Promise<void>}
   */
  public async changeBalance(balance: number, user: IUserModel, investment: IInvestment) {
    await Users.findOneAndUpdate({ _id: user._id }, { balance: { [investment.addressType]: balance } });
    const transaction = new Transactions({
      userId: user._id,
      amount: balance,
      currency: user.balance[investment.addressType],
      transactionType: 'miner-reward'
    });
    await transaction.save();
  }
}

