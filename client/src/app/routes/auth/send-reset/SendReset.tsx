import { Switch, Route, Link } from 'react-router-dom';
import { ISendResetProps } from './Props';
import { Field } from '../../../components/field/Field';
import { Button } from '../../../components/button/Button';
import { Validator } from "../../../services/validation/validator/Validator";
import { ValidationError } from '../../../services/validation/models/validation-error';
import { observer, inject } from 'mobx-react';

@inject('auth')
@observer
export class SendReset extends React.Component<ISendResetProps> {
	/**
	 * Renders
	 */
	public render() {
		const { auth } = this.props;
		const model = auth.getForm('sendReset');
		const emailError = ValidationError.getMessage(model.errors, 'email');

		return (
			<form onSubmit={(e) => {
				e.preventDefault();
				auth.sendReset();
			}} className='send-reset-form' >
				<div className="auth-form__title">Восстановление пароля</div>
				<Validator permanentError={emailError} rules={[ {name: 'required', message: 'Укажите email'} ]} >
					<Field name='email' value={model.email} onChange={model.set} tabIndex={1} label='Email' />
				</Validator>
				<div className='send-reset-form__footer' >
					<Button type='submit' tabIndex={2}  >Отправить письмо</Button>
					<div>
						<Link tabIndex={3} to='/auth/login' >Вернуться ко входу</Link>
						<Link tabIndex={4} to='/auth/registration' >Нет аккаунта?</Link>
					</div>
				</div>
			</form>
		);
	}
}
