import { Switch, Route, Link } from 'react-router-dom';
import { IRegistrationProps } from './Props';
import { Field } from '../../../components/field/Field';
import { Button } from '../../../components/button/Button';
import { withRouter } from '../../../services/index';
import { observer, inject } from 'mobx-react';
import { Validator } from '../../../services/validation/validator/Validator';
import { ValidationError } from '../../../services/validation/models/validation-error';

@withRouter
@inject('auth')
@observer
export class Registration extends React.Component<IRegistrationProps> {
	/**
	 * Renders
	 */
	public render() {
		const { auth } = this.props;
		const model = auth.getForm('registration');
		const emailError = ValidationError.getMessage(model.errors, 'email');
    const passwordError = ValidationError.getMessage(model.errors, 'password');

		return (
			<form onSubmit={e => {
				e.preventDefault();
				auth.register();
			}} className='registration-form' >
				<div className='auth-form__title' >Регистрация</div>
				<Validator permanentError={emailError} rules={[{name: 'required'}, {name: 'email', message: 'Неверный формат'}]} >
					<Field onChange={model.set}  name='email' value={model.email} tabIndex={1} label='Email' />
				</Validator>
				<Validator permanentError={passwordError} rules={[{name: 'required' }, { name: 'isLonger', value: 5, message: 'Минимальная длина - 6 символов' }]} >
					<Field onChange={model.set}  name='password' value={model.password} tabIndex={2} type='password' label='Пароль' />
				</Validator>
				<Validator rules={[{name: 'isEqual', value: model.password, message: 'Пароли не совпадают'}]} >
					<Field onChange={model.set}  name='retypePassword' value={model.retypePassword} tabIndex={3} type='password' label='Повторите пароль' />
				</Validator>
				<div className='registration-form__footer' >
					<Button type='submit' tabIndex={4}  >Создать аккаунт</Button>
					<div>
						<Link tabIndex={5} to='/lk/auth/login' >Уже зарегестрированны?</Link>
						<Link tabIndex={6} to='/lk/auth/send-reset' >Забыли пароль?</Link>
					</div>
				</div>
			</form>
		);
	}
}
