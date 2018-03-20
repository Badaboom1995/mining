import {
  Module,
  NestModule,
  MiddlewaresConsumer,
  RequestMethod,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ShoppingRequestsSchema,
} from '../../../common/schemas';
import { ShoppingRequestsController } from './controllers';
import { ShoppingRequestsService } from './services';
import { AccountService } from '../../../account/services';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'shopping-requests', schema: ShoppingRequestsSchema }]),
  ],
  controllers: [ShoppingRequestsController],
  components: [ShoppingRequestsService, AccountService],
})

export class ShoppingRequestsModule implements NestModule {
  public configure(consumer: MiddlewaresConsumer) {}
}
