import * as classNames from 'classnames';
import { ISelectProps } from './Props';




export class Select extends React.Component<ISelectProps> {
	public static defaultProps = {
		onChange: () => {},
		options: [],
		value: null,
		placeholder: '',
		label : ''
	}
	/**
	 * local state
	 */
	public state = {
		isOpened: false
	}
	/**
	 * Option click handler
	 */
	public onSelectOption = (option: any) => {
		const { onChange, name } = this.props;
		onChange({ name, value: option.id, option });
	}

	/**
	 * Returns selected option || null
	 */
	public get selected() {
		return this.props.options.find(item => item.id == this.props.value) || null;
	}
	/**
	 * Renders select with label
	 */
	public render() {
		const { value, options, label, placeholder, ...props } = this.props;
		const { selected, onSelectOption, state } = this;

		return (
			<div className='select' >
				{label && <label className='select__label' >{label}</label>}
				<div className='select__box' >
					<div className='select__caption' >{selected ? selected.name : placeholder}</div>
					<div className='select__arrow-box' >
						<i className={`icon-arrow`} ></i>
					</div>
					<div className={classNames('select__dropdown', { 'select__dropdown--opened': state.isOpened })} >
						<ul className='select__list' >
							{options.map((item, index) => {
								const className = classNames(`select__option`, { 'select__option--selected': item.id == value });
								return (
									<li onClick={this.onSelectOption.bind(this, item)} key={`${index}${item.id}`} className={className} >{item.name}</li>
								);
							})}
						</ul>
					</div>
				</div>

			</div>
		);
	}
}