import { Card } from "../../../components/card/Card";
import { IInfoBlockProps } from "./Props";





export class InfoBlock extends React.Component<IInfoBlockProps> {

	/**
	 * Renders block with info
	 */
	public render() {
		
		const { title = '', icon = '', dateCaption = '', priceCaption = '' } = this.props;

		return (
			<Card className='investment-info-block' >
				<div className='investment-info-block__header'  >
					<div className='investment-info-block__header-icon' >
						<i className={`  icon-${icon}`} ></i>
					</div>
					<div className='investment-info-block__header-title' >{title}</div>
				</div>
				<div className='investment-info-block__content' >
					<div className='investment-info-block__content-date' >{dateCaption}</div>
					<div className='investment-info-block__content-price' >{priceCaption}</div>
				</div>
			</Card>
		);
	}
}