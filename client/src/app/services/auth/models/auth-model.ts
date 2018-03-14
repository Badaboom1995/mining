import { observable, action } from 'mobx';
import { ValidationError } from '../../validation/models/validation-error';
import { autobind } from 'core-decorators';





export class AuthModel {
	/**
	 * Email form field
	 */
	@observable
	public email : string = '';

	/**
	 * Email form password
	 */
	@observable
	public password : string = '';

	/**
	 * Confirmation password
	 */
	@observable
	public retypePassword : string = '';

	/**
	 * Token for reset
	 */
	@observable
	public token : string = '';
	/**
	 * Form errors
	 */
	@observable
	public errors : ValidationError[] = [];

	/**
	 * Setter for fields
	 */
	@autobind		
	@action
	public set ({name, value}) {
		this[name] = value;
	}
}