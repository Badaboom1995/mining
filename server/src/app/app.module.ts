import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RouterModule, Routes } from "nest-router";

import { AccountModule } from './modules/account/account.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { InvestmentModule } from './modules/investment/investment.module';
import { AdminModule } from "./modules/admin/admin.module";
import { ShoppingRequestsModule } from "./modules/admin/modules/shopping-requests/shopping-requests.module";
import { MONGODB_URI } from './config/environments.config';

const adminRoutes: Routes = [
  {
    path: '/admin',
    module: AdminModule,
    children: [
      {
        path: '/shopping-requests',
        module: ShoppingRequestsModule,
      },

    ],
  },
];

@Module({
  imports: [
    MongooseModule.forRoot(MONGODB_URI),
    RouterModule.forRoutes(adminRoutes),
    AdminModule,
    ShoppingRequestsModule,
    AccountModule,
    ContactsModule,
    NotificationsModule,
    InvestmentModule,
  ],
})
export class ApplicationModule {}
