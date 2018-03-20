import { ZecApi } from './zec/zec-api';


const api = new ZecApi('t1cZqETvYG25MfZpaMT6buYipPbVhmt21js');

api.getTransactions(new Date(1513083949 * 1000)).then(transactions => {
	console.log(transactions);
	console.log('===========');
	console.log(`Transactions count is : ${transactions.length}`);
});

