import { Route, Switch, Link } from 'react-router-dom';
import { MainPage } from './main-page/Main';
import { Uikit } from './uikit/Uikit';
import { Auth } from './auth/Auth';
import { IRootProps } from './Props';
import { inject, observer } from 'mobx-react';
import { withRouter } from '../services';
import { Requests } from './requests/Requests';
import { Landing } from './landing/Landing';
import { About } from './landing/about/About';
import { Questions } from './landing/questions/Questions';
import { Referal } from './landing/referal/Referal';
import { Reviews } from './landing/reviews/Reviews';

@withRouter
@inject('account')
@observer
export class Root extends React.Component<IRootProps> {
	/**
	 * Get profile to check is logged
	 */
	public componentDidMount() {
		const { account } = this.props;
		account.get();
	}

	/**
	 * Render root
	 */
	public render() {
		const { account } = this.props;

		if (!account.isAppLoaded) return null;

		return (
			<div>
				<Switch>
					{/* Put into landing routing */}
					<Route component={Requests} path='/requests' />
					
					<Route component={Landing} path='/landing' />

					<Route component={Uikit} path='/uikit' />

					<Route component={Auth} path='/auth' />
					<Route component={MainPage} path='/' />
				</Switch>
			</div>
		);
	}
}


