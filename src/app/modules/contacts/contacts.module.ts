import {
  Module,
  NestModule,
  MiddlewaresConsumer,
  RequestMethod,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactsSchema } from './schemas';
import { ContactsController } from './controllers';
import { ContactsService } from './services';
import { AccountService } from '../account/services';
import { NotificationsService } from '../notifications/services';
import { NotificationsShema } from '../notifications/schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'notifications', schema: NotificationsShema }]),
    MongooseModule.forFeature([{ name: 'contacts', schema: ContactsSchema }]),
],
  controllers: [ContactsController],
  components: [ContactsService, AccountService, NotificationsService],
})
export class ContactsModule implements NestModule {
  public configure(consumer: MiddlewaresConsumer) {}
}
