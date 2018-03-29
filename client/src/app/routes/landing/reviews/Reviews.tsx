import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { IReviewsProps } from './Props';
import { TeamPart } from '../common/team-part/TeamPart';

export class Reviews extends React.Component<IReviewsProps> {
    public render() {
        return (
            <div className=''>

                <div className="about reviews">
                    <div className="title referal__title">
                        <h2 className="title__main-title">Історії успіху</h2>
                    </div>
                    <div className="about__item">
                        <div className="reviews__author-photo"><img src="" alt="" /></div>
                        <span className="about__short-title reviews__author-name">ОЛЕКСАНДРА</span>
                        <h2 className="about__item-title">А могла б зберігати гроші в банку і ніколи їх не примножити.</h2>
                        <p className="about__item-text">Це так вигідно, я просто хуїю, я вклала $2600 10 місяців назад і вже відбила їх. Зараз я маю $300 прибутку щомісяця. А могла б зберігати грощі в банку і ніколи їх не примножити. Також якщо я захочу продати установку то завжди можу повернути не меньше $2000</p>
                    </div>
                    <div className="about__item">
                        <div className="reviews__author-photo"><img src="" alt="" /></div>
                        <span className="about__short-title reviews__author-name">ОЛЕНА ВІКТОРІВНА</span>
                        <h2 className="about__item-title">Мережа стає тільки більшою, ні хто не дозволить цій технології просто перестати існувати.</h2>
                        <p className="about__item-text">Це так вигідно, я просто хуїю, я вклала $2600 10 місяців назад і вже відбила їх. Зараз я маю $300 прибутку щомісяця. А могла б зберігати грощі в банку і ніколи їх не примножити. Також якщо я захочу продати установку то завжди можу повернути не меньше $2000</p>
                    </div>
                    <div className="about__item">
                        <div className="reviews__author-photo"><img src="" alt="" /></div>
                        <span className="about__short-title reviews__author-name">ОЛЕКСАНДРА</span>
                        <h2 className="about__item-title">А могла б зберігати гроші в банку і ніколи їх не примножити.</h2>
                        <p className="about__item-text">Це так вигідно, я просто хуїю, я вклала $2600 10 місяців назад і вже відбила їх. Зараз я маю $300 прибутку щомісяця. А могла б зберігати грощі в банку і ніколи їх не примножити. Також якщо я захочу продати установку то завжди можу повернути не меньше $2000</p>
                    </div>

                </div>
            
                <TeamPart />

            </div>
        )
    }
}