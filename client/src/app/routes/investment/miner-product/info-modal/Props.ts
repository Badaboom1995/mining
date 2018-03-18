import { Miner } from "../../../../services/investment/model/miner";





export interface IInfoModalProps {
	/**
	 * Miner model
	 */
	miner : Miner;
	/**
	 * Close btn handler
	 */
	onClose : any;

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