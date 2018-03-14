import { Switch, Route, Link } from 'react-router-dom';
import { IRegistrationProps } from './Props';
import { Field } from '../../../components/field/Field';
import { Button } from '../../../components/button/Button';



export class Registration extends React.Component<IRegistrationProps> {
	/**
	 * Renders 
	 */
	public render() {

		return (
			<div className='registration-form' >
				<div  className='auth-form__title' >Регистрация</div>
				<Field tabIndex={1} label='Email' />
				<Field tabIndex={2} label='Пароль' /> 
				<Field tabIndex={3} label='Повторите пароль' /> 
				<div className='registration-form__footer' >
					<Button tabIndex={4}  >Создать аккаунт</Button>
					<div>
						<Link tabIndex={5} to='/auth/login' >Уже зарегестрированны?</Link>
						<Link tabIndex={6} to='/auth/send-reset' >Забыли пароль?</Link>
					</div>
				</div>
			</div>
		);
	}
}