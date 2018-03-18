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
		const { disabled, tabIndex, error, isError, className, placeholder, label, type, value, ...props } = this.props;

		return (
			<div {...props} className={ classNames('field', className)} >
				{label && <label onClick={() => (this.refs.input as any).focus()} className='field__label' >{label}</label>}
				<div className='field__input-box' >
					<input ref='input' disabled={disabled} tabIndex={tabIndex} className={classNames('field__input', {'field__input--error': isError})} placeholder={placeholder} onChange={this.onChange} value={value}  type={type} />
					{isError && error && <div className='field__error' >{error}</div>}
				</div>
			</div>
		);
	}
}