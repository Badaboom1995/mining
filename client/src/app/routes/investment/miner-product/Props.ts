import { Miner } from '../../../services/investment/model/miner';
import { RoutingService } from '../../../services/routing/routing';




export interface IMinerProductProps {
	/**
	 * Miner item
	 */
	miner : Miner;
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