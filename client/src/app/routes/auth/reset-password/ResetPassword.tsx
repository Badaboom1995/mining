import { Switch, Route } from 'react-router-dom';
import { IResetPasswordProps } from './Props';
import { Field } from '../../../components/field/Field';
import { Button } from '../../../components/button/Button';
import { ValidationError } from '../../../services/validation/models/validation-error';
import { Validator } from '../../../services/validation/validator/Validator';
import { observer, inject } from 'mobx-react';


@inject('auth')
@observer
export class ResetPassword extends React.Component<IResetPasswordProps> {
	/**
	 * Renders 
	 */
	public render() {

		const { auth } = this.props;
		const model = auth.getForm('savePassword');
		const passwordError = ValidationError.getMessage(model.errors, 'password');

		return (
			<form 
				onSubmit={(event) => {
					event.preventDefault();
					auth.savePassword();
				}}
				className='reset-password-form' >
				<div className="auth-form__title">Новый пароль</div>
				<Validator permanentError={passwordError} rules={[ { name: 'required' }, { name: 'isLonger', value: 5, message: 'Минимальная длина пароля - 5' }]} >
					<Field type='password' name='password' value={model.password} onChange={model.set} label='Новый пароль' />
				</Validator>
				<Validator rules={[{ name: 'isEqual', value: model.password, message: 'Пароли не совпадают'  }]} >
					<Field type='password' name='retypePassword' onChange={model.set} value={model.retypePassword} label='Повторите пароль' />
				</Validator>
				<div className='reset-password-form__footer' >
					<Button type='submit'   >Сохранить</Button>
				</div>
			</form>
		);
	}
}