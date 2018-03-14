import { IRadioProps } from "./Props";
import * as classNames from 'classnames';




export class Radio extends React.Component<IRadioProps> {

	/**
	 * Change handler
	 */
	public onChange = () => {
		const { onChange, name, value } = this.props;
		onChange({name, value });
	}

	/**
	 * render
	 */
	public render() {
		const { checked, label, tabIndex } = this.props;

		return (
			<div className={classNames('radio')} >
				<div tabIndex={tabIndex} onClick={this.onChange} className={classNames('radio__flag', { 'radio__flag--active': checked })} ></div>
				{label && <label onClick={this.onChange} className='radio__label' >{label}</label>}
			</div>
		)	
	}
}