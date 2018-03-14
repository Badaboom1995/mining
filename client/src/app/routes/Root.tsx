import { Route, Switch, Link } from 'react-router-dom';
import { MainPage } from './main-page/Main';
import { Uikit } from './uikit/Uikit';
import { Auth } from './auth/Auth';




export class Root extends React.Component {
	/**
	 * Render root
	 */
	public render() {
		
		return (
			<div>
				<Switch>
					<Route component={Auth} path='/auth' />
					<Route component={Uikit} path='/uikit' />
					<Route component={MainPage} path='/' />
				</Switch>
			</div>
		);
	}
}


