import { Controller, Post, Req } from '@nestjs/common';
import { TransactionService } from '../services/transaction.service';
import { APIError } from '../../../helpers/index';
import { APISuccess } from '../../../helpers/APISuccess';



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
			const transactions = await this.transactionService.getTransactionsByUserId(req.user.id);
			return new APISuccess(transactions);
		} catch (error) {
			return new APIError('There was an error getting transactions', 200, error);
		}
	}



}