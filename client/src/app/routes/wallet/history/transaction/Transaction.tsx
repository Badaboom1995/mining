import { ITransactionProps } from "./Props";
import * as moment from 'moment';
import { Image } from '../../../../components/image/Image';





export class Transaction extends React.Component<ITransactionProps> {
	/**
	 * render
	 */
	public render() {
		const {transaction} = this.props;
		return (
			<div className='wallet-history-entry' >
				<Image className='wallet-history-entry__icon' src={ './' + transaction.currency.toLowerCase() + '.png'} />
				<div className='wallet-history-entry__currency' >{transaction.currency}</div>
				<div className='wallet-history-entry__amount' >
					{transaction.amount.toLocaleString('ru')}
				</div>
				<div className='wallet-history-entry__type' >{transaction.transactionType}</div>
				<div className='wallet-history-entry__date' >
					{moment(transaction.createdAt).format('YYYY-MM-DD')}
				</div>
			</div>
		);
	}
}