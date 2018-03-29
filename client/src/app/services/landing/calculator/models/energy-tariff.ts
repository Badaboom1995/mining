import { observable } from "mobx";





export class EnergyTariff {
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
	 * Tariff icon
	 * @type {string}
	 * @memberof EnergyTariff
	 */
	@observable	
	public icon : string = '';
	/**
	 * Initialize with data
	 * @param {CalculatorCurrency} payload 
	 * @memberof CalculatorCurrency
	 */
	public constructor(payload : EnergyTariff) {
		Object.assign(this, payload);
	}	
}