import { Route, Switch } from 'react-router-dom';
import { Home } from '../home/Home';
import { Menu } from './menu/Menu';
import { AccountSettings } from '../account-settings/AccountSettings';
import { InvestmentMethods } from '../investment-methods/InvestmentMethods';
import { Investment } from '../investment/Investment';
import { Redirect } from 'react-router';
import { Wallet } from '../wallet/Wallet';
import { MyTeam } from '../my-team/MyTeam';






export class MainPage extends React.Component {
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
	 * render main page
	 */
	public render() {
		const { TopBar } = this;
		return (
			<div className='main-page' >
				<Menu />
				<div>

					<TopBar />
					<div className='main-page__content' >
						<div className='main-page__content-inner' >
							<Switch>
								<Route path='/investment/methods' component={InvestmentMethods} />
								<Route path='/investment' component={Investment} />
								<Route path='/account' component={AccountSettings} />
								<Route path='/wallet' component={Wallet} />
								<Route path='/my-team' component={MyTeam} />
								
								<Route exact path='/' component={Home} />

								<Redirect to='/' />
							</Switch>
						</div>
						<footer className='main-footer main-page__footer' >
							<div className='main-footer__copyright' >© The Mining Dream</div>
							<div className='main-footer__social' >
								<div className='main-footer-social-item' ></div>
								<div className='main-footer-social-item' ></div>
								<div className='main-footer-social-item' ></div>
								<div className='main-footer-social-item' ></div>
							</div>
							<div className='main-footer-lang' >
								<div className='main-footer-lang__item ' >RU</div>
								<div className='main-footer-lang__item main-footer-lang__item--active' >UA</div>
								<div className='main-footer-lang__item ' >ENG</div>
							</div>
						</footer>



					</div>


				</div>
			</div>
		)
	}
}