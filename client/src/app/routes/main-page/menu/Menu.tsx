import { IMenuProps } from "./Props";
import { NavLink } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { withRouter } from "../../../services/index";


@withRouter
@inject('auth', 'account')
@observer
export class Menu extends React.Component<IMenuProps> {
	/**
	 * Menu items
	 */
	public menu = [
		{ name: 'Главная', to: '/lk' },
		{ name: 'Инвестиции', to: '/lk/investment' },
		{ name: 'Моя команда', to: '/lk/my-team' },
		// { name: 'Карьера', to: '/lk/career' },
		{ name: 'Кошелек', to: '/lk/wallet' },
		// { name: 'Документы', to: '/lk/documents' },
		{ name: 'Настройки', to: '/lk/account' }
	];
	/**
	 * render
	 */
	public render() {
		const { auth, account } = this.props;

		return (
			<aside className='menu' >
				<div className='menu__logo'  >
					Mining Logo
				</div>
				<div className='menu__avatar' >
					<img src={account.user.photo ||  'http://via.placeholder.com/80x80'} className='menu__avatar-image' />
				</div>

				<div className='menu__user-info' >
					<div className='menu__user-name' >{account.user.firstName} {account.user.lastName}</div>
					<div className='menu__user-position' >{account.user.position}</div>
				</div>

				<ul className='menu__list' >
					{this.menu.map(item => (
						<NavLink exact activeClassName='menu__list-link--active' className='menu__list-link' key={item.to} to={item.to} >
							{item.name}
						</NavLink>
					))}
				</ul>

				<div className='menu__logout' onClick={auth.logout} >Выйти</div>
			</aside>
		);
	}
}
