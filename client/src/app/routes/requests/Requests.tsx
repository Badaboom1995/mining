import { IRequestsProps } from "./Props";
import { Field } from "../../components/field/Field";

import { Request } from './request/Request';
import { Footer } from '../../components/footer/Footer';

// 1. Общий грид
// 2. Скролл
// 3. Убираем блок сверху
// 4. Отдельная страница ОК.
// 5. Удаление не нужно

export class Requests extends React.Component<IRequestsProps> {

	/**
	 * 
	 */
	public RequestList = ({requests}) => (
		requests.map((item, index) => (
			<Request 
				key={index} {...item} 
			/>
		))
	);


	public state = {
		requests: [
			{ 
				name: 'HUA HAI IMP.AND EXP. TRADE CO ',
				type: 'Miner2000',
				date: '10 Dec 2017',
				status: 'Active'
			},
			{ 
				name: 'HUA HAI IMP.AND EXP. TRADE CO ',
				type: 'Miner2000',
				date: '10 Dec 2017',
				status: 'Active'
			},
			{ 
				name: 'HUA HAI IMP.AND EXP. TRADE CO ',
				type: 'Miner2000',
				date: '10 Dec 2017',
				status: 'Active'
			}
		]
	}
	/**
	 * render
	 */
	public render() {
		const { RequestList } = this;
		return (
			<div className='requests' >
			<div className="requests__header">Запросы</div>
				<div className="requests__content">
					{/* Grid */}
					<div className='request-grid' >

						<div className='request-grid__header' >
							<div>Список запитів</div>
							<div>Установка</div>
							<div>Дата</div>
							<div>Trustworthiness</div>
							<div>Статус</div>
						</div>


						<div className='request-grid__list' >
							<RequestList requests={this.state.requests} />
						</div>

						
					</div>
				</div>
				<Footer className='requests__footer' />
			</div>
		)
	}
}