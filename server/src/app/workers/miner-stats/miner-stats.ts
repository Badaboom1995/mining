import { EthApi } from './eth/eth-api';
import { ZecApi } from './zec/zec-api';
import { MONGODB_URI } from '../../config/environments.config';
import { Users } from '../../modules/account/schemas/user.schema';
import { Investments } from '../../modules/common/schemas/index';

const agenda = new (require('agenda'))({ db: {
	address: MONGODB_URI
}});



agenda.define('Update users balance', async () => {
	const users = await Users.find();
	users.map( async user => { 
		const investments = await Investments.find({ userId: user._id });
		investments.map(investment => {
			const zecApi = new ZecApi(investment.address);
			const ethApi = new EthApi(investment.address);	

		});
	});	

});




const zecApi = new ZecApi('t1cZqETvYG25MfZpaMT6buYipPbVhmt21js');
const ethApi = new EthApi('0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae');


zecApi.getTransactions(new Date(1513083949 * 1000)).then(transactions => {
	console.log(transactions);
	console.log('===========');
	console.log(`Transactions count is : ${transactions.length}`);
});

						   
ethApi.getTransactions(new Date(1470609013 * 1000)).then(transactions => {
	console.log(transactions);
	console.log('===========');
	console.log(`Transactions count is : ${transactions.length}`);
});






