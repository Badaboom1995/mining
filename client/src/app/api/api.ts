import { AccountApi } from './account';
import { TransactionApi } from './transaction';
import { CalculatorApi } from './calculator';
import { MinerApi } from './miner';





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
	 * Miner api calls
	 */
	public miner = new MinerApi();
}



export const api = new Api();