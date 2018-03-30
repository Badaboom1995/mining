import { observable } from 'mobx';




export class Transaction {
	/**
	 * Transaction id
	 */
	@observable
	public id : any;
	/**
	 * Transaction type ( pool or mining )
	 */
	@observable
	public transactionType: string = '';
	/**
	 * Currency used
	 */
	@observable
	public currency: string = '';
	/**
	 * Transfer amount
	 */
	@observable
	public amount: number = 0;
	/**
	 * Transaction creation time
	 */
	@observable
	public createdAt: string;
	/**
	 * Transaction update time
	 */
	@observable
	public updatedAt: string;
	/**
	 * User belongs to transaction
	 */
	@observable
	public userId : any;
}