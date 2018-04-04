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
   * Calculate profit by miner id and crypto currency type
   */
  @Post('calculate')
  public async calculate(@Body() data: CalcProfitabilityDto) {
    try {
      const { id } = data;
      const minerInfo = await this.minerTypeService.findById(id);
      const result = await this.calculatorService.calculate(minerInfo);
      return new APISuccess(result);
    } catch (error) {
      return new APIError(error);
    }
  }
}
