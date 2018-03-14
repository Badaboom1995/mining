


export interface ISelectProps {
	/**
	 * Select value
	 */
	value ? : any;
	/**
	 * Value placeholder
	 */
	placeholder? : any;
	/**
	 * Change handler
	 */
	onChange ? : any;
	/**
	 * Select label
	 */
	label ? : any;
	/**
	 * Options list
	 */
	options ? : any[];
	/**
	 * Field name
	 */
	name? : string;
	/**
	 * Value key for rc-select
	 */
	valueKey? : string;
	/**
	 * Label key for rc-select
	 */
	labelKey? : string;

	/**
	 * Wrapper class name
	 */
	className? : string;
}