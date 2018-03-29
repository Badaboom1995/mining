import { observable } from 'mobx';





export class UserBalance {
	/**
	 * Z cash count
	 * @type {number}
	 * @memberof UserBalance
	 */
	@observable
	public zcash : number = 0;
	/**
	 * Eth count 
	 * @type {number}
	 * @memberof UserBalance
	 */
	@observable
	public eth : number = 0;
}