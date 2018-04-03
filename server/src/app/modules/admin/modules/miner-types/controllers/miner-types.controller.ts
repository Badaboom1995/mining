import { Controller, Post, Body, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';
import { createMinerTypeDto } from '../dto/miner-types.dto';
import { MinerTypesService } from '../services';
import { APISuccess, APIError } from '../../../../../helpers';
import { Roles } from '../../../../../services/decorators';
import { RolesGuard } from '../../../../../services/guards';

@ApiUseTags('admin/miner-types')
@ApiBearerAuth()
@Controller('/')
@UseGuards(RolesGuard)
export class MinerTypesController {
  constructor(private readonly miningTypeService: MinerTypesService) {}

  @Roles('admin')
  @Post('/list')
  async findAllMinerTypes(@Req() req) {
    try {
      const data = await this.miningTypeService.findAllTypes();
      return new APISuccess(data);
    } catch (err) {
      return new APIError(err);
    }
  }

  @Roles('admin')
  @Post('/create')
  async createTransaction(@Req() req, @Body() data: createMinerTypeDto) {
    try {
      await this.miningTypeService.createMinerType(data);
      return new APISuccess();
    } catch (err) {
      return new APIError(err);
    }
  }
}
