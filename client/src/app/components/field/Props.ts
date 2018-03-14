



export interface IFieldProps {
	/**
	 * Field current value
	 */
	value ? : string;
	/**
	 * Field placeholder
	 */
	placeholder? : string;
	/**
	 * Change handler
	 */
	onChange? : any;
	/**
	 * Field label element / string
	 */
	label? : any;
	/**
	 * Field name
	 */
	name? : string;
	/**
	 * Type attr
	 */
	type? : string;
	/**
	 * Wrapper classname
	 */
	className? : string;
	/**
	 * Field tabIndex
	 */
	tabIndex? : number;

	/**
	 * Is field disabled
	 */
	disabled? : boolean;

}