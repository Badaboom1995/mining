import { Controller, Post, Body } from '@nestjs/common';
import { CalculatorService } from '../services/calculator.service';
import { APISuccess } from '../../../helpers/index';
import { APIError } from '../../../helpers/APIError';





@Controller('calculator')
export class CalculatorController {

	public constructor(
		private calculatorService : CalculatorService
	) { }

	/**
	 * Calculate revenue by params
	 */
	@Post('calculate')
	public async calculate (@Body('currency') currency : string, @Body('hash') hash : number, @Body('power') power : number) {
		try {
			const result = await this.calculatorService.calculate(currency, hash, power);
			return new APISuccess(result);
		} catch (error) {
			return new APIError('OOps!', 200, error);
		}
	}

}