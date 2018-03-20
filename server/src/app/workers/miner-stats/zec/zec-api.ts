import axios from 'axios';
import { CurrencyApi } from '../currency-api/currency-api';
import { ICurrencyTransaction } from '../currency-api/currency-transaction';


export class ZecApi extends CurrencyApi {

	/**
	 * Return transactions from passed date to last
	 * @param {Date} date Start date for searching transactions
	 * @param {string='minerReward'} transactionType Type of transaction to get, by default -> minerReward
	 * @returns {Promise<ICurrencyTransaction[]>} 
	 * @memberof ZenApi
	 */
	public async getTransactions(date : Date, transactionType : string = ''): Promise<ICurrencyTransaction[]> {
		const transactions : ICurrencyTransaction[] = await this.getTransactionsFromDateToNow(date);
		const minerRewardTransactions = transactions.filter(transaction => {
			if (transactionType) return transaction.type == transactionType;
			return true;
		});
		return minerRewardTransactions;
	}


	/**
	 * Get transactions from date to now with loop
	 * Transactions sorted by timestamp*
	 * @private
	 * @memberof ZenApi
	 */
	private async getTransactionsFromDateToNow(date : Date) : Promise<ICurrencyTransaction[]> {
		
		let isFirstTransactionNotFounded = true;
		let offset = 0;
		let transactions : ICurrencyTransaction[] = [];
		let time = date.getTime();
		let times = 0;
		do {	
			const part = await this.getAccountRcv(offset);
			if (part && !part.length) break;
			part.map(({ timestamp, value, type, index }) => {
				const transactionTime = timestamp * 1000;
				// if transaction goes before passede date stop iteration
				if (transactionTime < time) return isFirstTransactionNotFounded = false;
				// if transactions goes after passed date push it to list 
				if (transactionTime * 1000 >= time) {
					// console.log(timestamp, time, 'ADDED', type);
					transactions.push({
						value,
						type,
						timestamp,
						index
					});
				}
			});
			// next part
			offset += 20;
		} while (isFirstTransactionNotFounded);

		return transactions.sort((a,b) => { 
			if (a.timestamp > b.timestamp) return 1;
			if (a.timestamp < b.timestamp) return -1;
			return 0;
		});
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
	
}