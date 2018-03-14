import {
  Module,
  NestModule,
  MiddlewaresConsumer,
  RequestMethod,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InvestmentSchema } from './schemas';
import { InvestmentController } from './controllers';
import { InvestmentService } from './services';
import { AccountService } from '../account/services';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'investment', schema: InvestmentSchema }]),
],
  controllers: [InvestmentController],
  components: [InvestmentService, AccountService],
})
export class InvestmentModule implements NestModule {
  public configure(consumer: MiddlewaresConsumer) {}
}
