import { Switch, Route, Link } from 'react-router-dom';
import { ILoginProps } from './Props';
import { Field } from '../../../components/field/Field';
import { Button } from '../../../components/button/Button';
import { inject, observer } from 'mobx-react';
import { withRouter } from '../../../services/index';
import { Validator } from '../../../services/validation/validator/Validator';
import { ValidationError } from "../../../services/validation/models/validation-error";

@withRouter
@inject('auth')
@observer
export class Login extends React.Component<ILoginProps> {
	/**
	 * Renders
	 */
	public render() {


		const { auth } = this.props;
		const model = auth.getForm('login');
		const emailError = ValidationError.getMessage(model.errors, 'email');
		const passwordError = ValidationError.getMessage(model.errors, 'password');

		return (
			<form onSubmit={e => {
				e.preventDefault();
				auth.login();
			}} className='login-form' >
				<div className="auth-form__title">Вход в систему</div>
				<Validator permanentError={emailError} rules={[{ name: 'required' }]} >
					<Field name='email' onChange={model.set} value={model.email} tabIndex={1} label='Email' />
				</Validator>
				<Validator permanentError={passwordError} rules={[{ name: 'required' }]} >
					<Field name='password' onChange={model.set} value={model.password} tabIndex={2} type='password' label='Пароль' />
				</Validator>
				<div className='login-form__footer' >
					<Button type='submit' tabIndex={3}  >Войти</Button>
					<div>
						<Link tabIndex={4} to='/lk/auth/registration' >Нет аккаунта?</Link>
						<Link tabIndex={5} to='/lk/auth/send-reset' >Забыли пароль?</Link>
					</div>
				</div>
			</form>
		);
	}
}
