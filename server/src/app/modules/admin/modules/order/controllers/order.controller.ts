import { Controller, Post, Body, Param } from '@nestjs/common';
import { OrderService } from './../services/order.service';
import { BuyOrder } from '../../../../../entity/buy-order.entity';
import { APIError } from '../../../../../helpers/index';
import { APISuccess } from '../../../../../helpers/APISuccess';

@Controller('buy-order')
export class OrderController  {
	/**  
	 * Initialize controller
	 */
	public constructor(
		private orderService : OrderService
	) { }

	/**
	 * Update order with payload
	 */
	@Post('/update')
	public async update(@Body('order') order : BuyOrder) {
		try {
			const updated = await this.orderService.update(order);
			return new APISuccess(updated, 'Order updated!');
		} catch (error) {
			return new APIError('Error while updating order', 200, error);
		}
	}

	/**
	 * @param {string} id 
	 * @memberof OrderController
	 */
	@Post('/list/:userId')
	public async list(@Param('userId') userID : string) {
		const id = !userID || userID == 'undefined' ? '' : userID;
		try {
			const list = await ( id ? this.orderService.getUserOrders(id) : this.orderService.getAll());
			return new APISuccess(list);
		} catch (error) {
			return new APIError('Error while getting orders', 200, error);
		}
	}

}