import { accountService } from './account/account.service';
import { authService } from './auth/auth.service';
import { investmentService } from './investment/investment.service';
import { routingService } from './routing/routing.service';
import { uiService } from './ui/ui.service';
import { validationService } from './validation/validation.service';



export const withRouter : any = require('react-router').withRouter;




export const services = {
	account: accountService,
	auth: authService,
	investment: investmentService,
	routing: routingService,
	ui: uiService,
	validation: validationService
};