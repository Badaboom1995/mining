import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { IQuestionsProps } from './Props';
import { TeamPart } from '../common/team-part/TeamPart';

export class Questions extends React.Component<IQuestionsProps> {
	public render() {
		return (
			<div className='landing landing--referal'>
                    <div className="questions">
                        <div className="title questions__title">
                            <h2 className="title__main-title">Питання та відповіді</h2>
                        </div>
                        <div className="questions__item">
                            <h2 className="questions__item-title">В ЯКИХ РЕГІОНАХ УКРАЇНИ ЦЕ ДОСТУПНО?</h2>
                            <div className="questions__item-text"></div>
                        </div>
                        <div className="questions__item">
                            <h2 className="questions__item-title">ЧИ ЦЕ ЛЕГАЛЬНО?</h2>
                            <div className="questions__item-text"></div>
                        </div>
                        <div className="questions__item">
                            <h2 className="questions__item-title">ЧИ ЦЕ БЕЗПЕЧНО?</h2>
                            <div className="questions__item-text"></div>
                        </div>
                        <div className="questions__item questions__item--active">
                            <h2 className="questions__item-title">ЯК МЕНІ З ВАМИ ЗВ’ЯЗАТИСЯ?</h2>
                            <div className="questions__item-text">“В один момент ми зрозуміли що ця технологія стає прибутковішою коли люди поєднуються та майнять разом. Я поясню, грубо кажучи уявіть собі таку прогрессію, якщо один майнер майнить одну монету в день, а два майнять 2,5 монети в день, то три майнять 4 монети в день. Ви розумієте? Нам вигідніше об’єеднуватися та майнити разом”</div>
                        </div>
                        <div className="questions__item">
                            <h2 className="questions__item-title">НА ЯКІ РАХУНКИ/КАРТКИ Я МОЖУ ОТРИМУВАТИ ЗАРОБІТОК?</h2>
                            <p className="questions__item-text"></p>
                        </div>
                        <div className="questions__item">
                            <h2 className="questions__item-title">ЩО ЯКЩО Я ВИРІШУ МАЙНИТИ БЕЗ ВАС?</h2>
                            <p className="questions__item-text"></p>
                        </div>
                        <div className="questions__item">
                            <h2 className="questions__item-title">ЯК ДОВГО МЕНІ ЧЕКАТИ МАЙНЕРА? </h2>
                            <p className="questions__item-text"></p>
                        </div>
                        <div className="questions__item">
                            <h2 className="questions__item-title">ЧИ Я МАТИМУ КОНТРОЛЬ МОЇХ ЗАРОБЛЕНИХ МОНЕТ ДО ВИВОДУ НА КАРТКУ?</h2>
                            <p className="questions__item-text"></p>
                        </div>
                    </div>

                  
                    <TeamPart />
                   
			</div>
		)
	}
}