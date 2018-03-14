import {  IDataCardProps } from "./Props";
import { Card } from "../../../components/card/Card";
import { Button } from "../../../components/button/Button";
import * as classNames from 'classnames';






export class DataCard extends React.Component<IDataCardProps> {



	/**
	 * render
	 */
	public render() {
		
		const { className = '', onButtonClick = () => {} , icon = '', title = '', children, buttonText = 'Дізнатись більше', ...props } = this.props;
		
		return (
			<Card className={`data-card ${className}`} >
				<div className='data-card__header' >
					<div className='data-card__header-icon' >
						<i className={`icon-${icon}`} ></i>
					</div>
					<div className='data-card__title' >{title}</div>
				</div>
				<div className='data-card__content' >
					{children}
				</div>
				<div onClick={onButtonClick} className='data-card__button' >{buttonText}</div>
			</Card>
		);
	}
}