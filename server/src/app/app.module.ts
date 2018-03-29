import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule, Routes } from 'nest-router';

import { AccountModule } from './modules/account/account.module';
import { InvestmentModule } from './modules/investment/investment.module';
import { AdminModule } from './modules/admin/admin.module';
import { ShoppingRequestsModule } from './modules/admin/modules/shopping-requests/shopping-requests.module';
import { UsersListModule } from './modules/admin/modules/users/users.module';
import { MONGODB_URI } from './config/environments.config';
import { User } from './entity/user.entity';
import { MinerModule } from './modules/miner/miner.module';

const adminRoutes: Routes = [
  {
    path: '/admin',
    module: AdminModule,
    children: [
      {
        path: '/shopping-requests',
        module: ShoppingRequestsModule,
      },
      {
        path: '/users',
        module: UsersListModule,
      },
    ],
  },
];

@Module({
  imports: [
    MongooseModule.forRoot(MONGODB_URI),
    TypeOrmModule.forRoot(),
    AccountModule,
    InvestmentModule,
    RouterModule.forRoutes(adminRoutes),
    AdminModule,
    ShoppingRequestsModule,
    UsersListModule,
    MinerModule,
  ],
})
export class ApplicationModule {}
