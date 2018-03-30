import {  IHistoryProps } from "./Props";
import { observer, inject } from "mobx-react";
import { Transaction } from "./transaction/Transaction";




@inject('wallet')
@observer
export class History extends React.Component<IHistoryProps> {

	/**
	 * Get transactions list on mount
	 */
	public componentWillMount() {
		const { wallet } = this.props;
		wallet.getTransactions();
	}

	/**
	 * render
	 */
	public render() {
		const {wallet} = this.props;
		return (
			<div className='wallet-history' >
				<div className='wallet-history-header' >
					<div className='wallet-history-header__currency' >Валюта</div>
					<div className='wallet-history-header__amount' >Сумма</div>
					<div className='wallet-history-header__type' >Тип</div>
					<div className='wallet-history-header__date' >Дата</div>
				</div>
				{wallet.transactions.map(transaction => {
					return (
						<Transaction key={transaction.id} transaction={transaction} />
					);
				})}
			</div>
		);
	}
}