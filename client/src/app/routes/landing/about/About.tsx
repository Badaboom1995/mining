import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { IAboutProps } from './Props';
import { TeamPart } from '../common/team-part/TeamPart';

export class About extends React.Component<IAboutProps> {
    public render() {
        return (
            <div className='landing landing--referal'>

                <div className="about">
                    <div className="about__item">
                        <span className="about__short-title">ПРО ПРОЕКТ</span>
                        <h2 className="about__item-title">Группа ентузіастів започаткувала проект у вільний від роботи час. </h2>
                        <h3 className="about__item-subtitle">ОСЬ ЩО ВОНИ КАЖУТЬ:</h3>
                        <p className="about__item-text">“В один момент ми зрозуміли що ця технологія стає прибутковішою коли люди поєднуються та майнять разом. Я поясню, грубо кажучи уявіть собі таку прогрессію, якщо один майнер майнить одну монету в день, а два майнять 2,5 монети в день, то три майнять 4 монети в день. Ви розумієте? Нам вигідніше об’єеднуватися та майнити разом”</p>
                    </div>
                    <div className="about__item">
                        <span className="about__short-title">ЯК МИ ПРАЦЮЄМО</span>
                        <h2 className="about__item-title">Як ви будете рекламувати ваш сервіс? </h2>
                        <p className="about__item-text">“В цьому майже не має потреби тому бізнес сам себе продає. Але щоб прискорити цей процесс ми вирішили зробити ще один вид заробітку - реферальну программу завдяки якій ми дуже щедро заохочуємо тих хто рекомендує наші послуги своїм друзям”</p>
                    </div>
                    <div className="about__item">
                        <span className="about__short-title">НАВІЩО</span>
                        <h2 className="about__item-title">Навіщо нам це?</h2>
                        <p className="about__item-text">“Ми дуже цінуємо час нашого життя і хочемо займатися улюбленими справами, родиною, та просто насолоджуватися життям, але це не завжди може забезпечити нас та нащі родини. Тому ми вирішили поділитися цією дуже простою ідеєю з усіма бажаючими”</p>
                    </div>

                </div>

                <TeamPart />
            </div>
        )
    }
}