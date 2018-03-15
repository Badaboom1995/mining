import { observable } from 'mobx';
import { merge } from '../../../utils/merge';





export class Investment {
	/**
	 * Investment name
	 */
	@observable
	public name? : string = '';
	/**
	 * Investment percent part
	 */
	@observable
	public percent? : number = 0;
	/**
	 * Invested amount
	 */
	@observable
	public invested?  : number = 0;
	/**
	 * Earned from investment amount
	 */
	@observable
	public earned ? : number = 0;
	/**
	 * Payback amount from invested price
	 */
	@observable
	public payback ? : number = 0;
	/**
	 * Initialize from object
	 * @param source 
	 */
	public constructor(source : Investment = {}) {
		merge(source, this);
	}
}