import { Switch, Route } from 'react-router-dom';
import { IAuthProps } from './Props';
import { Login } from './login/Login';
import { Registration } from './registration/Registration';
import { SendReset } from './send-reset/SendReset';
import { ResetPassword } from './reset-password/ResetPassword';
import { Card } from '../../components/card/Card';



export class Auth extends React.Component<IAuthProps> {
	/**
	 * Renders auth wrapper
	 */
	public render() {

		return (
			<div className='auth' >
				<Card className='auth-form' >
					<Switch >
						<Route path='/auth/login'  			component={Login} />
						<Route path='/auth/registration' 	component={Registration} />
						<Route path='/auth/send-reset' 		component={SendReset} />
						<Route path='/auth/reset-password' 	component={ResetPassword} />
					</Switch>
				</Card>
			</div>
		);
	}
}