import { AccountApi } from './account';
import { TransactionApi } from './transaction';





export class Api {
	/**
	 * Account api calls
	 */
	public account = new AccountApi();

	/**
	 * Transactions api calls
	 */
	public transactions = new TransactionApi();
}



export const api = new Api();