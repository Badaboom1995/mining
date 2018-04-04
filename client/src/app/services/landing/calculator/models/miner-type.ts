import { observable } from 'mobx';




export class MinerType {
	@observable
	public cpu: string;

	@observable
	public description: string;

	@observable
	public gpu: string;

	@observable
	public hashRate: string;

	@observable
	public id: string;

	@observable
	public name: string;

	@observable
	public power: string;

	@observable
	public price: string;

	@observable
	public ram: string;

	@observable
	public solsRate: string;
	
	/**
	 * Initialize with data
	 * @param {CalculatorCurrency} payload 
	 * @memberof CalculatorCurrency
	 */
	public constructor(payload: MinerType) {
		Object.assign(this, payload);
	}
}