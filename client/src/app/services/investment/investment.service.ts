import { observable } from 'mobx';
import { Miner } from './model/miner';
import { Investment } from './model/investment';
import { InvestmentParams } from './model/investment-params';





export class InvestmentService {
	/**
	 * Miners list
	 */
	@observable
	public miners : Miner[] = [
		new Miner({
			name: 'Установка 1',
			video: 'Asus GeForce GTX 1060 Phoenix 3072MB',
			price: 2123
		}),
		new Miner({
			name: 'Установка 2',
			video: 'Asus ROG Radeon RX 570 STRIX 4096MB',
			price: 1253
		})
	];

	/**
	 * User investments
	 */
	@observable
	public investments = [
		new Investment(),
		new Investment()
	];
	/**
	 * Investment params model
	 */ 
	@observable 
	public investmentParams = new InvestmentParams();


	



}


export const investmentService = new InvestmentService();