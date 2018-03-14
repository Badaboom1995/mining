



export interface IDataCardProps  {
	/**
	 * Block class name
	 */
	className ?: string;
	/**
	 * Title icon name
	 */
	icon ?: string; 
	/**
	 * Card title 
	 */
	title ?: string; 
	/**
	 * Content
	 */
	children?: any;
	/**
	 * Button text
	 */
	buttonText?: string;
	/**
	 * On card button press
	 */
	onButtonClick? : any;
	/**
	 * Other
	 */
	[x: string] : any;
}