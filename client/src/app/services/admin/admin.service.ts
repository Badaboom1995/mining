import { OrderService } from "./order/order.service";
import { observable } from 'mobx';






export class AdminService {
	/**
	 * Order service
	 */
	@observable
	public order : OrderService = new OrderService();
}


export const adminService = new AdminService();