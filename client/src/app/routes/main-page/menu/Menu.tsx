import { IMenuProps } from "./Props";
import { NavLink } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { withRouter } from "../../../services/index";


@withRouter
@inject('auth')
@observer
export class Menu extends React.Component<IMenuProps> {
	/**
	 * Menu items
	 */
	public menu = [
		{ name: 'Главная', to: '/' },
		{ name: 'Инвестиции', to: '/investment' },
		{ name: 'Моя команда', to: '/my-team' },
		{ name: 'Карьера', to: '/career' },
		{ name: 'Кошелек', to: '/wallet' },
		{ name: 'Документы', to: '/documents' },
		{ name: 'Настройки', to: '/account' }
	];
	/**
	 * render
	 */
	public render() {
		const { auth } = this.props;

		return (
			<aside className='menu' >
				<div className='menu__logo'  >
					Mining Logo
				</div>
				<div className='menu__avatar' >
					<img src='http://via.placeholder.com/80x80' className='menu__avatar-image' />
				</div>

				<div className='menu__user-info' >
					<div className='menu__user-name' >Nick taylor</div>
					<div className='menu__user-position' >CEO</div>
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