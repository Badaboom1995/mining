import { ApiModule } from "../lib/api-module/api-module";






export class CalculatorApi extends ApiModule {
	/**
	 * Calculate revenue request
	 */
	public calculate = (id : string) => this.request('/calculator/calculate', { id });
}