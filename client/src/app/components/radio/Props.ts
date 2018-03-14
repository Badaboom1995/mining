


export interface IRadioProps {
	/**
	 * Radio label
	 */
	label ? : any;
	/**
	 * Value which will be emited by change handler
	 */
	value ? : any;
	/**
	 * Is radio selected
	 */
	checked ? : boolean;

	/**
	 * Field name
	 */
	name ? : string;
	/**
	 * Change handler
	 */
	onChange ? : any;

	/**
	 * Tab index for radio 
	 */
	tabIndex ? : number;
}