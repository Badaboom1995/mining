import { AccountApi } from './account';
import { TransactionApi } from './transaction';
import { CalculatorApi } from './calculator';
import { OrderApi } from './order';





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
	/**
	 * Order api calls
	 */
	public order = new OrderApi();
}



export const api = new Api();