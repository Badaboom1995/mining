import { observable } from "mobx";




export class CalculatorCurrency {
	/**
	 * Description for currency view
	 * @type {string}
	 * @memberof CalculatorCurrency
	 */
	@observable
	public description : string = '';
	/**
	 * Currency display name
	 * 
	 * @type {string}
	 * @memberof CalculatorCurrency
	 */
	@observable
	public displayName : string = '';

	/**
	 * Currency name
	 * @type {string}
	 * @memberof CalculatorCurrency
	 */
	@observable
	public name : string  = '';

	/**
	 * Initialize with data
	 * @param {CalculatorCurrency} payload 
	 * @memberof CalculatorCurrency
	 */
	public constructor(payload : CalculatorCurrency) {
		Object.assign(this, payload);
	}
}