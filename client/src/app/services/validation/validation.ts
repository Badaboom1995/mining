import { observable } from 'mobx';
import { autobind } from 'core-decorators';
import { Validator } from './validator/Validator';




export class ValidationService {
	/**
	 * List of validator components
	 */
	@observable
	public validators : Validator[] = [];

	/**
	 * Register validator from list
	 * @param validator 
	 */
	@autobind
	public register (validator : Validator) {
		if (!this.validators.some(item => item == validator)) this.validators.push(validator);
	}
	/**
	 * Remove validator from register
	 * @param validator 
	 */
	@autobind
	public remove (validator :Validator) {
		this.validators = this.validators.filter(item => item != validator);
	}

	/**
	 * Iterate registred validators and exec validate
	 * @param name validator group name
	 */
	@autobind
	public async validate (name: string = '') : Promise<boolean>  {
		const result = this.validators
			.filter(validator => validator.props.name == name || !name)
			.map(validator => validator.validate())
			.every(result => result);
		return result;
	}

	/**
	 * Reset validator errors
	 * @param name validator group name
	 */
	@autobind
	public refresh (name: string = '') : void  {
		const result = this.validators
			.filter(validator => validator.props.name == name || !name)
			.map(validator => validator.refresh());
	}
}


export const validationService = new ValidationService();