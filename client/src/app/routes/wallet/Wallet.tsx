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
						<Status />
						<Withdraw />
					</div>
					<Stats />
				</div>
			</div>
		);
	}
}