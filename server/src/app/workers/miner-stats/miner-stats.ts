import { EthApi } from './eth/eth-api';
import { ZecApi } from './zec/zec-api';


const zecApi = new ZecApi('t1cZqETvYG25MfZpaMT6buYipPbVhmt21js');

zecApi.getTransactions(new Date(1513083949 * 1000)).then(transactions => {
	console.log(transactions);
	console.log('===========');
	console.log(`Transactions count is : ${transactions.length}`);
});



const ethApi = new EthApi('0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae');
						   
ethApi.getTransactions(new Date(1470609013 * 1000)).then(transactions => {
	console.log(transactions);
	console.log('===========');
	console.log(`Transactions count is : ${transactions.length}`);
});