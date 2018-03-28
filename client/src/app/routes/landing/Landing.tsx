import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { ILandingProps } from './Props';
import { About } from './about/About';

export class Landing extends React.Component<ILandingProps> {
    public render() {
        return (
            <div className='landing'>
                <header className='landing-header landing-header--main-page'>
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
                </header>
                <div className='promo'>
                    <div className="landing__container">
                        <div className='promo__content'>
                            <h1 className='promo__title'><span>Майнинг</span> не прикладаючи зусиль</h1>
                            <p className='promo__description'>Пасивний дохід від 300 $ в місяць без технічних навичок, без досвіду в фінансах і трейдингу.</p>
                            <a href='#' className='landing-button landing-button--big promo__button'>Почати заробляти</a>
                        </div>
                    </div>
                </div>
                <div className='how-it-works'>
                    <h2 className='how-it-works__title'>Наша пропозиція</h2>
                    <div className='how-it-works__info'>
                        <div className='how-it-works__steps'>
                            <div className='how-it-works__steps-item'>
                                <h2 className='how-it-works__step-title'>УСТАНОВКА ОБЛАДНАННЯ</h2>
                                <p className='how-it-works__step-description'>Ми закупимо, зберемо, та доставимо найсучаснішу майнингову установку, створимо електронні гаманці, та будемо виводити ваш заробіток вам на картку. </p>
                            </div>
                            <div className='how-it-works__steps-item'>
                                <h2 className='how-it-works__step-title'>ТЕХНІЧНА ПІДТРИМКА 24/7</h2>
                                <p className='how-it-works__step-description'>Ми завжди пильнуємо за вашою установкою через програмне забезпечення. А ви проводите час з родиною та робите улюблені справи.</p>
                            </div>
                            <div className='how-it-works__steps-item'>
                                <h2 className='how-it-works__step-title'>КРИПТОВАЛЮТНА ОСВІТА</h2>
                                <p className='how-it-works__step-description'>Налаштуємо ваш майнер на добуття найприбутковішої монети. <br />   Ми завжди пильнуємо за ринком, якщо з’явится</p>
                            </div>
                        </div>
                        <div className='how-it-works__description'>
                            <div className='how-it-works__description-title'>Просто про складне</div>
                            <div className='how-it-works__description-text'>
                                <p className='how-it-works__description-text-paragraph'>
                                    Майнинг це трендовий напрямок заробітку, це означає що зараз поки ще не пізно зайняти своє місце у світі добуття криптовалют.
                                    </p>
                                <p className='how-it-works__description-text-paragraph'>
                                    Ми допоможемо вам заробляти на майнингу абсолютно без досвіду та без прикладання жодних зусиль. В середньому у людини займає 8 місяців щоб в усьому розібратися, але з нами ви одразу заробляєте не гаючи вашого дорогоцінного часу.
                                    </p>
                                <a href='#' className='landing-button landing-button--big'>Дiзнатис бiльше</a>
                            </div>
                        </div>
                    </div>
                    <div className='how-it-works__video'>
                        <span className="how-it-works__play-video"></span>
                    </div>
                </div>
                <div className='calculator'>
                    <h2 className="calculator__title">Калькулятор окупності</h2>
                    <div className='calculator__block'>
                        <h3 className='calculator__block-title'>ОБЕРІТЬ ОДИН З ДВОХ НАЙКРАЩИХ МАЙНЕРІВ</h3>
                        <div className='calculator__block-controls'>
                            <span className='calculator__radio-button calculator__radio-button--active calculator__radio-button--type active'>Тип 1</span>
                            <span className='calculator__radio-button calculator__radio-button--type'>Тип 2</span>
                        </div>
                    </div>
                    <div className='calculator__block'>
                        <h3 className='calculator__block-title'>ТАРИФ НА ЕЛЕКТРОЕНЕРГІЮ</h3>
                        <div className='calculator__block-controls--small'>
                            <span className='calculator__radio-button calculator__radio-button--stars calculator__radio-button--one-star'>Звичайний</span>
                            <span className='calculator__radio-button calculator__radio-button--active calculator__radio-button--stars calculator__radio-button--two-stars'>Двозонний</span>
                            <span className='calculator__radio-button calculator__radio-button--stars calculator__radio-button--three-stars'>Трьохзонний</span>
                        </div>
                    </div>
                    <div className='calculator__block'>
                        <h3 className='calculator__block-title'>ОБЕРІТЬ МОНЕТУ ЯКУ ВИ БУДЕТЕ МАЙНИТИ</h3>
                        <div className='calculator__block-controls'>
                            <ul className="calculator__tabs">
                                <li className="calculator__tabs-item">Ethereum</li>
                                <li className="calculator__tabs-item active">Etherum classic</li>
                                <li className="calculator__tabs-item">Zcash</li>
                                <li className="calculator__tabs-item">Bitcoin gold</li>
                            </ul>
                            <ul className="calculator__tabs-content">
                                <li className="calculator__tab-content"></li>
                                <li className="calculator__tab-content active">
                                    Ethereum Classic — блокчейн-криптоплатформа з відкритим вихідним кодом, для розробки децентралізованих додатків на базі «розумних контрактів
                                    </li>
                                <li className="calculator__tab-content"></li>
                                <li className="calculator__tab-content"></li>
                            </ul>
                        </div>
                    </div>
                    <div className='calculator__block'>
                        <h3 className='calculator__block-title'>ВАШ ПРИБУТОК </h3>
                        <div className='calculator__block-controls--small'>
                            <table className="calculator__table">
                                <tr>
                                    <th className="calculator__table-head">На добу</th>
                                    <th className="calculator__table-head">В мiсяц</th>
                                    <th className="calculator__table-head">В рiк</th>
                                </tr>
                                <tr >
                                    <td className="calculator__table-row">3375 гривень</td>
                                    <td className="calculator__table-row">21000 гривень</td>
                                    <td className="calculator__table-row">90000 гривень</td>
                                </tr>
                                <tr>
                                    <td className="calculator__table-row">1775 гривень</td>
                                    <td className="calculator__table-row">6000 гривень</td>
                                    <td className="calculator__table-row">20000 гривень</td>
                                </tr>
                                <tr className="calculator__table-row--active">
                                    <td className="calculator__table-row">3375 гривень</td>
                                    <td className="calculator__table-row">21000 гривень</td>
                                    <td className="calculator__table-row">90000 гривень</td>
                                </tr>
                                <tr>
                                    <td className="calculator__table-row">3375 гривень</td>
                                    <td className="calculator__table-row">9000 гривень</td>
                                    <td className="calculator__table-row">190000 гривень</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="calculator__motivate-text">
                        <p>ВАША УСТАНОВКА ОКУПИТЬСЯ ЧЕРЕЗ <span>~9 МІСЯЦІВ </span></p>
                        <p>І БУДЕ ДАЛІ ПРИНОСИТИ <span>~300$</span> ЧИСТОГО ПРИБУТКУ КОЖЕН МІСЯЦЬ.</p>
                    </div>
                </div>
                <div className="benefits">
                    <h2 className="benefits__title">Чому з нами найкраще?</h2>
                    <p className="benefits__subtitle">ПОРІВНЯЄМО УСІ ВАРІАНТИ</p>
                    <div className="benefits__cards">
                        <div className="benefits__item">
                            <h3 className="benefits__item-title">САМОСТІЙНО</h3>
                            <ul className="benefits__item-list">
                                <li className="benefits__list-item">Вам доведеться вкласти дуже багато часу щоб навчитися на цьому заробляти. </li>
                                <li className="benefits__list-item">Вам доведеться вкласти дуже багато часу щоб навчитися на цьому заробляти. </li>
                                <li className="benefits__list-item">Вам доведеться вкласти дуже багато часу щоб навчитися на цьому заробляти. </li>
                            </ul>
                            <button className="benefits__item-more"></button>
                        </div>
                        <div className="benefits__item">
                            <h3 className="benefits__item-title benefits__item-title--short">З НАШОЮ ДОПОМОГОЮ</h3>
                            <ul className="benefits__item-list">
                                <li className="benefits__list-item">Вам доведеться вкласти дуже багато часу щоб навчитися на цьому заробляти. </li>
                                <li className="benefits__list-item">Вам доведеться вкласти дуже багато часу щоб навчитися на цьому заробляти. </li>
                                <li className="benefits__list-item">Вам доведеться вкласти дуже багато часу щоб навчитися на цьому заробляти. </li>
                            </ul>
                            <button className="benefits__item-more"></button>
                        </div>
                        <div className="benefits__item">
                            <h3 className="benefits__item-title">ХМАРНИЙ</h3>
                            <ul className="benefits__item-list">
                                <li className="benefits__list-item">Вам доведеться вкласти дуже багато часу щоб навчитися на цьому заробляти. </li>
                                <li className="benefits__list-item">Вам доведеться вкласти дуже багато часу щоб навчитися на цьому заробляти. </li>
                                <li className="benefits__list-item">Вам доведеться вкласти дуже багато часу щоб навчитися на цьому заробляти. </li>
                            </ul>
                            <button className="benefits__item-more"></button>
                        </div>
                    </div>
                    <a href="#" className="landing-button landing-button--big benefits__more-options">Больше вариантов</a>
                </div>
                <div className="call-to-action">
                    <div className="call-to-action__wrapper">
                        <p className="call-to-action__text">Ми допоможемо вам заробляти на майнингу абсолютно без досвіду та без прикладання жодних зусиль. </p>
                        <a href="#" className="landing-button landing-button--big">Почати зробляти з нами</a>
                    </div>
                </div>
                <div className="reviews">
                    <div className="title">
                        <h2 className="title__main-title">Відгуки</h2>
                        <p className="title__subtitle">ПОСЛУХАЙТЕ ЩО КАЖУТЬ ТІ ХТО ПОВІРИЛИ В НАС</p>
                    </div>
                    <ul className="reviews__list">
                        <li className="reviews__list-item">
                            <div className="reviews__item-photo"><img src="#" alt="" /></div>
                            <p className="reviews__item-text">Це так вигідно, я просто хуїю, я вклала $2600 10 місяців назад і вже відбила їх. Зараз я маю $300 прибутку щомісяця. А могла б зберігати грощі в банку і ніколи їх не примножити. Також якщо я захочу продати установку то завжди можу повернути не меньше $2000</p>
                            <span className="reviews__item-author">ОЛЕКСАНДРА</span>
                            <span className="reviews__slider-control reviews__slider-control--prev"></span>
                            <span className="reviews__slider-control reviews__slider-control--next"></span>
                        </li>
                    </ul>
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