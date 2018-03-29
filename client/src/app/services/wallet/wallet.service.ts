import { UserBalance } from './models/user-balance';
import { observable, action } from 'mobx';
import { api } from '../../api/api';
import { User } from '../account/models/user';
import { Transaction } from './models/transaction';






export class WalletService {
	/**
	 * User balance model
	 * @type {UserBalance}
	 * @memberof WalletService
	 */
	@observable
	public balance : UserBalance = new UserBalance();

	/**
	 * User transactions list
	 * @type {Transaction[]}
	 * @memberof WalletService
	 */
	@observable 	
	public transactions : Transaction[] = [];
	/**
	 * Get user balance
	 */
	@action.bound
	public async getBalance () {
		try {
			const balance = await api.account.balance();
			this.balance = Object.assign(new UserBalance, balance.content);
		} catch { }
	}

	/**
	 * Get user transactions
	 * @memberof WalletService
	 */
	@action.bound
	public async getTransactions () { 
		try {
			const transactions = await api.transactions.list();
			this.transactions 
		} catch { }
	}
}



export const walletService = new WalletService();