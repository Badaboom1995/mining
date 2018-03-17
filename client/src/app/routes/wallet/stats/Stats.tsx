import { Card } from "../../../components/card/Card";
import { IStatsProps } from "./Props";



export class Stats extends React.Component<IStatsProps> {
	/**
	 * render
	 */
	public render() {
		return (
			<Card className='wallet-stats' >
				<div className='wallet-stats__title' >Історія платежів та нарахувань:</div>
				<div className='wallet-stats__table-wrapper' >
					<div className='wallet-stats-table__border-wrapper' >
						<table className='wallet-stats-table' >
							<thead className='wallet-stats-table__header' >
								<tr>
									<th>Вид</th>
									<th>Сумма</th>
									<th>Дата</th>
								</tr>
							</thead>
							<tbody className='wallet-stats-table__body' >
								{[1, 2, 3, 4, 5, 6].map((item, index) => (
									<tr key={index} >
										<td>Реф бонус</td>
										<td>$1000.00</td>
										<td>01.01.2018</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

				</div>
				<div className='wallet-stats__total' >
					<div className='wallet-stats__total-earnings' >Всього заробив: $20000</div>
					<div className='wallet-stats__total-sell' >Всього продав: $15000</div>
				</div>
			</Card>
		)
	}
}