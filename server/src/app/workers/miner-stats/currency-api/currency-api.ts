import { ICurrencyTransaction } from './currency-transaction';




export abstract class CurrencyApi {
	/**
	 * Initialize api instance with address
	 * @param {string} address 
	 * @memberof CurrencyApi
	 */
	public constructor(protected address : string)  {}
	/**
	 * Must return currency transaction list
	 */
	public abstract async getTransactions(date : Date) : Promise<ICurrencyTransaction[]>;
}