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
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../../entity/user.entity";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'notifications', schema: NotificationsShema }]), TypeOrmModule.forFeature([User])],
  components: [NotificationsService, AccountService],
  controllers: [NotificationsController],
})
export class NotificationsModule implements NestModule {
  public configure(consumer: MiddlewaresConsumer) {}
}
