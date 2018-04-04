import { api } from "../../../api/api";
import { observable } from "mobx";



export class OrderService {
	/**
	 * Order list
	 */
	@observable
	public list = [];
	/**
	 * Opened order
	 */
	public openedOrder = null;
	/**
	 * Get order full data
	 */
	public async getOne (id : any) {

	}
	/**
	 * Get orders list
	 * @param {offset : number, limit : number}
	 */
	public async getList({ offset = 0, limit = 10 }) {
		try {
			const { content: list } = await api.order.getList(offset);
			this.list = list;
		} catch (error) {

		}
	}




}