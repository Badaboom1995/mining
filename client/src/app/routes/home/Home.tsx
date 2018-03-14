import { IHomeProps } from "./Props";
import { Card } from "../../components/card/Card";
import { Field } from '../../components/field/Field';
import { Button } from '../../components/button/Button';






export class Home extends React.Component<IHomeProps> {


	/**
	 * 
	 */
	public DataBlock = ({ className = '', icon = '', title = '', children, buttonText = 'Дізнатись більше' }) => {
		return (
			<Card className={`home-data-block ${className}`} >
				<div className='home-data-block__header' >
					<div className='home-data-block__header-icon' >
						<i className={`icon-${icon}`} ></i>
					</div>
					<div className='home-data-block__title' >{title}</div>
				</div>
				<div className='home-data-block__content' >
					{children}
				</div>
				<div className='home-data-block__button' >{buttonText}</div>
			</Card>
		);
	}

	/**
	 * Referal block card
	 */
	public ReferalBlock = () => {
		return (
			<Card className='home-referal' >
				<div className='home-referal__title' >Реферальна Сторінка Лендінг</div>
				<div className='home-referal__link-form' >
					<div className='home-referal__link' >http://pospage.com/invite/slave</div>
					<Button className='home-referal__copy-button' >Копировать</Button>
				</div>
				<div className='home-referal__separator-title' > Використовуйте це посилання для масової лідогенеріції </div>
				<div className='home-referal__stats' >
					<div className='home-referal__stat home-referal__stat--clicks' >Кликов: 9000</div>
					<div className='home-referal__stat home-referal__stat--regs' >Регистраций: 100</div>
					<div className='home-referal__stat home-referal__stat--ctr' >CTR: 1.11%</div>
				</div>
			</Card>
		);
	}


	/**
	 * render
	 */
	public render() {


		const { ReferalBlock, DataBlock } = this;



		return (
			<div className='home' >

				<div className='main-page__content-title' >Hello, Slave!</div>
				<div className='home__banners' >
					<Card className='home-monthly-banner' >
						<div className='home-monthly-banner__title' >Прибуток за місяць</div>
						<div className='home-monthly-banner__bottom-line' >
							<div className='home-monthly-banner__invested' >З них з інвестиції $0,00</div>
							<div className='home-monthly-banner__revenue' >$9 999</div>
						</div>
					</Card>
					<Card className='home-current-coin-banner' >
						<div className='home-current-coin-banner__caption' >Курс монети яка майнится</div>
						<div className='home-current-coin-banner__price' >BTC $11 488</div>
					</Card>
				</div>


				<div className='home__referals' >
					<ReferalBlock />
					<ReferalBlock />
				</div>


				<div className='home__data-row' >
					<DataBlock className='home-data-block--status  home-user-status ' title='Статус'  >
						<div className='home-user-status__name' >Директор 0</div>
						<div className='home-user-status__sub-name' >поточний статус</div>
						<div className='home-user-status__credits' >Відкритих рівней: 0/10</div>
						<div className='home-user-status__investments' >Інвестицій в структурі: $0.00</div>
					</DataBlock >
					<DataBlock className='home-data-block--wallet home-user-wallet' title='Гаманець'  >
						<div className='home-user-wallet__balance' >$0.00</div>
						<div className='home-user-wallet__referal' >Прибуток за рефералів: $0.00</div>
						<div className='home-user-wallet__investment' >Прибуток з інвестицій: $0.00</div>
						<div className='home-user-wallet__yearly' >Прибуток загальний: $0.00</div>
					</DataBlock >
					<DataBlock className='home-data-block--investment home-user-investment ' title='Інвестиції' >
						<div className='home-user-investment__amount' >$0.00</div>
						<div className='home-user-investment__active' >Активні: $0.00</div>
						<div className='home-user-investment__closed' >Закриті: $0.00</div>
						<div className='home-user-investment__total' >Інвестовано: $0.00</div>
						<div className='home-user-investment__gained' >Отримано: $0.00 </div>
					</DataBlock>
				</div>


			</div>
		);
	}
}