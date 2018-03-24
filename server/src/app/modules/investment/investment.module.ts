import {
  Module,
  NestModule,
  MiddlewaresConsumer,
  RequestMethod,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  InvestmentSchema,
  ShoppingRequestsSchema,
  TransactionsSchema,
} from '../../services/schemas/index';
import { InvestmentController } from './controllers';
import { InvestmentService } from './services';
import { AccountService } from '../account/services';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../../entity/user.entity";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'investment', schema: InvestmentSchema }]),
    MongooseModule.forFeature([{ name: 'shopping-requests', schema: ShoppingRequestsSchema }]),
    MongooseModule.forFeature([{ name: 'transactions', schema: TransactionsSchema }]),
    TypeOrmModule.forFeature([User])
],
  controllers: [InvestmentController],
  components: [InvestmentService, AccountService],
})
export class InvestmentModule implements NestModule {
  public configure(consumer: MiddlewaresConsumer) {}
}
