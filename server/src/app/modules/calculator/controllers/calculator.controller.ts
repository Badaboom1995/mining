import { Controller, Post, Body } from '@nestjs/common';
import { CalculatorService } from '../services/calculator.service';
import { APISuccess, APIError } from '../../../helpers';
import { CalcProfitabilityDto } from '../dto/calculator.dto';

@Controller('calculator')
export class CalculatorController {
  public constructor(private calculatorService: CalculatorService) {}
  /**
   * Calculate revenue by params
   */
  @Post('calculate')
  public async calculate(@Body() data: CalcProfitabilityDto) {
    try {
      const result = await this.calculatorService.calculate(data);
      return new APISuccess(result);
    } catch (error) {
      return new APIError('OOps!', 200, error);
    }
  }
}
