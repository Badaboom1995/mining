import { AccountApi } from './account';





export class Api {
	/**
	 * Account api calls
	 */
	public account = new AccountApi();
}



export const api = new Api();