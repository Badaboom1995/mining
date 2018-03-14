





export class ValidationError {
	/**
	 * Get error by name from list
	 */
	public static get (list, name) : ValidationError {
		return list.find(item => item.name == name);
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