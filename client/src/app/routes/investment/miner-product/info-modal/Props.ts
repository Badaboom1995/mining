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
}