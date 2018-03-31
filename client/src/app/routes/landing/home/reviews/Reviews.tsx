import { default as Slider } from 'react-slick';
import { IReviewsProps } from './Props';
import * as classNames from 'classnames';


const SliderArrow = (props) => {
	const {dir, onClick, className} = props;
	
	return (
		<span onClick={onClick} className={`${className} reviews__slider-control reviews__slider-control--${dir}`}></span>
	);
}

export class Reviews extends React.Component<IReviewsProps> {
	/**
	 * Reviews list
	 */
	public reviews = [
		{
			name: 'ОЛЕКСАНДРА',
			content: 'Це так вигідно, я просто хуїю, я вклала $2600 10 місяців назад і вже відбила їх. Зараз я маю $300 прибутку щомісяця. А могла б зберігати грощі в банку і ніколи їх не примножити. Також якщо я захочу продати установку то завжди можу повернути не меньше $2000',
			photo: '#'
		},
		{
			name: 'ОЛЕКСАНДРА',
			content: 'Це так вигідно, я просто хуїю, я вклала $2600 10 місяців назад і вже відбила їх. Зараз я маю $300 прибутку щомісяця. А могла б зберігати грощі в банку і ніколи їх не примножити. Також якщо я захочу продати установку то завжди можу повернути не меньше $2000',
			photo: '#'
		},
		{
			name: 'ОЛЕКСАНДРА',
			content: 'Це так вигідно, я просто хуїю, я вклала $2600 10 місяців назад і вже відбила їх. Зараз я маю $300 прибутку щомісяця. А могла б зберігати грощі в банку і ніколи їх не примножити. Також якщо я захочу продати установку то завжди можу повернути не меньше $2000',
			photo: '#'
		}
	];
	/**
	 * Returns slider with reviews
	 */
	public render() {
		return (
			<div className="reviews">
					<div className="title">
						<h2 className="title__main-title">Відгуки</h2>
						<p className="title__subtitle">ПОСЛУХАЙТЕ ЩО КАЖУТЬ ТІ ХТО ПОВІРИЛИ В НАС</p>
					</div>
					<Slider className='review__list' slidesToShow={1} slidesToScroll={1} 
						nextArrow={<SliderArrow dir='next' />}
						prevArrow={<SliderArrow dir='prev' />}
					>
						{this.reviews.map(item => {
							return (
								<div className="reviews__list-item">
									<div className="reviews__item-photo"><img src={item.photo || '#'} /></div>
									<p className="reviews__item-text">{item.content}</p>
									<span className="reviews__item-author">{item.name}</span>
								</div>
							);
						})}

					</Slider>

				</div>

		)	
	}
}