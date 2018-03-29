import { IBalanceProps } from "./Props";
import { observer, inject } from "mobx-react";
import { BalanceRow } from './balance-row/BalanceRow';




@inject('wallet')
@observer
export class Balance extends React.Component<IBalanceProps> {

	/**
	 * Currencies list for rendering
	 */
	public static currencies = ['eth', 'zcash'];
	/**
	 * Get balance on mount
	 */
	public componentWillMount() {
		const { wallet } = this.props;
		wallet.getBalance();
	}
	/**
	 * render
	 */
	public render() {
		const { wallet } = this.props;
		return (
			<div className='balance-page' >
				<div className='balance-page__list' >
					{Balance.currencies.map((currency, index) => {
						const amount = wallet.balance[currency];
						return (
							<BalanceRow amount={amount} currency={currency} key={index} />
						);
					})}
				</div>
			</div>
		);
	}
}