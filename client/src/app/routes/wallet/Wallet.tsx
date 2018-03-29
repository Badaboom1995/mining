import { IWalletProps } from "./Props";
import { Card } from "../../components/card/Card";
import { Field } from '../../components/field/Field';
import { Button } from "../../components/button/Button";
import * as classNames from 'classnames';
import { Radio } from "../../components/radio/Radio";
import { Select } from '../../components/select/Select';
import { Stats } from "./stats/Stats";
import { Status } from "./status/Status";
import { Withdraw } from './withdraw/Withdraw';
import { NavLink, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Balance } from './balance/Balance';
import { History } from './history/History';





export class Wallet extends React.Component<IWalletProps> {

	/**
	 * Renders wallet page
	 */
	public render() {

		return (
			<div className='wallet' >
				{/* <h1 className='main-page__content-title' >Гаманець</h1> */}
				<div className='wallet__content' >
					<div className='wallet-section' >
						<h4 className='wallet-section__title' >Баланс</h4>
						<Balance />
					</div>
					<div className='wallet-section' >
						<h4 className='wallet-section__title' >История</h4>
						<History />
					</div>



				</div>
			</div>
		);
	}
}