import { IBalanceRowProps } from "./Props";
import { Image } from '../../../../components/image/Image';
import { Button } from '../../../../components/button/Button';
import * as classNames from 'classnames';






export const BalanceRow = ({ currency, amount, ...props} : IBalanceRowProps)  => (
	<div className='balance-row' >
		<div className='balance-row__info' >
			<Image className='balance-row__icon' src={ './' + currency + '.png'} />
			<div className='balance-row__name'  >{currency.toUpperCase()}</div>
		</div>
		<div className='balance-row__amount' >
			{`Доступно: ${amount}`}
		</div>
		<div className='balance-row__buttons' >
			<Button className='balance-row__withdraw' >Вывести</Button>
		</div>
	</div>
);