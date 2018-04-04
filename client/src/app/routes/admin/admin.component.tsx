import { IAdminProps } from './admin.props'
import { IAdminState } from './admin.state';
import { Orders } from './orders/orders.component';
import { NavLink, Switch, Route } from 'react-router-dom';
import { withRouter } from '../../services/index';

@withRouter
export class Admin extends React.Component<IAdminProps, IAdminState> {
	/**
	 * Admin inner pages
	 */
	public pages = [
		{ to: '/admin/orders', caption: 'Заказы', component: Orders },
		{ to: '/admin/users', caption: 'Пользователи', component: Orders },
		
	];
	/**
	 * Renders 
	 */
	public render() {
		
		return (
			<div className='admin' >
				<div className='admin-header' >
					<ul className='admin-header__list' >
						{this.pages.map(page => (
							<li key={page.to} >
								<NavLink className='admin-header__link' activeClassName='admin-header__link--active'  to={page.to}>{page.caption}</NavLink>
							</li>
						))}
					</ul>
					<div className='admin-header__logo' >Admin</div>
				</div>
				<div>
					<Switch>
						{this.pages.map(page => (
							<Route key={page.to} path={page.to} component={page.component} />
						))}
					</Switch>
				</div>
			</div>
		);
	}

}