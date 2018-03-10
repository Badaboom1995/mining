import {
  Module,
  NestModule,
  MiddlewaresConsumer,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationsShema } from './schemas';
import { NotificationsController } from './controllers';
import { NotificationsService } from './services';
import { AccountService } from '../account/services';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'notifications', schema: NotificationsShema }])],
  components: [NotificationsService, AccountService],
  controllers: [NotificationsController],
})
export class NotificationsModule implements NestModule {
  public configure(consumer: MiddlewaresConsumer) {}
}
