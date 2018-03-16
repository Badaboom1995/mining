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
} from '../common/schemas/index';
import { InvestmentController } from './controllers';
import { InvestmentService } from './services';
import { AccountService } from '../account/services';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'investment', schema: InvestmentSchema }]),
    MongooseModule.forFeature([{ name: 'shopping-requests', schema: ShoppingRequestsSchema }]),
    MongooseModule.forFeature([{ name: 'transactions', schema: TransactionsSchema }]),
  ],
  controllers: [InvestmentController],
  components: [InvestmentService, AccountService],
})
export class InvestmentModule implements NestModule {
  public configure(consumer: MiddlewaresConsumer) {}
}
