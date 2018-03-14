import { Switch, Route, Link } from 'react-router-dom';
import { ISendResetProps } from './Props';
import { Field } from '../../../components/field/Field';
import { Button } from '../../../components/button/Button';



export class SendReset extends React.Component<ISendResetProps> {
	/**
	 * Renders 
	 */
	public render() {

		return (
			<div className='send-reset-form' >
				<div className="auth-form__title">Восстановление пароля</div>
				<Field tabIndex={1} label='Email' />
				<div className='send-reset-form__footer' >
					<Button tabIndex={2}  >Отправить письмо</Button>
					<div>
						<Link tabIndex={3} to='/auth/login' >Вернуться ко входу</Link>
						<Link tabIndex={4} to='/auth/send-reset' >Нет аккаунта?</Link>
					</div>
				</div>
			</div>
		);
	}
}