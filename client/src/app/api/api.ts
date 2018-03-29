import { AccountApi } from './account';
import { TransactionApi } from './transaction';
import { CalculatorApi } from './calculator';





export class Api {
	/**
	 * Account api calls
	 */
	public account = new AccountApi();

	/**
	 * Transactions api calls
	 */
	public transactions = new TransactionApi();

	/**
	 * Calculator api
	 * @memberof Api
	 */
	public calculator = new CalculatorApi();
}



export const api = new Api();