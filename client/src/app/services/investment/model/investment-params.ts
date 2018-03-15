import { observable, action } from 'mobx';
import { autobind } from 'core-decorators';





export class InvestmentParams {

	/**
	 * Amount of investition
	 */
	@observable
	public amount : number = 0;
	/**
	 * Earnings per month
	 */
	@observable
	public perMonth : number = 0;
	/**
	 * Earnings per year
	 */
	@observable
	public perYear : number = 0;
	/**
	 * Set ammount of investment and recalc per month and per year
	 */
	@autobind
	@action
	public setAmount (value : number) {
		this.amount = value;
		this.perMonth
		// TODO: recalc per year and per month
	}

	/**
	 * Set per month earnings
	 */
	@autobind
	@action
	public setPerMonth (value : number) {
		this.perMonth = value;
		this.perYear = Number((value * 12).toFixed(2));
		// TODO: recalc other
	}
	/**
	 * Set per year yearnings
	 */
	@autobind
	@action
	public setPerYear (value : number) {
		this.perYear = value;
		this.perMonth = Number((value / 12).toFixed(2));
		// TODO: recalc other
	}

}