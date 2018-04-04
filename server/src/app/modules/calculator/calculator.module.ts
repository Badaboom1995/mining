import { Module } from '@nestjs/common';
import { CalculatorController } from './controllers/calculator.controller';
import { CalculatorService } from './services/calculator.service';
import { MinerTypesService } from "../admin/modules/miner-types/services";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MinerType } from "../../entity/miner-type.entity";

@Module({
  imports: [TypeOrmModule.forFeature([MinerType])],
	controllers: [CalculatorController],
	components: [CalculatorService, MinerTypesService]
})
export class CalculatorModule {}
