import {
  Module,
  NestModule,
  MiddlewaresConsumer,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { MongooseModule } from '@nestjs/mongoose';
import {
  ShoppingRequestsSchema,
} from '../../../../services/schemas';
import { ShoppingRequestsController } from './controllers';
import { ShoppingRequestsService } from './services';
import { AccountService } from '../../../account/services';
import { Transaction } from "../../../../entity/transaction.entity";
import { User } from "../../../../entity/user.entity";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'shopping-requests', schema: ShoppingRequestsSchema }]),
    TypeOrmModule.forFeature([Transaction, User])
  ],
  controllers: [ShoppingRequestsController],
  components: [ShoppingRequestsService, AccountService],
})

export class ShoppingRequestsModule implements NestModule {
  public configure(consumer: MiddlewaresConsumer) {}
}
