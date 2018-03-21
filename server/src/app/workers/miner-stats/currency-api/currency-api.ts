import { ICurrencyTransaction } from './models/currency-transaction';




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
	public abstract async getTransactions(id : any) : Promise<ICurrencyTransaction[]>;
	/**
	 * Get last transaction from address
	 */
	public abstract async getLastTransaction() : Promise<ICurrencyTransaction>;
}
