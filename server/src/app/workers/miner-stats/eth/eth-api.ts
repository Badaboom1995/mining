import { CurrencyApi } from '../currency-api/currency-api';
import axios from 'axios';
import { ICurrencyTransaction } from '../currency-api/currency-transaction';





export class EthApi extends CurrencyApi {
	/**
	 * Etherscan api key
	 * @private
	 * @memberof EthApi
	 */
	private apiKey = 'NA23E58FGS35PG5UV2IZI3DKGVWFSXW5GV';


	
	/**
	 * Get eth transaction for address from passed date
	 * @param {Date} date 
	 * @returns {Promise<ICurrencyTransaction[]>} 
	 * @memberof EthApi
	 */
	public async getTransactions(date: Date): Promise<ICurrencyTransaction[]> {
		const transactions = await this.getAddressTransactionsFromDateToNow(date);
		const sortedByTimeTransactions = transactions.sort((a,b) => {
			if (a.timestamp > b.timestamp)  return 1;
			if (a.timestamp < b.timestamp)  return -1;
			return 0;
		});
		return sortedByTimeTransactions;
	}
	/**
	 * Get address transactions from date to now
	 * @private
	 * @param {Date} date 
	 * @memberof EthApi
	 */
	private async getAddressTransactionsFromDateToNow(date : Date)  : Promise<ICurrencyTransaction[]> {
		const time = date.getTime();
		const rawTransactions = await this.getAdressTransactions({});
		const transactions : ICurrencyTransaction[] = rawTransactions.result ? rawTransactions.result.filter(({timeStamp, to }) => {
			const transactionTime = Number(timeStamp) * 1000;
			if (transactionTime < time) return false;
			// check is it incoming transaction and not sended (for some case)
			if (to != this.address) return false;
			return true;
		}).map(({ timeStamp, transactionIndex, value }) => ({
			type: '',
			value: this.weiToEth(value),
			index: transactionIndex,
			timestamp: timeStamp
		})) : [];

		return transactions;
	}
	/**
	 * Get transactions from api with params
	 * @private
	 * @param {any} { endblock = 'last', sort = 'asc' } 
	 * @returns {Promise<any[]>} 
	 * @memberof EthApi
	 */
	private async getAdressTransactions({ endblock = 'last', sort = 'asc' }) : Promise<{status: any, message: string, result: any[]}> {
		try {
			const { data } = await axios.get(`http://api.etherscan.io/api?module=account&action=txlist&address=${this.address}&startblock=0&endblock=${endblock}&sort=${sort}&apikey=${this.apiKey}`)

			return data;
		} catch(error) {  }
	}

	/**
	 * Wei units to eth
	 * @private
	 * @memberof EthApi
	 */
	private weiToEth (value : number | string) {
		return Math.floor(Math.round(parseFloat(value as string) / 1000000000000000000 * 10000) / 10000);
	}

}