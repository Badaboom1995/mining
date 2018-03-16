import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AccountModule } from './modules/account/account.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { InvestmentModule } from './modules/investment/investment.module';
import { MONGODB_URI } from './config/config';

@Module({
  imports: [
    MongooseModule.forRoot(MONGODB_URI),
    AccountModule,
    ContactsModule,
    NotificationsModule,
    InvestmentModule,
  ],
})
export class ApplicationModule {}
