import { Component } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Transaction } from "../../../entity/transaction.entity";
import { Repository } from "typeorm";






@Component()
export class TransactionService {
	/**
	 * Init services
	 * @param {Repository<Transaction>} transactionRepository 
	 * @memberof TransactionService
	 */
	public constructor(
		@InjectRepository(Transaction) private transactionRepository : Repository<Transaction>
	) {}
	

	/**
	 * Get  transactions by user id
	 * @param {*} id 
	 * @memberof TransactionService
	 */
	public async getTransactionsByUserId(userId : any) : Promise<Transaction[]> {
		const transactions = await this.transactionRepository.find({
			where: { userId }
		});
		return transactions;
	}

}