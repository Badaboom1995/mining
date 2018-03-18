import { Miner } from '../../../services/investment/model/miner';




export interface IMinerProductProps {
	/**
	 * Miner item
	 */
	miner : Miner;
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