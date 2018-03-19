import { IValidatorRule } from './Rule';
import { ValidationService } from '../validation';


export interface IValidatorProps {
	children: React.ReactElement<any>
	/**
	 * Ошибка которая будет отображена всегда если передано в проп
	 * @type {*}
	 * @memberof IValidatorProps
	 */
	permanentError?: string | JSX.Element;
	/**
	 * Список правил для валидации
	 * @type {IValidatorRule[]}
	 * @memberof IValidatorProps
	 */
	rules?: IValidatorRule[];
	/**
	 * Название группы для валидации
	 * @type {string}
	 * @memberof IValidatorProps
	 */
	name? : string;
	/**
	 * Validation service
	 */
	validation? : ValidationService;
}
