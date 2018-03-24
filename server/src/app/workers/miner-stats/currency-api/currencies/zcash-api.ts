import axios from 'axios';
import { CurrencyApi } from '../currency-api';
import { ICurrencyTransaction } from '../models/currency-transaction';
import {sortByField} from "../../../../../utils/sort-by-field";


export class ZcashApi extends CurrencyApi {
  /**
   *
   * @param id - last transaction hash
   * @param {string} transactionType
   * @returns {Promise<ICurrencyTransaction[]>}
   */
	public async getTransactions(id : any, transactionType : string = ''): Promise<ICurrencyTransaction[]> {
		const transactions : ICurrencyTransaction[] = await this.getTransactionsFromIdToLast(id);
		return transactions.filter(transaction => transactionType ? transaction.type == transactionType : true);
	}


	/**
	 * Get transactions from date to now with loop
	 * Transactions sorted by timestamp*
	 * @private
	 * @memberof ZenApi
	 */
	private async getTransactionsFromIdToLast(id : any) : Promise<ICurrencyTransaction[]> {
    let transactions : ICurrencyTransaction[] = [];
    let offset = 0;
    do {
      const rawTransactions =  (await this.getAccountRcv(offset)) || [];
      const lastTransaction = rawTransactions.find(transaction => transaction.hash == id);
      if (lastTransaction) {
        const transactionsWithoutPrevious = rawTransactions.filter(item => {
          if (item.timestamp < lastTransaction.timestamp) return false;
          if (item.hash == lastTransaction.hash) return false;
          return true;
        });
        transactions.push(...this.rawTransactionsToCurrencyTransactions(transactionsWithoutPrevious));
        break;
      } else {
        transactions.push(...this.rawTransactionsToCurrencyTransactions(rawTransactions));
      }
      offset  += 20;
    } while(true);


		return sortByField(transactions, 'timestamp');
	}



  /**
   * Raw zechain transactions to currency transactions
   * @returns {ICurrencyTransaction}
   */
  private rawTransactionToCurrencyTransaction (raw : any) : ICurrencyTransaction {
    return {
      value: raw.value,
      index: raw.index,
      hash: raw.hash,
      timestamp: raw.timestamp,
      type: raw.type
    };
  }

  /**
   * Raw transactions to currency transactions list
   * @param {any[]} transactions
   * @returns {ICurrencyTransaction[]}
   */
  private rawTransactionsToCurrencyTransactions (transactions : any[]) {
    return transactions.map(raw => this.rawTransactionToCurrencyTransaction(raw));
  }


	/**
	 * Get recieved by account transactions
	 */
	private async getAccountRcv(offset : number, limit : number = 20) : Promise<any[]> {
		try {
			const { data } = await axios.get(`https://api.zcha.in/v2/mainnet/accounts/${this.address}/recv?limit=${limit}&offset=${offset}`);
			return data;
		} catch(error) {
			return [];
		}
	}




	/**
	 * Get account info for address
	 * @private
	 * @memberof ZecApi
	 */
	private async getAccount () {
		try {
			const { data } = await axios.get(`https://api.zcha.in/v2/mainnet/accounts/${this.address}`);
			return data;
		} catch (error) { }

	}

	/**
	 * get last address recv
	 * @memberof ZecApi
	 */
	public async getLastTransaction() : Promise<ICurrencyTransaction> {
		const transactions = await this.getAccountRcv(0, 1);
		const transaction = transactions[0];
		if (!transaction) return null;
		return this.rawTransactionToCurrencyTransaction(transaction);
	}

}
