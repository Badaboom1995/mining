import { Investment } from "../../../services/investment/model/investment";






export interface IInvestmentCardProps {
	/**
	 * Card class name
	 */
	className? : string;
	/**
	 * Investment model
	 */
	investment? : Investment;

	/**
	 * Other wrapper props
	 */
	[x: string] : any;
}