import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { IAboutProps } from './Props';

export class About extends React.Component<IAboutProps> {
	public render() {
		return (
			<div className='landing landing--referal'>
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
                    
                    <div className="about">
                    <div className="about__item">
                        <span className="about__short-title">ПРО ПРОЕКТ</span>
                        <h2 className="about__item-title">Группа ентузіастів започаткувала проект у вільний від роботи час. </h2>
                        <h3 className="about__item-subtitle">ОСЬ ЩО ВОНИ КАЖУТЬ:</h3>
                        <p className="about__item-text">“В один момент ми зрозуміли що ця технологія стає прибутковішою коли люди поєднуються та майнять разом. Я поясню, грубо кажучи уявіть собі таку прогрессію, якщо один майнер майнить одну монету в день, а два майнять 2,5 монети в день, то три майнять 4 монети в день. Ви розумієте? Нам вигідніше об’єеднуватися та майнити разом”</p>
                    </div>
                    <div className="about__item">
                        <span className="about__short-title">ЯК МИ ПРАЦЮЄМО</span>
                        <h2 className="about__item-title">Як ви будете рекламувати ваш сервіс? </h2>
                        <p className="about__item-text">“В цьому майже не має потреби тому бізнес сам себе продає. Але щоб прискорити цей процесс ми вирішили зробити ще один вид заробітку - реферальну программу завдяки якій ми дуже щедро заохочуємо тих хто рекомендує наші послуги своїм друзям”</p>
                    </div>
                    <div className="about__item">
                        <span className="about__short-title">НАВІЩО</span>
                        <h2 className="about__item-title">Навіщо нам це?</h2>
                        <p className="about__item-text">“Ми дуже цінуємо час нашого життя і хочемо займатися улюбленими справами, родиною, та просто насолоджуватися життям, але це не завжди може забезпечити нас та нащі родини. Тому ми вирішили поділитися цією дуже простою ідеєю з усіма бажаючими”</p>
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