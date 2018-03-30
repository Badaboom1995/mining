import { Module } from "@nestjs/common";
import { User } from "../../entity/user.entity";
import { Transaction } from "../../entity/transaction.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TransactionService } from "./services/transaction.service";
import { TransactionController } from './controller/transaction.controller';






@Module({
	controllers: [TransactionController],
	imports: [TypeOrmModule.forFeature([User, Transaction])],
	components: [
		TransactionService
	]
	
})
export class TransactionModule {}