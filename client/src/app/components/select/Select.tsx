import ReactSelect from 'react-select';
import { ISelectProps } from './Props';
import 'react-select/dist/react-select.css';
import * as classNames from 'classnames';




export class Select extends React.Component<ISelectProps> {

	/**
	 * Default props
	 */
	public static defaultProps = {
		labelKey: 'name',
		valueKey: 'id',
		className: ''
	}
	/**
	 * render
	 */
	public render() {
		const { className, label, value, options, labelKey, valueKey, placeholder } = this.props;


		return (
			<div className={classNames('select', className)} >
				{label && <label className='select__label' >{label}</label>}
				<ReactSelect 
					placeholder={placeholder}
					value={value}
					options={options}
					labelKey={labelKey}
					valueKey={valueKey}
				/>
			</div>
		)
	}
}