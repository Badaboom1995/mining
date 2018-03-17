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
					inputRenderer={(inputProps) => {
						return (
							<input  {...inputProps} className='Select-input select__input'  />
						)
					}}
					arrowRenderer={({onMouseDown, isOpen} : any) => (
						<div className='select__arrow-zone' onMouseDown={onMouseDown} >
							<i className={classNames('icon-arrow-down', 'select__arrow' , { 'select__arrow--opened': isOpen })} ></i>
						</div>
					)}
				/>
			</div>
		)
	}
}