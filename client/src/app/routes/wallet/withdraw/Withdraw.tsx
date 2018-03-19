import { Field } from '../../../components/field/Field';
import { Button } from '../../../components/button/Button';
import { Card } from '../../../components/card/Card';
import { IWithdrawProps } from './Props';



export class Withdraw extends React.Component<IWithdrawProps> {
	/**
	 * render
	 */
	public render() {
		return (
			<Card className='wallet-withdraw' >
				<div className='wallet-withdraw__title' >Введіть суму яку хочете вивести:</div>
				<div className='wallet-withdraw__form' >
					<Field value={'0.00'} className='wallet-withdraw__field' />
					<Button className='wallet-withdraw__button' >Переказати</Button>
				</div>
			</Card>
		);
	}
}