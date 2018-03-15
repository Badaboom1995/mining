import { IInvestmentModalProps } from "./Props";
import { Slider } from "../../../components/slider/Slider";
import { Button } from "../../../components/button/Button";
import { Card } from "../../../components/card/Card";
import { observer, inject } from "mobx-react";






@inject('routing', 'investment')
@observer
export class InvestmentModal extends React.Component<IInvestmentModalProps> {
	/**
	 * Banner block
	 */
	public Banner = () => {
		const { onClose } = this.props;
		return (
			<div className="investment-modal-banner">
				<h4 className='investment-modal-banner__title' >Не хочете купувати цілий майнер?</h4>
				<p className='investment-modal-banner__text' >
					Якщо ви не маєте можливості, або не хочете купляти цілий майнер - можете   прийняти участь у пулі.
						Простими словами скинутися з нами на майнер і ділити прибуток.</p>
				<div className="investment-modal-banner__close">
					<i onClick={onClose} className='icon-close-button'></i>
				</div>
			</div>
		)
	}


	/**
	 * Pool participation block
	 */
	public PoolParticipation = () => {

		const { routing, investment } = this.props;

		return (
			<Card className='investment-pool-participation' >
				<div className='investment-pool-participation__title' >Участь в пулі </div>
				<div className='investment-pool-participation__slider-block' >
					<div className='investment-pool-participation__price' >${investment.investmentParams.amount.toFixed(2)}</div>
					<Slider value={investment.investmentParams.amount} onChange={event => investment.investmentParams.setAmount(event.value)} />
				</div>
				<Button onClick={() => routing.push('/investment/methods')} className='investment-pool-participation__button' >Инвестировать</Button>
			</Card>
		)
	}

	/**
	 * Period revenue card with slider 
	 */
	public PeriodRevenueCard = ({ className = '',  value = 0, onChange = (value: number) => { }, title = '' }) => {
		return (
			<Card className={`period-revenue-card ${className}`} >
				<div className='period-revenue-card__title' >
					<strong>{title}</strong>
					{` прибуток`}
				</div>
				<div className='period-revenue-card__slider-block' >
					<div className='period-revenue-card__price' >${value}</div>
					<Slider value={value} onChange={event => onChange(event.value)} />
				</div>
			</Card>
		);
	}


	/**
	 * render
	 */
	public render() {
		const { Banner, PeriodRevenueCard, PoolParticipation, props } = this;
		const { investment } = props;
		const { investmentParams } = investment;


		return (
			<div className='overlay' >
				<Card className='investment-modal' >
					<Banner />

					<div className="investment-modal__content">
						{PoolParticipation()}
						<div>
							<PeriodRevenueCard className='investment-modal__per-month' value={investmentParams.perMonth} onChange={investmentParams.setPerMonth} title='Щомісячний' />
							<PeriodRevenueCard value={investmentParams.perYear} onChange={investmentParams.setPerYear} title='Щорічний' />
						</div>
					</div>

				</Card>
			</div>
		);
	}
}