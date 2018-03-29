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
	public minerTypes = [
		new MinerType({
			name: 'Type 1',
			displayName: 'Майнер 1',
			power: 240,
			price: 2000,
			hash: 230
		}),
		new MinerType({
			name: 'Type 2',
			displayName: 'Майнер 2',
			power: 190,
			price: 2000,
			hash: 400
		})
	];

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
	 * Currency 
	 * 
	 * @memberof CalculatorService
	 */
	@observable
	public currencies = [
		new CalculatorCurrency({
			name: 'eth',
			displayName: 'ETHEREUM',
			description: 'Ethereum Classic — блокчейн-криптоплатформа з відкритим вихідним кодом, для розробки децентралізованих додатків на базі «розумних контрактів'
		}),
		new CalculatorCurrency({
			name: 'zcash',
			displayName: 'ZCASH',
			description: 'Децентрализованная криптовалюта с открытым исходным кодом, обеспечивающая высокий уровень конфиденциальности.'
		})
	];

	/**
	 * Selected currency
	 * @memberof CalculatorService
	 */
	@observable
	public selectedCurrency : CalculatorCurrency = this.currencies[0];
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
	 * Select currency
	 * @param {CalculatorCurrency} currency 
	 * @memberof CalculatorService
	 */
	@action.bound
	public selectCurrency (currency : CalculatorCurrency) {
		this.selectedCurrency = currency;
	}
	/**
	 * Select miner type for calculations
	 * @param {MinerType} minerType 
	 * @memberof CalculatorService
	 */
	@action.bound
	public selectdMinerType ( minerType : MinerType) {
		this.selectedMinerType = minerType;
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
		const { power, hash, price } = this.selectedMinerType;
		try {
			const response = await api.calculator.calculate(this.selectCurrency.name, hash, power, price);

		} catch (error) {

		}
	}
}




export const calculatorService = new CalculatorService();