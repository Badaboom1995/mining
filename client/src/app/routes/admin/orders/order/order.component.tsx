import { IOrderProps } from './order.props'
import { IOrderState } from './order.state';



export class Order extends React.Component<IOrderProps, IOrderState> {

	/**
	 * Renders 
	 */
	public render() {
		const { order } = this.props;
		const fullName = `${order.lastName} ${order.name} ${order.patronymic}`;
		return (
			<div className='order-item' >
				<div className='order-item__id' >{order.id}</div>
				<div className='order-item__buyer' >{fullName}</div>
				<div className='order-item__phone' >{order.phone}</div>
				<div className='order-item__city' >{order.city}</div>
				<div className='order-item__office-number' >{order.officeNumber}</div>
				<div className='order-item__max-weight' >{order.maxWeight}</div>
			</div>
		);
	}

}