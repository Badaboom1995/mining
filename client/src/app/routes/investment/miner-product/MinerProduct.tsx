import { Card } from "../../../components/card/Card";
import { IMinerProductProps } from "./Props";





export class MinerProduct extends React.Component<IMinerProductProps> {
	/**
	 * local state
	 */
	public state = {
		isOpened: false
	}
	/**
	 * Renders miner product
	 */
	public render() {
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
						<div onClick={() => {
							this.setState({ isOpened: !this.state.isOpened });
						}} className='investment-miner-product__header-more' >Подробнее</div>
						<div className='investment-miner-product__header-buy-button' >Купить</div>
					</div>

				</div>

				{this.state.isOpened && <div className='investment-miner-product__content' >
					<ul>
						<li>1) Перелік усіх деталей з актуальною ціною</li>
						<li>2) Технічні характеристики</li>
						<li>3) Скільки вживає електроенергії</li>
						<li>4) МегаХеш або Мегасоль</li>
						<li>5) Монета яку може майнити</li>
						<li>6) Найприбутковіша монета для цієї установки</li>
					</ul>
				</div>}


			</Card>
		)
	};
}