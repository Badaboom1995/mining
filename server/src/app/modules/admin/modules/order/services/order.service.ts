import { Component } from '@nestjs/common';
import { BuyOrder } from '../../../../../entity/buy-order.entity';
import { Repository, FindOneOptions } from 'typeorm';
import { Miner } from '../../../../../entity/miner.entity';




@Component()
export class OrderService {
	/**
	 * Init service 
	 * @param {Repository<BuyOrder>} buyOrderRepository 
	 * @memberof OrderService
	 */
	public constructor(
		private buyOrderRepository : Repository<BuyOrder>
	) { }
	/**
	 * Creates order in db
	 * @memberof OrderService
	 */
	public async create(payload : BuyOrder, miner : Miner) : Promise<BuyOrder> {
		const order = BuyOrder.create(payload);	
		order.miner = miner;
		return await this.buyOrderRepository.save(order);
	}
	/**
	 * Find one order
	 */
	public async getOne(options : FindOneOptions<BuyOrder>) {
		return this.buyOrderRepository.findOne(options);
	}
	/**
	 * Get all buy orders
	 * @memberof OrderService
	 */
	public async getAll() {
		return await this.buyOrderRepository.find();
	}	
	/**
	 * Update order
	 */
	public async update(order : BuyOrder) : Promise<BuyOrder> {
		return await this.buyOrderRepository.save(order);
	}
	/**
	 * Get all orders buy user id
	 * @param {*} userId
	 * @memberof OrderService
	 */
	public async getUserOrders(userId : any) : Promise<BuyOrder[]> {
		return await this.buyOrderRepository.find({where: { userId }});
	}



}