import { ApiModule } from '../lib/api-module/api-module';




export class TransactionApi extends ApiModule {

	/**
	 * Get transactions list
	 * @memberof TransactionApi
	 */
	public list = () => this.request('/transactions/list');

}