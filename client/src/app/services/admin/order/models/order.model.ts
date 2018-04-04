


export class OrderModel {
	/**
	 * Order id
	 */
	public id : string;
	/**
	 * Buyer city
	 */
	public city : string;
	/**
	 * Maximum package weight
	 */
	public maxWeight : number;
	/**
	 * Post office number
	 * @type {number}
	 * @memberof BuyOrder
	 */
	public officeNumber : number;
	/**
	 * Contact phone for post sms and cooperation
	 * @type {string}
	 * @memberof BuyOrder
	 */
	public phone : string;
	/**
	 * Buyer passport name
	 * @type {string}
	 * @memberof BuyOrder
	 */
	public name : string;
	/**
	 * Buyer passport lastname
	 */
	public lastName : string;
	/**
	 * Buyer passport patronymic
	 */
	public patronymic : string;
	/**
	 * Miner related to order
	 * @type {Miner}
	 * @memberof BuyOrder
	 */
	public miner? : any;
}