import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule, Routes } from 'nest-router';

import { AccountModule } from './modules/account/account.module';
import { InvestmentModule } from './modules/investment/investment.module';
import { AdminModule } from './modules/admin/admin.module';
import { ShoppingRequestsModule } from './modules/admin/modules/shopping-requests/shopping-requests.module';
import { UsersListModule } from './modules/admin/modules/users/users.module';
import { MONGODB_URI, DB_CONFIG } from './config/environments.config';
import { MinerModule } from "./modules/miner/miner.module";
import { TransactionModule } from './modules/transaction/transaction.module';
import { CalculatorModule } from './modules/calculator/calculator.module';
import { MinerTypesModule } from "./modules/admin/modules/miner-types/miner-types.module";

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
      {
        path: '/miner-types',
        module: MinerTypesModule,
      },
    ],
  },
];

@Module({
  imports: [
    MongooseModule.forRoot(MONGODB_URI),
    TypeOrmModule.forRoot(DB_CONFIG),
    AccountModule,
    InvestmentModule,
    RouterModule.forRoutes(adminRoutes),
    AdminModule,
    ShoppingRequestsModule,
    UsersListModule,
    MinerTypesModule,
    MinerModule,
    TransactionModule,
    CalculatorModule
  ],
})
export class ApplicationModule {}
