import {
  Module,
  NestModule,
  MiddlewaresConsumer,
  RequestMethod,
} from '@nestjs/common';
import { UsersListController } from './controllers';
import { UsersListService } from './services';
import { AccountService } from '../../../account/services';

@Module({
  imports: [],
  controllers: [UsersListController],
  components: [UsersListService, AccountService],
})

export class UsersListModule implements NestModule {
  public configure(consumer: MiddlewaresConsumer) {}
}
