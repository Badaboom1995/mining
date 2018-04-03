import { Module } from "@nestjs/common";
import { OrderService } from './services/order.service';
import { OrderController } from './controllers/order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuyOrder } from '../../../../entity/buy-order.entity';



@Module({
	components: [
		OrderService
	],
	controllers: [
		OrderController
	],
	imports: [
		TypeOrmModule.forFeature([BuyOrder])
	]	
})
export class OrderModule {

}