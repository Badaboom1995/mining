import { ITeamGridProps } from "./Props";
import { InfoPopup } from "./info-popup/InfoPopup";




export class TeamGrid extends React.Component<ITeamGridProps> {
	/**
	 * Data item placeholder
	 */
	public dataItem = {
		name: 'Nick',
		id: 123456,
		pp: 0,
		pv: 0,
		level: '0/4',
		earned: 0,
		invested: 0,
		vInvested: 0
	};
	/**
	 * Data placeholder
	 */
	public data = [
		this.dataItem,
		this.dataItem,
		this.dataItem,
		this.dataItem,
		this.dataItem,
		this.dataItem
	];

	/**
	 * render
	 */
	public render() {
		return (
			<table className='my-team-grid'  >
				<thead className='my-team-grid__header' >
					<tr>
						<th> Ім’я </th>
						<th>ID</th>
						<th>П.П</th>
						<th>П.В</th>
						<th>Рівнів</th>
						<th>Зароблено</th>
						<th>Інвест.</th>
						<th>В.Інвест.</th>
					</tr>
				</thead>
				<tbody className='my-team-grid__body' >
					{this.data.map((item, index) => {
						return (
							<tr key={index} >
								<td>
									<div>{item.name}</div>
									<div className='my-team-grid__status  my-team-grid__status--info' > info </div>
									<InfoPopup />
								</td>
								<td>{item.id}</td>
								<td>{item.pp}</td>
								<td>{item.pv}</td>
								<td>{item.level}</td>
								<td>{item.earned}</td>
								<td>{item.invested}</td>
								<td>{item.vInvested}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}
}