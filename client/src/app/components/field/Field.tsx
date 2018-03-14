import { IFieldProps } from "./Props";
import * as classNames from 'classnames';



export class Field extends React.Component<IFieldProps> {

	/**
	 * Def props
	 */
	public static defaultProps = {
		label : '',
		type: 'text',
		value: '',
		placeholder: '',
		name: '',
		onChange: () => {}
	};


	/**
	 * Change handler
	 */
	public onChange = (event : React.SyntheticEvent<any>) => {
		const { name, onChange } = this.props;
		onChange({ name, value: event.currentTarget.value });
	}


	/**
	 * Renders field with input and label
	 */
	public render() {
		const { disabled, tabIndex, className, placeholder, label, type, value, ...props } = this.props;

		return (
			<div className={ classNames('field', className)} >
				{label && <label className='field__label' >{label}</label>}
				<input disabled={disabled} tabIndex={tabIndex} className='field__input' placeholder={placeholder} onChange={this.onChange} value={value}  type={type} />
			</div>
		);
	}
}