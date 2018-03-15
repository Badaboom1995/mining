import { IHomeProps } from "./Props";
import { Card } from "../../components/card/Card";
import { Field } from '../../components/field/Field';
import { Button } from '../../components/button/Button';
import { ReferalCard } from './referal-card/ReferalCard';
import { DataCard } from "./data-card/DataCard";






export class Home extends React.Component<IHomeProps> {


	/**
	 * render
	 */
	public render() {



		return (
			<div className='home' >

				<div className='main-page__content-title' >Hello, Slave!</div>
				<div className='home__banners' >
					<Card className='monthly-banner' >
						<div className='monthly-banner__title' >Прибуток за місяць</div>
						<div className='monthly-banner__bottom-line' >
							<div className='monthly-banner__invested' >З них з інвестиції $0,00</div>
							<div className='monthly-banner__revenue' >$9 999</div>
						</div>
					</Card>
					<Card className='current-coin-banner' >
						<div className='current-coin-banner__caption' >Курс монети яка майнится</div>
						<div className='current-coin-banner__price' >BTC $11 488</div>
					</Card>
				</div>


				<div className='home__referals' >
					<ReferalCard />
					<ReferalCard />
				</div>


				<div className='home__data-row' >

					<DataCard icon='award' className='data-block--status  user-status ' title='Статус'  >
						<div className='user-status__name' >Директор 0</div>
						<div className='user-status__sub-name' >поточний статус</div>
						<div className='user-status__credits' >Відкритих рівней: 0/10</div>
						<div className='user-status__investments' >Інвестицій в структурі: $0.00</div>
					</DataCard >
					<DataCard icon='wallet' className='data-block--wallet user-wallet' title='Гаманець'  >
						<div className='user-wallet__balance' >$0.00</div>
						<div className='user-wallet__referal' >Прибуток за рефералів: $0.00</div>
						<div className='user-wallet__investment' >Прибуток з інвестицій: $0.00</div>
						<div className='user-wallet__yearly' >Прибуток загальний: $0.00</div>
					</DataCard >
					<DataCard icon='stats' className='data-block--investment user-investment ' title='Інвестиції' >
						<div className='user-investment__amount' >$0.00</div>
						<div className='user-investment__active' >Активні: $0.00</div>
						<div className='user-investment__closed' >Закриті: $0.00</div>
						<div className='user-investment__total' >Інвестовано: $0.00</div>
						<div className='user-investment__gained' >Отримано: $0.00 </div>
					</DataCard>
				</div>


			</div>
		);
	}
}