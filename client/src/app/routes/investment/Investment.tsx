import { IInvestmentProps } from "./Props";
import * as classNames from 'classnames';
import { Card } from "../../components/card/Card";
import { MinerProduct } from './miner-product/MinerProduct';
import { InfoBlock } from './info-block/InfoBlock';
import { Slider } from '../../components/slider/Slider';
import { Button } from '../../components/button/Button';
import { withRouter } from '../../services/index';
import { observer, inject } from "mobx-react";
import { InvestmentModal } from './investment-modal/InvestmentModal';
import { InvestmentCard } from "./investment-card/InvestmentCard";

@inject('routing', 'investment')
@observer
@withRouter
export class Investment extends React.Component<IInvestmentProps> {
	/**
	 * Local state
	 */
	public state = {
		isVisibleInvestmentModal: false
	};
	/**
	 * Toggle investment modal
	 */
	public toggleInvestmentModal = () => this.setState({ isVisibleInvestmentModal: !this.state.isVisibleInvestmentModal });
	/**
	 * render
	 */
	public render() {
		const { routing, investment } = this.props;
		return (
			<div className='investment' >


				<h1 className='main-page__content-title investment__title' >Инвестиции</h1>
				<div className='investment__miner-title' >Ви можете обрати одну з двох найкращих комплектацій майнерів:</div>

				<div className='investment__products' >
					{investment.miners.map((miner, index) => {
						return (
							<MinerProduct key={index} miner={miner} />
						);
					})}
				</div>




				<div className='investment__invest-pool' >

					


					<div className='pool-banner' >
						<h4 className='pool-banner__title' >Не хочете купувати цілий майнер?</h4>
						<p className='pool-banner__text' >
							Якщо ви не маєте можливості, або не хочете купляти цілий майнер - можете прийняти участь у пулі. 
							Простими словами скинутися з нами на майнер і ділити прибуток.</p>
						<div onClick={this.toggleInvestmentModal} className='pool-banner__button' >Взяти участь</div>
					</div>


				</div>

				<div className='investment__investments' >
				  	<Card className='investment-add-investment' onClick={this.toggleInvestmentModal}  >
						<div className="investment-add-investment__icon"></div>
						<div className="investment-add-investment__caption">Додати нову інвестицію</div>
					</Card>
					{investment.investments.map((item, index) => {
						return (
							<InvestmentCard key={index} investment={item}  />
						);
					})}
				</div>

				
				{this.state.isVisibleInvestmentModal && <InvestmentModal onClose={this.toggleInvestmentModal} />}
			</div>
		);

	}
}