import { ApiModule } from "../lib/api-module/api-module";





export class OrderApi extends ApiModule {
	/**
	 * Get order list buy user id or all
	 */
	public getList = (offset : number, userId : string = '') => this.request(`/buy-order/list`, { offset, userId });
	/**
	 * Get full order info by id
	 */
	public get = (id) => this.request(`/buy-order/get/${id}`);
}