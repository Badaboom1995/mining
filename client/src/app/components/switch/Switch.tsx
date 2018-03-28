import { ISwitchProps } from "./Props";
import * as classNames from 'classnames';



export class Switch extends React.Component<ISwitchProps> {

	/**
	 * Dfeault props
	 */
	public static defaultProps = {
		label : '',
		value: false,
		name: '',
		onChange: () => {},
		onBlur: () => {},
		onFocus: () => {}
	};


	/**
	 * Emit change event
	 */
	public onSwitch = (event : React.SyntheticEvent<any>) => {
		const { name, onChange, value } = this.props;
		onChange({ name, value: !value });
	}

	public render() {
		const {  tabIndex, className, label, value, ...props } = this.props;

		return (
			<div className={ classNames('switch', className)} >
				<div tabIndex={tabIndex} onClick={this.onSwitch} className={classNames('switch__bar', { 'switch__bar--on': value  } )} >
					<div className={ classNames('switch__toggle', `switch__toggle--${value ? 'on' : 'off'}` )  } ></div>
				</div>
				{label && <div onClick={this.onSwitch} className='switch__label' >{label}</div>}
			</div>
		);
	}
}