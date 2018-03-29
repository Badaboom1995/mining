import { observable } from 'mobx';




export class MinerType {
	/**
	 * Mienr name
	 * @type {string}
	 * @memberof MinerType
	 */
	@observable
	public name : string = '';
	/**
	 * Mienr displayName
	 * @type {string}
	 * @memberof MinerType
	 */
	@observable
	public displayName : string = '';
	/**
	 * Miner power
	 * @type {number}
	 * @memberof MinerType
	 */
	@observable
	public power : number = 0;

	/**
	 * Initialize with data
	 * @param {CalculatorCurrency} payload 
	 * @memberof CalculatorCurrency
	 */
	public constructor(payload : MinerType) {
		Object.assign(this, payload);
	}
}