import { accountService } from './account/account';
import { authService } from './auth/auth';
import { investmentService } from './investment/investment';
import { routingService } from './routing/routing';
import { uiService } from './ui/ui';



export const withRouter : any = require('react-router').withRouter;




export const services = {
	account: accountService,
	auth: authService,
	investment: investmentService,
	routing: routingService,
	ui: uiService,
};