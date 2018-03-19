
export interface IValidatorState {
	/**
	 * Error || jsx.element
	 * @type {*}
	 * @memberof IValidatorState
	 */
	error: string | JSX.Element;
	/**
	 * Validation failed
	 * @type {boolean}
	 * @memberof IValidatorState
	 */
	isError: boolean;
}
