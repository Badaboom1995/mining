import { IInvestmentMethodsProps } from "./Props";





export class InvestmentMethods extends React.Component<IInvestmentMethodsProps> {
	
	/**
	 * Investment method block
	 */
	public InvestmentMethod = ({ onSelect, title, balance, currency }) => {
	

		return (
			<div className='investment-method' >
				<div className='investment-method__title' >{title}</div>
				<div className='investment-method__content' >
					<div className='investment-method__value' >{`${balance} ${currency}`}</div>
					<div className='investment-method__button' >Инвестировать</div>
				</div>
			</div>
		);
	}
	
	/**
	 * render
	 */
	public render() {
		const {InvestmentMethod} = this;
		return (
			<div className='investment-methods' >
				<h1 className='main-page__content-title' >Оплата</h1>
				<div className='investment-methods__list' >
					<InvestmentMethod 
						title='Оплата через Advcash'
						currency='USD'
						balance='22.8'
						onSelect={() => {}}
					/>
					<InvestmentMethod 
						title='Оплата через block.io'
						currency='BTC'
						balance='0.072313'
						onSelect={() => {}}
					/>
				</div>
			</div>
		);

	}
}