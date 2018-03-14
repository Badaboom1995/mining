import { IInvestmentProps } from "./Props";
import * as classNames from 'classnames';
import { Card } from "../../components/card/Card";
import { MinerProduct } from './miner-product/MinerProduct';
import { InfoBlock } from './info-block/InfoBlock';
import { Slider } from '../../components/slider/Slider';
import { Button } from '../../components/button/Button';
import { withRouter } from '../../services/index';
import { observer, inject } from "mobx-react";

@inject('routing')
@observer
@withRouter
export class Investment extends React.Component<IInvestmentProps> {

	/**
	 * render
	 */
	public render() {

		const { routing } = this.props;
		return (
			<div className='investment' >
				<h1 className='main-page__content-title investment__title' >Инвестиции</h1>
				<div className='investment__miner-title' >Ви можете обрати одну з двох найкращих комплектацій майнерів:</div>

				<div className='investment__products' >
					<MinerProduct />
					<MinerProduct />
				</div>


				{/* <div className='investment__info' >

					<InfoBlock
						title='Доставка додому'
						dateCaption='Дата доставки 10.04.2018'
						priceCaption='Ціна доставки від $32'
					/>

					<InfoBlock
						title='Встановлення'
						dateCaption='Дата встановлення 10.04.2018 '
						priceCaption='Вартість від $32'
					/>

					<InfoBlock
						title='Дата окупності'
						dateCaption='Орієнтовна дата 10.04.2019 '
						priceCaption='Кожного місяця от $132'
					/>

				</div> */}


				<Card  className='investment__invest-pool' >


					<div className='investment-pool-tip' >
						<h4 className='investment-pool-tip__title' >Не хочете купувати цілий майнер?</h4>
						<p className='investment-pool-tip__text' >
							Якщо ви не маєте можливості, або не хочете купляти цілий майнер - можете <br />  прийняти участь у пулі. <br />
							Простими словами скинутися з нами на майнер і ділити прибуток.</p>
					</div>

					<div className='investment__values' >

						<Card className='investment-pool-participation' >
							<div className='investment-pool-participation__title' >Участь в пулі </div>
							<div className='investment-pool-participation__slider-block' >
								<div className='investment-pool-participation__price' >$20.00</div>
								<Slider />
							</div>
							<Button onClick={() => routing.push('/investment/methods')} className='investment-pool-participation__button' >Инвестировать</Button>
						</Card>

						<div className='investment-pool-revenues'  >
							<Card className='investment-pool-revenue investment-pool-revenue--monthly' >
								<div className='investment-pool-revenue__title' >Щомісячний прибуток</div>
								<div className='investment-pool-revenue__slider-block' >
									<div className='investment-pool-revenue__price' >$566.00</div>
									<Slider />
								</div>
							</Card>

							<Card className='investment-pool-revenue' >
								<div className='investment-pool-revenue__title'>Щорічний прибуток</div>
								<div className='investment-pool-revenue__slider-block' >
									<div className='investment-pool-revenue__price' >$11 566.00</div>
									<Slider />
								</div>
							</Card>
						</div>

					</div>
				</Card>


			</div>
		);

	}
}