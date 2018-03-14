import { IReferalCardProps } from "./Props";
import { Card } from "../../../components/card/Card";
import { Button } from "../../../components/button/Button";
import * as classNames from 'classnames';






export class ReferalCard extends React.Component<IReferalCardProps> {


	/**
	 * render
	 */
	public render() {
		const { className, ...props } = this.props;
		
		return (
			<Card {...props} className={classNames('referal-card', className)}  >
				<div className='referal-card__title' >Реферальна Сторінка Лендінг</div>
				<div className='referal-card__link-form' >
					<div className='referal-card__link' >http://pospage.com/invite/slave</div>
					<Button className='referal-card__copy-button' >Копировать</Button>
				</div>
				<div className='referal-card__separator-title' > Використовуйте це посилання для масової лідогенеріції </div>
				<div className='referal-card__stats' >
					<div className='referal-card__stat referal-card__stat--clicks' >Кликов: 9000</div>
					<div className='referal-card__stat referal-card__stat--regs' >Регистраций: 100</div>
					<div className='referal-card__stat referal-card__stat--ctr' >CTR: 1.11%</div>
				</div>
			</Card>
		);
	}
}