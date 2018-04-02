import { IHomeProps } from "./Props";
import { TeamPart } from '../common/team-part/TeamPart';
import { Calculator } from './calculator/Calculator';
import { default as Slider } from 'react-slick';
import { Link } from "react-router-dom";
import { Reviews } from "./reviews/Reviews";

export class Home extends React.Component<IHomeProps> {


	/**
	 * render
	 */
	public render() {
		return (
			<div>
				<div className='promo'>
					<div className="landing__container">
						<div className='promo__content'>
							<h1 className='promo__title'><span>Майнинг</span> не прикладаючи зусиль</h1>
							<p className='promo__description'>Пасивний дохід від 300 $ в місяць без технічних навичок, без досвіду в фінансах і трейдингу.</p>
							<Link to='/lk/auth/registration' href='#' className='landing-button landing-button--big promo__button'>Почати заробляти</Link>
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
								<Link to='/about' href='#' className='landing-button landing-button--big'>Дiзнатис бiльше</Link>
							</div>
						</div>
					</div>
					<div className='how-it-works__video'>
						<span className="how-it-works__play-video"></span>
					</div>
				</div>
				<Calculator />

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
					<Link to='/faq' className="landing-button landing-button--big benefits__more-options">Больше вариантов</Link>
				</div>
				<div className="call-to-action">
					<div className="call-to-action__wrapper">
						<p className="call-to-action__text">Ми допоможемо вам заробляти на майнингу абсолютно без досвіду та без прикладання жодних зусиль. </p>
						<Link to='/lk/auth/registration' className="landing-button landing-button--big">Почати зробляти з нами</Link>
					</div>
				</div>


				<Reviews />

				

				<TeamPart />
			</div>
		);
	}
}