



export interface IRequestProps {
	/**
	 * Delete button handler
	 */
	onDelete  : any;
	/**
	 * Checkbox click handler
	 */
	onCheck : any;
	/**
	 * Is item checked
	 */
	checked : boolean;
	/**
	 * Ordered user name
	 */
	name : string;
	/**
	 * Order status
	 */
	status : any;
	/**
	 * Instalation date
	 */
	date : string | Date;
	/**
	 * Device type
	 */
	type : string;
}