
import { default as ReactSlider } from 'rc-slider';
import { ISliderProps } from './Props';





export class Slider extends React.Component<ISliderProps> {
	public static defaultProps = {
		value: 0,
		onChange: () => {},
		min: 0,
		max: 2000
	}
	/**
	 * Change handler
	 */
	public onChange = (value : number) => {
		const { onChange, name } = this.props;
		onChange({name, value});
	}
	/**
	 * render
	 */
	public render() {
		const { min, max, value } = this.props;

		return (
			<div className='slider' >
				<ReactSlider 
					min={min}
					max={max}
					value={value}
					onChange={this.onChange}
				/>
			</div>
		);

	}
}