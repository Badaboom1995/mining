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
	 * Switch investment modal to miner modal
	 */
	public onSwitchFromInvestmentModal = (refName : string) => {
		const miner : MinerProduct = this.refs[refName] as MinerProduct;
		this.toggleInvestmentModal();
		miner.toggleModal();
	}
	/**
	 * Switch from miner info modal to invest modal
	 */
	public onSwitchFromMinerToInvest = (index : number) => {
		(this.refs[`miner${index}`] as MinerProduct).toggleModal();
		this.setState({ isVisibleInvestmentModal: true });
	}
	/**
	 * Switch between miner modals
	 */
	public onSwitchBetweenMinerInfoModals = (from : number, to : number) => {
		(this.refs[`miner${from}`] as MinerProduct).toggleModal();
		(this.refs[`miner${to}`] as MinerProduct).toggleModal();
	}
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
						let prevModal, nextModal;
						if (index == 0 ) {
							prevModal = {
								caption: 'Участь в пуле',
								onSwitch: () => this.onSwitchFromMinerToInvest(index)
							}
						} else {
							prevModal = {
								caption: investment.miners[index - 1].name,
								onSwitch: () => this.onSwitchBetweenMinerInfoModals(index, index - 1)
							}
						}
						if (index == investment.miners.length - 1) {
							nextModal = {
								caption: 'Участь в пуле',
								onSwitch: () => this.onSwitchFromMinerToInvest(index)
							}
						} else {
							nextModal = {
								caption: investment.miners[index + 1].name,
								onSwitch: () => this.onSwitchBetweenMinerInfoModals(index, index  + 1)
							}
						}




						return (
							<MinerProduct 
								ref={`miner${index}`} 
								key={index} miner={miner} 
								prevModal={prevModal}
								nextModal={nextModal}
								routing={routing}
							/>
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

				
				{this.state.isVisibleInvestmentModal && 
					<InvestmentModal 
						onClose={this.toggleInvestmentModal} 
						prevModal={{caption: investment.miners[0].name, onSwitch: this.onSwitchFromInvestmentModal.bind(this, 'miner0') }}
						nextModal={{caption: investment.miners[1].name, onSwitch: this.onSwitchFromInvestmentModal.bind(this, 'miner1') }}
					/>
				}
			</div>
		);

	}
}