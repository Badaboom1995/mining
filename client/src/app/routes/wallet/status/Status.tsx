import { Card } from "../../../components/card/Card";
import { Radio } from "../../../components/radio/Radio";
import { Select } from "../../../components/select/Select";
import { IStatusProps } from "./Props";







export class Status extends React.Component<IStatusProps> {


	/**
	 * render
	 */
	public render() {
		return (
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
					<Select className='wallet-invest__select'  placeholder='Выберите способ...' />
				</div>
				<div>
					Доступно: <strong>$37000.00</strong>
				</div>
			</Card>
		)
	}
}