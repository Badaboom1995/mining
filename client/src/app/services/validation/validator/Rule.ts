
export interface IValidatorRule {
	/**
	 * Rule name
	 * @type {string}
	 * @memberof IValidatorRule
	 */
	name: string;
	/**
	 * Value for rule test
	 * @type {*}
	 * @memberof IValidatorRule
	 */
	value?: any;
	/**
	 * Error message 
	 * @type {(string | JSX.Element)}
	 * @memberof IValidatorRule
	 */
	message?: string | JSX.Element
}
