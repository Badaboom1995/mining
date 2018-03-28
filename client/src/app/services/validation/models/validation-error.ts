



export class ValidationError {

	/**
	 * Get error message by name from list
	 */
	public static getMessage(list, name) : any {
		const error = list.find(item => item.name == name);
		return error ? error.message : '';
	}
	/**
	 * Name of field realtive to error
	 */
	public name : string;
	/**
	 * Reason message of error
	 */
	public message : string;
}
