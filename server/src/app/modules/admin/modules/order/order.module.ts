import { Module } from "@nestjs/common";
import { OrderService } from './services/order.service';
import { OrderController } from './controllers/order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuyOrder } from '../../../../entity/buy-order.entity';
import { MinerService } from "../../../miner/services/miner.service";
import { Miner } from "../../../../entity/miner.entity";



@Module({
	components: [
		OrderService
	],
	controllers: [
		OrderController
	],
	imports: [
		TypeOrmModule.forFeature([BuyOrder, Miner])
	]	
})
export class OrderModule {

}