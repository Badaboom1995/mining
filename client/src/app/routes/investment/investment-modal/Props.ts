import { RoutingService } from '../../../services/routing/routing';
import { InvestmentService } from '../../../services/investment/investment';



export interface IInvestmentModalProps {
	/**
	 * Close button handler
	 */
	onClose? : any;
	/**
	 * Investment service
	 */
	investment? : InvestmentService;
	/**	
	 * Routing service
	 */
	routing? : RoutingService;

	/**
	 * Prev modal config
	 */
	prevModal ? : {
		caption: string;
		onSwitch: any;
	}
	/**
	 * Next modal config
	 */
	nextModal ? : {
		caption: string;
		onSwitch: any;
	}
}