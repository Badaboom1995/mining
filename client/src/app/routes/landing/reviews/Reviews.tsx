import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { IReviewsProps } from './Props';

export class Reviews extends React.Component<IReviewsProps> {
	public render() {
		return (
			<div className='landing'>
                    <header className='landing-header'>
                        <div className='landing__container landing__container-flex'>
                            <a href='#' className='landing-logo'>Landing logo</a>
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
                    
                    <div className="about reviews">
                    <div className="title referal__title">
                            <h2 className="title__main-title">Історії успіху</h2>
                        </div>
                    <div className="about__item">
                        <div className="reviews__author-photo"><img src="" alt=""/></div>
                        <span className="about__short-title reviews__author-name">ОЛЕКСАНДРА</span>
                        <h2 className="about__item-title">А могла б зберігати гроші в банку і ніколи їх не примножити.</h2>
                        <p className="about__item-text">Це так вигідно, я просто хуїю, я вклала $2600 10 місяців назад і вже відбила їх. Зараз я маю $300 прибутку щомісяця. А могла б зберігати грощі в банку і ніколи їх не примножити. Також якщо я захочу продати установку то завжди можу повернути не меньше $2000</p>
                    </div>
                    <div className="about__item">
                        <div className="reviews__author-photo"><img src="" alt=""/></div>
                        <span className="about__short-title reviews__author-name">ОЛЕНА ВІКТОРІВНА</span>
                        <h2 className="about__item-title">Мережа стає тільки більшою, ні хто не дозволить цій технології просто перестати існувати.</h2>
                        <p className="about__item-text">Це так вигідно, я просто хуїю, я вклала $2600 10 місяців назад і вже відбила їх. Зараз я маю $300 прибутку щомісяця. А могла б зберігати грощі в банку і ніколи їх не примножити. Також якщо я захочу продати установку то завжди можу повернути не меньше $2000</p>
                    </div>
                    <div className="about__item">
                        <div className="reviews__author-photo"><img src="" alt=""/></div>
                        <span className="about__short-title reviews__author-name">ОЛЕКСАНДРА</span>
                        <h2 className="about__item-title">А могла б зберігати гроші в банку і ніколи їх не примножити.</h2>
                        <p className="about__item-text">Це так вигідно, я просто хуїю, я вклала $2600 10 місяців назад і вже відбила їх. Зараз я маю $300 прибутку щомісяця. А могла б зберігати грощі в банку і ніколи їх не примножити. Також якщо я захочу продати установку то завжди можу повернути не меньше $2000</p>
                    </div>
                    
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