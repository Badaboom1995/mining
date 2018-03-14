import { IWalletProps } from "./Props";
import { Card } from "../../components/card/Card";
import { Field } from '../../components/field/Field';
import { Button } from "../../components/button/Button";
import * as classNames from 'classnames';
import { Radio } from "../../components/radio/Radio";
import { Select } from '../../components/select/Select';





export class Wallet extends React.Component<IWalletProps> {
	/**
	 * Renders wallet page
	 */
	public render() {

		return (
			<div className='wallet' >
				<h1 className='main-page__content-title' >Гаманець</h1>

				<div className='wallet__content' >
					<div className='wallet__form' >
						<Card className='wallet-invest' >
							<div className='wallet-invest__title'  >До наступного нарахування:</div>
							<div className='wallet-invest__days' >11 днів</div>
							<div className='wallet-invest__reinvest-caption' >Реінвестувати прибуток: </div>
							<div className='wallet-invest__radios' >
								<Radio checked={true} label='30%' />
								<Radio label='60%' />
								<Radio label='90%' />
							</div>
							<div className='wallet-invest__reinvest-selection' >
								<div className='wallet-invest__reinvest-selection-caption' >Отримати на: </div>
								<Select placeholder='Select value' />
							</div>
							<div>
								Доступно: <strong>$37000.00</strong>
							</div>
						</Card>
						<Card className='wallet-withdraw' >
							<div className='wallet-withdraw__title' >Введіть суму яку хочете вивести:</div>
							<div className='wallet-withdraw__form' >
								<Field className='wallet-withdraw__field' />
								<Button className='wallet-withdraw__button' >Переказати</Button>
							</div>
						</Card>
					</div>
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
						<div  className='wallet-stats__total' >
							<div className='wallet-stats__total-earnings' >Всього заробив: $20000</div>
							<div className='wallet-stats__total-sell' >Всього продав: $15000</div>
						</div>
					</Card>
				</div>
			</div>
		);
	}
}