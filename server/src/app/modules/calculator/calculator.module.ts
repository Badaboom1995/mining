import { Module } from '@nestjs/common';
import { CalculatorController } from './controllers/calculator.controller';
import { CalculatorService } from './services/calculator.service';






@Module({
	controllers: [CalculatorController],
	components: [CalculatorService]
})
export class CalculatorModule {

}