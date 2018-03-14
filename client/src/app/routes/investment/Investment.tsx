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
	 * Local state
	 */
	public state = {
		currentModal: ''
	};
	/**
	 * New investment modal
	 */
	public InvestmentModal = ({ }) => {
		const { routing } = this.props;
		return (
			<div className='investment-popup' >
				<div className='investment-pool-tip' >
					<h4 className='investment-pool-tip__title' >Не хочете купувати цілий майнер?</h4>
					<p className='investment-pool-tip__text' >
						Якщо ви не маєте можливості, або не хочете купляти цілий майнер - можете   прийняти участь у пулі. 
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
			</div>
		)
	}
	/**
	 * 
	 */
	public InvestmentCard = ({ }) => {
		return (
			<Card className='investment-card' >

			</Card>
		);
	}

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




				<div className='investment__invest-pool' >


					<div className='investment-pool-tip' >
						<h4 className='investment-pool-tip__title' >Не хочете купувати цілий майнер?</h4>
						<p className='investment-pool-tip__text' >
							Якщо ви не маєте можливості, або не хочете купляти цілий майнер - можете прийняти участь у пулі. 
							Простими словами скинутися з нами на майнер і ділити прибуток.</p>

						<div onClick={() => {
							this.setState({currentModal: 'investment'})
						}} className='investment-pool-tip__button' >Взяти участь</div>
					</div>


				</div>



				{this.state.currentModal && <div className='investment__overlay'  >
					{this.state.currentModal == 'investment' && <this.InvestmentModal />}
				</div>}

			</div>
		);

	}
}