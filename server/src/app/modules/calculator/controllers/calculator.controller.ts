import { Controller, Post, Body } from '@nestjs/common';
import { CalcProfitabilityDto } from '../dto/calculator.dto';
import { CalculatorService } from '../services/calculator.service';
import { MinerTypesService } from "../../admin/modules/miner-types/services";
import { APISuccess, APIError } from '../../../helpers';

@Controller('calculator')
export class CalculatorController {
  public constructor(
    private calculatorService: CalculatorService,
    private minerTypeService: MinerTypesService,
  ) {}
  /**
   * Calculate profit by minerInfo and currency type
   */
  @Post('calculate')
  public async calculate(@Body() data: CalcProfitabilityDto) {
    try {
      const { id, currency } = data;
      const minerInfo = await this.minerTypeService.findById(id);
      const result = await this.calculatorService.calculate(minerInfo, currency);
      return new APISuccess(result);
    } catch (error) {
      return new APIError('Oops!', 200, error);
    }
  }
}
