import { Card } from "../../../components/card/Card";
import { IMinerProductProps } from "./Props";
import { InfoModal } from './info-modal/InfoModal';
import { observer, inject } from "mobx-react";



export class MinerProduct extends React.Component<IMinerProductProps> {
	/**
	 * local state
	 */
	public state = {
		isVisibleModal: false
	}

	/**
	 * Show info modal
	 */
	public toggleModal = () => {
		this.setState({isVisibleModal: !this.state.isVisibleModal});
	}


	/**
	 * Renders miner product
	 */
	public render() {
		const { miner , prevModal, nextModal, routing} = this.props;
		return (
			<Card className='investment-miner-product' >
				<div className='investment-miner-product__header' >

					<div className='investment-miner-product__header-row investment-miner-product__header-content' >
						<div className='investment-miner-product__header-name-group'  >
							<div className='investment-miner-product__header-miner-name' >Установка 1</div>
							<div className='investment-miner-product__header-miner-price-caption' >Цена за установку</div>
						</div>
						<div className='investment-miner-product__header-price' >$22.28</div>
					</div>

					<div className='investment-miner-product__header-row investment-miner-product__header-bottom-content' >
						<div onClick={this.toggleModal} className='investment-miner-product__header-more' >Подробнее</div>
						<div className='investment-miner-product__header-buy-button' onClick={() => {
							routing.push('/lk/investment/methods')
						}} >Купить</div>
					</div>

				</div>

				{this.state.isVisibleModal && <InfoModal prevModal={prevModal} nextModal={nextModal} onClose={() => this.setState({isVisibleModal: false})} miner={miner} />}

			</Card>
		)
	};
}