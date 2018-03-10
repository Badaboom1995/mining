
export class ApiResponse<D = any> {
	/**
 	* Logical success field
	 */
	public success: boolean = true;
	/**
	 *
	 */
	public constructor(public data: D, public message: string = '', public status: number = 200) {
	}

}

export class ApiSuccess<D = any> extends ApiResponse<D> {
	/**
	 * Creates an instance of ApiSuccess.
	 * @param {D} [data={}]
	 * @param {string} [message='Success']
	 * @memberof ApiSuccess
	 */
	public constructor(data: D = {} as D, message : string = 'Success', status : number = 200) {
		super(data, message, status);
	}
}


export class ApiError<D = any> extends ApiResponse<D> {
	/**
	 * Creates an instance of ApiError.
	 * @param {D} [data={}]
	 * @param {string} [message='Error']
	 * @memberof ApiError
	 */
	public constructor(message : string = 'Error', data: D = {} as D, status : number = 200) {
		super(data, message, status);
		// Error.captureStackTrace(this, this.constructor.name);
	}
}



