import { Entity, ObjectIdColumn, Column, OneToOne } from 'typeorm';
import { mergeByKeys } from '../../utils/merge-by-keys';
import { Miner } from './miner.entity';



@Entity('buy-orders')
export class BuyOrder {
	/**
	 * Order id
	 */
	@ObjectIdColumn()
	public id : string;
	/**
	 * Buyer city
	 */
	@Column()
	public city : string;
	/**
	 * Maximum package weight
	 */
	@Column()
	public maxWeight : number;
	/**
	 * Post office number
	 * @type {number}
	 * @memberof BuyOrder
	 */
	@Column()
	public officeNumber : number;
	/**
	 * Contact phone for post sms and cooperation
	 * @type {string}
	 * @memberof BuyOrder
	 */
	@Column()
	public phone : string;
	/**
	 * Buyer passport name
	 * @type {string}
	 * @memberof BuyOrder
	 */
	@Column()
	public name : string;
	/**
	 * Buyer passport lastname
	 */
	@Column()
	public lastName : string;
	/**
	 * Buyer passport patronymic
	 */
	@Column()
	public patronymic : string;
	/**
	 * Miner related to order
	 * @type {Miner}
	 * @memberof BuyOrder
	 */
	@OneToOne(type => Miner, miner => miner.order)
	public miner : Miner;
	/**
	 * Creates instance from object
	 * @static
	 * @returns {BuyOrder} 
	 * @memberof BuyOrder
	 */
	public static create (source) : BuyOrder {
		const order = new BuyOrder();
		return mergeByKeys(order, source);
	}
}