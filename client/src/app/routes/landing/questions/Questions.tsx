import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { IQuestionsProps } from './Props';

export class Questions extends React.Component<IQuestionsProps> {
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
                    
                    <div className="questions">
                        <div className="title questions__title">
                            <h2 className="title__main-title">Питання та відповіді</h2>
                        </div>
                        <div className="questions__item">
                            <h2 className="questions__item-title">В ЯКИХ РЕГІОНАХ УКРАЇНИ ЦЕ ДОСТУПНО?</h2>
                            <div className="questions__item-text"></div>
                        </div>
                        <div className="questions__item">
                            <h2 className="questions__item-title">ЧИ ЦЕ ЛЕГАЛЬНО?</h2>
                            <div className="questions__item-text"></div>
                        </div>
                        <div className="questions__item">
                            <h2 className="questions__item-title">ЧИ ЦЕ БЕЗПЕЧНО?</h2>
                            <div className="questions__item-text"></div>
                        </div>
                        <div className="questions__item questions__item--active">
                            <h2 className="questions__item-title">ЯК МЕНІ З ВАМИ ЗВ’ЯЗАТИСЯ?</h2>
                            <div className="questions__item-text">“В один момент ми зрозуміли що ця технологія стає прибутковішою коли люди поєднуються та майнять разом. Я поясню, грубо кажучи уявіть собі таку прогрессію, якщо один майнер майнить одну монету в день, а два майнять 2,5 монети в день, то три майнять 4 монети в день. Ви розумієте? Нам вигідніше об’єеднуватися та майнити разом”</div>
                        </div>
                        <div className="questions__item">
                            <h2 className="questions__item-title">НА ЯКІ РАХУНКИ/КАРТКИ Я МОЖУ ОТРИМУВАТИ ЗАРОБІТОК?</h2>
                            <p className="questions__item-text"></p>
                        </div>
                        <div className="questions__item">
                            <h2 className="questions__item-title">ЩО ЯКЩО Я ВИРІШУ МАЙНИТИ БЕЗ ВАС?</h2>
                            <p className="questions__item-text"></p>
                        </div>
                        <div className="questions__item">
                            <h2 className="questions__item-title">ЯК ДОВГО МЕНІ ЧЕКАТИ МАЙНЕРА? </h2>
                            <p className="questions__item-text"></p>
                        </div>
                        <div className="questions__item">
                            <h2 className="questions__item-title">ЧИ Я МАТИМУ КОНТРОЛЬ МОЇХ ЗАРОБЛЕНИХ МОНЕТ ДО ВИВОДУ НА КАРТКУ?</h2>
                            <p className="questions__item-text"></p>
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