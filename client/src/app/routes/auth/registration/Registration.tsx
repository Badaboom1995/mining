import { Switch, Route, Link } from 'react-router-dom';
import { IRegistrationProps } from './Props';
import { Field } from '../../../components/field/Field';
import { Button } from '../../../components/button/Button';
import { withRouter } from '../../../services/index';
import { observer, inject } from 'mobx-react';
import { Validator } from '../../../services/validation/validator/Validator';

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

		
		return (
			<form onSubmit={e => { 
				e.preventDefault(); 
				auth.register();
			}} className='registration-form' >
				<div className='auth-form__title' >Регистрация</div>
				<Validator rules={[{name: 'required'}, {name: 'email', message: 'Неверный формат'}]} >
					<Field onChange={model.set}  name='email' value={model.email} tabIndex={1} label='Email' />
				</Validator>
				<Field onChange={model.set}  name='password' value={model.password} tabIndex={2} 			 type='password' label='Пароль' />
				<Field onChange={model.set}  name='retypePassword' value={model.retypePassword} tabIndex={3} type='password' label='Повторите пароль' />
				<div className='registration-form__footer' >
					<Button type='submit' tabIndex={4}  >Создать аккаунт</Button>
					<div>
						<Link tabIndex={5} to='/auth/login' >Уже зарегестрированны?</Link>
						<Link tabIndex={6} to='/auth/send-reset' >Забыли пароль?</Link>
					</div>
				</div>
			</form>
		);
	}
}