import { Controller, Post, Req } from '@nestjs/common';
import { TransactionService } from '../services/transaction.service';
import { APIError } from '../../../helpers/index';



@Controller('transactions')
export class TransactionController {


	/**
	 * Creates an instance of TransactionController.
	 * @param {TransactionService} transactionService 
	 * @memberof TransactionController
	 */
	public constructor(
		private transactionService :  TransactionService
	) { }


	/**
	 * Get user transactions
	 */
	@Post('/list')
	public async getUserTransactions(@Req() req : any) {
		try {
			return await this.transactionService.getTransactionsByUserId(req.user.id);
		} catch (error) {
			return new APIError('There was an error getting transactions', 200, error);
		}
	}



}