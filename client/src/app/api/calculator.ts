import { ApiModule } from "../lib/api-module/api-module";






export class CalculatorApi extends ApiModule {
	/**
	 * Calculate revenue request
	 */
	public calculate = (currency : string,hash : number, power : number, price : number) => this.request('/calculator/calculate', { currency, hash, power, price });
}