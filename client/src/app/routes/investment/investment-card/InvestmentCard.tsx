import { Card } from "../../../components/card/Card";
import { IInvestmentCardProps } from "./Props";







export const InvestmentCard = ({ className, investment , ...props } : IInvestmentCardProps) => (
	<Card {...props}  className={`investment-card ${className}`} >
		
		<div className='investment-card__header' >
			<div className='investment-card__icon' >
				<i className='icon-stats' ></i>
			</div>
			<div>{investment.name || 'Мої інвестиції'}</div>
		</div>

		<div className='investment-card__status' >  
			<div className='investment-card__percent' >{investment.percent}%</div>			
			<div className='investment-card__status-caption'  >поточний статус</div>
		</div>

		<ul className='investment-card__values' >
			<li >Інвестовано: <strong>${investment.invested.toFixed(2)}</strong></li>
			<li >Отримано: <strong>${investment.earned.toFixed(2)} </strong></li>
			<li >Окуплено: <strong>${investment.payback.toFixed(2)}</strong></li>
		</ul>


	</Card>
);