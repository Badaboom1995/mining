
import * as React from 'react';
import { IValidatorProps } from './Props';
import { IValidatorState } from './State';
import { IValidatorRule } from './Rule';
import * as PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';


@inject('validation')
@observer
export class Validator extends React.Component<IValidatorProps, IValidatorState> {

	public static defaultProps: IValidatorProps = {
		rules: [],
		children: null,
		name: ''
	}

	public state: IValidatorState = {
		error: '',
		isError: false
	}


	public static contextTypes = {
		_Validation_: PropTypes.any
	}

	/**
	 * 
	 */
	public refresh = () => {
		this.setState({ error: '', isError: false });
	}
	/**
	 * Validation rules executors
	 */
	public validation = {
		required: (value: any, rule: IValidatorRule) => value || value == '0',
		isTrue: (value : any, rule: IValidatorRule) =>  Boolean(value),
		isNumeric: (value : any, rule: IValidatorRule) => !isNaN(Number(value)),
		latin: (value : string, rule: IValidatorRule) => new RegExp("^[a-zA-Z]*$").test(value),
		noLatin: (value : string, rule: IValidatorRule) => !new RegExp("^[a-zA-Z]*$").test(value),
		cyrillic: (value : string, rule: IValidatorRule) => new RegExp("^[а-яА-Я]*$").test(value),
		isShorter: (value : any, rule : IValidatorRule) => value.toString().trim().length < rule.value,
		isLonger: (value : any, rule : IValidatorRule) => value.toString().trim().length > rule.value,
		email: (value : string, rule : IValidatorRule) => new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value),
		isEqual: (value : string, rule : IValidatorRule) => value == rule.value,
		isHasValue: (value : any, rule : IValidatorRule) => rule.value || rule.value == '0',
		isNotContains: (value : any, rule : IValidatorRule ) => value.indexOf(rule.value) == -1,
		custom: (value : any, rule : IValidatorRule) => rule.value,
		executeCustom: (value : any, rule : IValidatorRule) => rule.value(),
		isGreaterOrEqual: (value: any, rule: IValidatorRule) => Number(value) >= Number(rule.value),
	}
	/**
	 * 
	 * Register validator
	 * @memberof Validator
	 */
	public componentDidMount() {
		this.props.validation.register(this);
	}
	/**
	 * 
	 * Unregister validator 
	 * @memberof Validator
	 */
	public componentWillUnmount() {
		this.props.validation.remove(this);
	}

	/**
	 * Validation by passed rules
	 */
	public validate = () : boolean => {
		const { rules, children } = this.props;
		const { value } = children.props;
		let error : string | JSX.Element = '';
		let isError = false;

		rules.some((rule, index) => {
			if (!(rule.name in this.validation)) {
				return true;
			}
			const result = this.validation[rule.name](value, rule);
			if (!result) {
				error = rule.message;
				isError = true;
				return true;
			}
			return false;
		});
		this.setState({
			error,
			isError
		});
		return !isError;
	}

	public render() {
		const { children, permanentError } = this.props;
		const { error, isError } = this.state;


		return (
			React.cloneElement(children as React.ReactElement<any>, { error: permanentError || error, isError: permanentError || isError })
		);
	}
}



