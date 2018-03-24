import axios from 'axios';
import { CurrencyApi } from '../currency-api';
import { ICurrencyTransaction } from '../models/currency-transaction';
import { ETH_APIKEY } from "../../../../config/environments.config";
import { sortByField } from "../../../../../utils/sort-by-field";
import { raw } from "body-parser";



export class EthApi extends CurrencyApi {
	/**
	 * Etherscan api key
	 * @private
	 * @memberof EthApi
	 */
	private apiKey = ETH_APIKEY;
	/**
	 * Get eth transaction for address from passed date
	 * @param {Date} date
	 * @returns {Promise<ICurrencyTransaction[]>}
	 * @memberof EthApi
	 */
	public async getTransactions(id: any): Promise<ICurrencyTransaction[]> {
    const transactions = sortByField(await this.getAddressTransactionsFromIdToLast(id), 'timestamp');
    return transactions;
	}

	/**
	 * Get address transactions from date to now
	 * @private
	 * @param {Date} date
	 * @memberof EthApi
	 */
	private async getAddressTransactionsFromIdToLast(id : any)  : Promise<ICurrencyTransaction[]> {
	  const {  result: rawTransactions = []  } = await this.getAddressTransactions({});
	  const lastTransaction = rawTransactions.find(item => item.hash == id);
	  const filteredTransactions = rawTransactions.filter(transaction => {
	    if (transaction.to != this.address) return false;
	    if (Number(transaction.timeStamp) <= Number(lastTransaction.timeStamp)) return false;
	    if (transaction.hash == lastTransaction.hash) return false;
	    return true;
    });
	  return this.rawTransactionsToCurrencyTransactions(filteredTransactions);
  }

  /**
   * Raw zechain transactions to currency transactions
   * @returns {ICurrencyTransaction}
   */
  private rawTransactionToCurrencyTransaction (raw : any) : ICurrencyTransaction {
    return {
      value: this.weiToEth(raw.value),
      index: raw.transactionIndex,
      hash: raw.hash,
      timestamp: Number(raw.timeStamp),
      type: raw.type || ''
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
	 * Get transactions from api with params
	 * @private
	 * @param {any} { endblock = 'last', sort = 'asc' }
	 * @returns {Promise<any[]>}
	 * @memberof EthApi
	 */
	private async getAddressTransactions({ endblock = 'last', sort = 'asc' }) : Promise<{status: any, message: string, result: any[]}>  {
		try {
			const { data } = await axios.get(`http://api.etherscan.io/api?module=account&action=txlist&address=${this.address}&startblock=0&endblock=${endblock}&sort=${sort}&apikey=${this.apiKey}`)
			return data;
		} catch(error) { }
	}
	/**
	 * Wei units to eth
	 * @private
	 * @memberof EthApi
	 */
	private weiToEth (value : number | string) {
		return Math.floor(Math.round(parseFloat(value as string) / 1000000000000000000 * 10000) / 10000);
	}
	/**
	 * Get last transaction by eth address
	 * @memberof EthApi
	 */
	public async getLastTransaction() : Promise<ICurrencyTransaction> {
    const rawTransactions = await this.getAddressTransactions({});
    const transaction = rawTransactions[0];
    if (!transaction) return null;
    return this.rawTransactionToCurrencyTransaction(transaction);
	}
}
