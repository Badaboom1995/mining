import { IOrdersProps } from './orders.props'
import { IOrdersState } from './orders.state';
import { withRouter } from '../../../services/index';
import { observer, inject } from 'mobx-react';
import { extractQueryParam } from '../../../utils/extract-query-param';


@withRouter
@inject('admin')
@observer
export class Orders extends React.Component<IOrdersProps, IOrdersState> {
	/**
	 * Get orders on mount
	 */
	public componentWillMount() {
		const { admin } = this.props;
		const offset = Number(extractQueryParam(window.location.href, 'offset')) || 0;
		admin.order.getList({ offset });
	}
	/**
	 * Renders 
	 */
	public render() {
		const { admin } = this.props;

		return (
			<div>

			</div>
		);
	}

}