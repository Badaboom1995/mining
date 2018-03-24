import {
  Module,
  NestModule,
  MiddlewaresConsumer,
  RequestMethod,
} from '@nestjs/common';
import { UsersListController } from './controllers';
import { UsersListService } from './services';
import { AccountService } from '../../../account/services';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../../../../entity/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersListController],
  components: [UsersListService, AccountService],
})

export class UsersListModule implements NestModule {
  public configure(consumer: MiddlewaresConsumer) {}
}
