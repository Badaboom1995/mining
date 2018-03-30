import { Route, Switch } from 'react-router-dom';
import { Home } from '../home/Home';
import { Menu } from './menu/Menu';
import { AccountSettings } from '../account-settings/AccountSettings';
import { InvestmentMethods } from '../investment-methods/InvestmentMethods';
import { Investment } from '../investment/Investment';
import { Redirect } from 'react-router';
import { Wallet } from '../wallet/Wallet';
import { MyTeam } from '../my-team/MyTeam';
import { Footer } from '../../components/footer/Footer';
import { inject, observer } from "mobx-react";
import { IMainPageProps } from './Props';





@inject('account')
@observer
export class MainPage extends React.Component<IMainPageProps> {
	/**
	 * Top bar block
	 */
	public TopBar = ({ }) => {
		return (
			<header className='main-page-nav-bar' >
				<div className='main-page-nav-bar__icons' >
					<img className='main-page-nav-bar__search' src={require('img/search.svg')} />
					<img className='main-page-nav-bar__bell' src={require('img/bell.svg')} />
				</div>
			</header>
		);
	}
	/**
	 * Get profile to check is logged
	 */
	public componentDidMount() {
		const { account } = this.props;
		account.get();
	}
	/**
	 * render main page
	 */
	public render() {
		const { TopBar, props } = this;
		if (!props.account.isAppLoaded) return null;
		
		return (
			<div className='main-page' >
				<Menu />
				<div>
					<TopBar />
					<div className='main-page__content' >
						<div className='main-page__content-inner' >
							<Switch>
								<Route path='/lk/investment/methods' component={InvestmentMethods} />
								<Route path='/lk/investment' component={Investment} />
								<Route path='/lk/account' component={AccountSettings} />
								<Route path='/lk/wallet' component={Wallet} />
								<Route path='/lk/my-team' component={MyTeam} />
								<Route exact path='/lk' component={Home} />
								<Redirect to='/lk' />
							</Switch>
						</div>
						<Footer />
					</div>
				</div>
			</div>
		)
	}
}
