import * as classNames from 'classnames';
import { IQuestionProps } from './Props';




export class Question extends React.Component<IQuestionProps> {
	/**
	 * Question state
	 */
	public state = {
		opened: false
	}
	/**
	 * render
	 */
	public render() {

		return (
			<div className={ classNames('questions__item', { 'questions__item--active': this.state.opened})}>
				<h2 onClick={() => this.setState({ opened: !this.state.opened })}  className="questions__item-title">ЯК МЕНІ З ВАМИ ЗВ’ЯЗАТИСЯ?</h2>
				<div className="questions__item-text">“В один момент ми зрозуміли що ця технологія стає прибутковішою коли люди поєднуються та майнять разом. Я поясню, грубо кажучи уявіть собі таку прогрессію, якщо один майнер майнить одну монету в день, а два майнять 2,5 монети в день, то три майнять 4 монети в день. Ви розумієте? Нам вигідніше об’єеднуватися та майнити разом”</div>
			</div>
		);
	}
}