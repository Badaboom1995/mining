import { Switch, Route } from 'react-router-dom';
import { IResetPasswordProps } from './Props';
import { Field } from '../../../components/field/Field';
import { Button } from '../../../components/button/Button';



export class ResetPassword extends React.Component<IResetPasswordProps> {
	/**
	 * Renders 
	 */
	public render() {

		return (
			<div className='reset-password-form' >
				<div className="auth-form__title">Новый пароль</div>
				<Field label='Новый пароль' />
				<Field label='Повторите пароль' />
				<div className='reset-password-form__footer' >
					<Button   >Сохранить</Button>

				</div>
			</div>
		);
	}
}