import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { IReferalProps } from './Props';

export class Referal extends React.Component<IReferalProps> {
	public render() {
		return (
			<div className='landing landing--referal'>
                    <header className='landing-header'>
                        <div className='landing__container landing__container-flex'>
                            <a href='#' className='landing-logo'>Landing log</a>
                            <nav className='landing-header__navigation'>
                                <ul className='landing-header__navigation-list'>
                                    <li className='landing-header__navigation-item'><a href='#' className='landing-header__navigation-link'>Головна</a></li>
                                    <li className='landing-header__navigation-item'><a href='#' className='landing-header__navigation-link'>Про проект</a></li>
                                    <li className='landing-header__navigation-item'><a href='#' className='landing-header__navigation-link'>Історія успіху</a></li>
                                    <li className='landing-header__navigation-item'><a href='#' className='landing-header__navigation-link'>Реферальна програма</a></li>
                                    <li className='landing-header__navigation-item'><a href='#' className='landing-header__navigation-link'>Новини</a></li>
                                    <li className='landing-header__navigation-item'><a href='#' className='landing-header__navigation-link'>FAQ</a></li>
                                </ul>
                            </nav>
                            <div className='landing-header__buttons'>
                                <a href='' className='landing-button landing-button--empty'>Вхід</a>
                                <a href='' className='landing-button'>Реєстрація</a>
                            </div>
                        </div>
                    </header>
                    <div className="referal">
                        <div className="big-back"></div>
                        <div className="title referal__title">
                            <h2 className="title__main-title">Реферальна Програма</h2>
                            <p className="title__subtitle">УСІ ВІДСОТКИ ЗА ЗАПРОШЕННЯ РЕФЕРАЛІВ НАРАХОВУЮТСЯ ВІДПОВІДНО ДО ЇХ КОЖНОЇ: </p>
                        </div>
                        <table className="referal__table">
                            <tbody>
                                <tr className="referal__table-head">
                                    <th className="referal__table-head-cell">ІНВЕСТИЦІЇ</th>
                                    <th className="referal__table-head-cell">ПОКУПКИ УСТАНОВОК</th>
                                    <th className="referal__table-head-cell">ПРИБУТКУ</th>
                                </tr>
                                <tr className="referal__table-row" >
                                    <td className="referal__table-body-cell">
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                    </td>
                                    <td className="referal__table-body-cell"> 
                                        Перші <span>10</span> особисто запрошених <span>2%</span> 
                                    </td>
                                    <td className="referal__table-body-cell">
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                    </td>
                                </tr>
                                <tr className="referal__table-row">
                                    <td className="referal__table-body-cell">
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                    </td>
                                    <td className="referal__table-body-cell"> 
                                        Перші <span>10</span> особисто запрошених <span>2%</span> 
                                    </td>
                                    <td className="referal__table-body-cell">
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                    </td>
                                </tr>
                                <tr className="referal__table-row">
                                    <td className="referal__table-body-cell">
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                    </td>
                                    <td className="referal__table-body-cell"> 
                                        Перші <span>10</span> особисто запрошених <span>2%</span> 
                                    </td>
                                    <td className="referal__table-body-cell">
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                    </td>
                                </tr>
                                <tr className="referal__table-row">
                                    <td className="referal__table-body-cell">
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                    </td>
                                    <td className="referal__table-body-cell"> 
                                        Перші <span>10</span> особисто запрошених <span>2%</span> 
                                    </td>
                                    <td className="referal__table-body-cell">
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        {/* <div className="referal__table">
                            <div className="referal__table-head">
                                <div className="referal__table-head-cell">ІНВЕСТИЦІЇ</div>
                                <div className="referal__table-head-cell">ПОКУПКИ УСТАНОВОК</div>
                                <div className="referal__table-head-cell">ПРИБУТКУ</div>
                            </div>
                            <div className="referal__table-row">
                                <div className="referal__table-body-cell">
                                    <span className="referal__star"></span>
                                    <span className="referal__star"></span>
                                </div>
                                <div className="referal__table-body-cell">
                                    Перші <span>10</span> особисто запрошених <span>2%</span> 
                                </div>
                                <div className="referal__table-body-cell">
                                    <span className="referal__star"></span>
                                    <span className="referal__star"></span>
                                </div>
                            </div>
                            <div className="referal__table-row">
                                <div className="referal__table-body-cell">
                                    <span className="referal__star"></span>
                                    <span className="referal__star"></span>
                                    <span className="referal__star"></span>
                                </div>
                                <div className="referal__table-body-cell">
                                    Перші <span>10</span> особисто запрошених <span>2%</span> 
                                </div>
                                <div className="referal__table-body-cell">
                                    <span className="referal__star"></span>
                                    <span className="referal__star"></span>
                                    <span className="referal__star"></span>
                                </div>
                            </div>
                            <div className="referal__table-row">
                                <div className="referal__table-body-cell">
                                    <span className="referal__star"></span>
                                    <span className="referal__star"></span>
                                    <span className="referal__star"></span>
                                    <span className="referal__star"></span>
                                </div>
                                <div className="referal__table-body-cell">
                                    Перші <span>10</span> особисто запрошених <span>2%</span> 
                                </div>
                                <div className="referal__table-body-cell">
                                    <span className="referal__star"></span>
                                    <span className="referal__star"></span>
                                    <span className="referal__star"></span>
                                    <span className="referal__star"></span>
                                </div>
                            </div>
                            <div className="referal__table-row">
                                <div className="referal__table-body-cell">
                                    <span className="referal__star"></span>
                                    <span className="referal__star"></span>
                                    <span className="referal__star"></span>
                                    <span className="referal__star"></span>
                                    <span className="referal__star"></span>
                                </div>
                                <div className="referal__table-body-cell">
                                    Перші <span>10</span> особисто запрошених <span>2%</span> 
                                </div>
                                <div className="referal__table-body-cell">
                                    <span className="referal__star"></span>
                                    <span className="referal__star"></span>
                                    <span className="referal__star"></span>
                                    <span className="referal__star"></span>
                                    <span className="referal__star"></span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="call-to-action">
                        <div className="title">
                            <h2 className="title__main-title">Станьте учасником команди</h2>
                            <p className="title__subtitle">МЕРЕЖА СТАЄ ТІЛЬКИ БІЛЬШОЮ, НІ ХТО НЕ ДОЗВОЛИТЬ ЦІЙ ТЕХНОЛОГІЇ ПРОСТО ПЕРЕСТАТИ ІСНУВАТИ.</p>
                            </div>
                            <a className="landing-button landing-button--big">Почати</a>
                            <a className="call-to-action__link">Увійдіть, якщо вже є акаунт</a>
                    </div>
                    <footer className='landing-header landing-header--footer'>
                            <div className='landing__container landing__container-flex'>
                            <a href='#' className='landing-logo'>Mining LOGO</a>
                            <nav className='landing-header__navigation'>
                                <ul className='landing-header__navigation-list'>
                                    <li className='landing-header__navigation-item'><a href='#' className='landing-header__navigation-link'>Головна</a></li>
                                    <li className='landing-header__navigation-item'><a href='#' className='landing-header__navigation-link'>Про проект</a></li>
                                    <li className='landing-header__navigation-item'><a href='#' className='landing-header__navigation-link'>Історія успіху</a></li>
                                    <li className='landing-header__navigation-item'><a href='#' className='landing-header__navigation-link'>Реферальна програма</a></li>
                                    <li className='landing-header__navigation-item'><a href='#' className='landing-header__navigation-link'>Новини</a></li>
                                    <li className='landing-header__navigation-item'><a href='#' className='landing-header__navigation-link'>FAQ</a></li>
                                </ul>
                            </nav>
                            <div className='landing-header__buttons'>
                                <a href='' className='landing-button landing-button--empty'>Вхід</a>
                                <a href='' className='landing-button'>Реєстрація</a>
                            </div>
                        </div>
                    </footer>
			</div>
		)
	}
}