



export interface ISwitchProps {
	/**
	 * Switch current value
	 */
	value ? : boolean;
	/**
	 * Change handler
	 */
	onChange? : any;
	/**
	 * Switch label element / string
	 */
	label? : any;
	/**
	 * Switch name
	 */
	name? : string;
	/**
	 * Wrapper classname
	 */
	className? : string;
	/**
	 * Switch tabIndex
	 */
	tabIndex? : number;
	/**
	 * Is switch disabled
	 */
	disabled?: boolean;
}