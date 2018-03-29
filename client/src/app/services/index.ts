import { accountService } from './account/account.service';
import { authService } from './auth/auth.service';
import { investmentService } from './investment/investment.service';
import { routingService } from './routing/routing.service';
import { uiService } from './ui/ui.service';
import { validationService } from './validation/validation.service';
import { ProfileService, profileService } from './profile/profile.service';
import { walletService } from './wallet/wallet.service';



export const withRouter : any = require('react-router').withRouter;




export const services = {
	wallet: walletService,
	profile: profileService,
	account: accountService,
	auth: authService,
	investment: investmentService,
	routing: routingService,
	ui: uiService,
	validation: validationService
};