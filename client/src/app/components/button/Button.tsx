import * as classNames from 'classnames';
import { IButtonProps } from './Props';




export class Button extends React.Component<IButtonProps> {
	/**
	 * Def props
	 */
	public static defaultProps = {
		type: 'button',
		theme: 'primary'
	}



	/**
	 * render
	 */
	public render() {
		const { theme, children, className, ...props } = this.props;

		return (
			<button className={classNames('button' , `button--${theme}` , className)} {...props}  >
				{children}
			</button>
		)
	}
}