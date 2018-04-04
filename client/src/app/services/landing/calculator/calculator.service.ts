import { observable, action } from 'mobx';
import { CalculatorCurrency } from './models/calculator-currency';
import { MinerType } from './models/miner-type';
import { EnergyTariff } from './models/energy-tariff';
import { api } from '../../../api/api';





export class CalculatorService  {
	
	/**
	 * Miner types list
	 * @memberof CalculatorService
	 */
	@observable
	public minerTypes = [];

	/**
	 * Tariff list
	 * @type {EnergyTariff[]}
	 * @memberof CalculatorService
	 */
	@observable
	public tariffs : EnergyTariff[] = [
		new EnergyTariff({
			name: 'normal',
			displayName: 'ЗВИЧАЙНИЙ',
			icon: 'one'
		}),
		new EnergyTariff({
			name: 'twoSeason',
			displayName: 'ДВОЗОННИЙ',
			icon: 'two'
		}),
		new EnergyTariff({
			name: 'threeSeason',
			displayName: 'ТРЬОХЗОННИЙ',
			icon: 'three'
		}),
	];

	/**
	 * Calculation results
	 */
	@observable
	public results = [];
	/**
	 * Selected result
	 */
	@observable
	public selectedResult;

	/**
	 * Selected miner type
	 * @type {MinerType}
	 * @memberof CalculatorService
	 */
	@observable
	public selectedMinerType : MinerType = this.minerTypes[0];

	/**
	 * Selected enetry tariff
	 * @type {EnergyTariff}
	 * @memberof CalculatorService
	 */
	@observable
	public selectedTariff : EnergyTariff = this.tariffs[0];
	/**
	 * Select miner type for calculations
	 * @param {MinerType} minerType 
	 * @memberof CalculatorService
	 */
	@action.bound
	public selectMinerType ( minerType : MinerType) {
		this.selectedMinerType = minerType;
		this.calculate();
	}
	/**
	 * Selected tariff for calculations
	 * @param {EnergyTariff} tariff 
	 * @memberof CalculatorService
	 */
	@action.bound
	public selectTariff (tariff : EnergyTariff) {
		this.selectedTariff = tariff;
	}
	
	
	/**
	 * Recalculate revenue 
	 * @memberof CalculatorService
	 */
	@action.bound
	public async calculate() {
		const { id } = this.selectedMinerType;
		try {
			const response = await api.calculator.calculate(id);
			this.results = response.content.data;
			this.selectedResult = this.results[0];
		} catch (error) {  }
	}
	/**
	 * Get miner types
	 */
	@action.bound
	public async getTypes() {
		try {
			const response = await api.miner.getTypes();
			this.minerTypes = response.content;
		} catch(error) { }
	}

	/**
	 * Select result
	 */
	@action.bound
	public selectResult(result) {
		this.selectedResult = result;
	}

}




export const calculatorService = new CalculatorService();

