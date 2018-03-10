import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AccountModule } from './modules/account/account.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { MONGODB_URI } from '../config';

@Module({
  imports: [MongooseModule.forRoot(MONGODB_URI), AccountModule, ContactsModule, NotificationsModule],
})
export class ApplicationModule {}
