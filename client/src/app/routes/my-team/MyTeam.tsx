import { Card } from "../../components/card/Card";
import { Field } from "../../components/field/Field";
import { IMyTeamProps } from "./Props";
import { TeamGrid } from './team-grid/TeamGrid';




export class MyTeam extends React.Component<IMyTeamProps> {
	

	/**
	 * renders my team page
	 */
	public render() {
		return (
			<div className='my-team' >
				<h1 className="main-page__content-title">Моя команда</h1>
				<Card className='my-team__content'  >
					<h3 className='my-team__content-title' >Активність партнерів</h3>
					<div className='my-team-search' >
						<Field className='my-team-search__field' placeholder='Введіть ID партнера' />
						<div className='my-team-search__icon' >
							<i className='icon-search' ></i>
						</div>
					</div>
					<TeamGrid />
					{/* <div className='my-team-grid' >
						<div className='my-team-grid__header' >
							<div className='my-team-grid__column-name' >
								Ім’я
							</div>
							<div className='my-team-grid__column-id' >ID</div>
							<div className='my-team-grid__column-pp' >П.П</div>
							<div className='my-team-grid__column-pv' >П.В</div>
							<div className='my-team-grid__column-level' >Рівнів</div>
							<div className='my-team-grid__column-earned' >Зароблено</div>
							<div className='my-team-grid__column-invested' >Інвест.</div>
							<div className='my-team-grid__column-v-invested' >В.Інвест.</div>
						</div>
						<div className='my-team-grid__body' >
							{this.data.map((item, index) => {
								return (
									<div className='my-team-grid__row' key={index} >

										<div className='my-team-grid__column-name' >
											{item.name}
											<div className='my-team-grid__status  my-team-grid__status--info' >
												info
											</div>
											<div className='my-team-grid-info-popover' >

													<div className='my-team-grid-info-popover__nick-title'>Нікнейм</div>
													<div className='my-team-grid-info-popover__nick' >112233</div>

													<div className='my-team-grid-info-popover__sub-title' >Мобільний телефон:</div>
													<div className='my-team-grid-info-popover__sub-value' >+38 (093) 888-88-88</div>

													<div className='my-team-grid-info-popover__sub-title' >E-mail:</div>
													<div className='my-team-grid-info-popover__sub-value' >mail.mail@com</div>

													<div className='my-team-grid-info-popover__sub-title' >Інвестиція:</div>
													<div className='my-team-grid-info-popover__sub-value' >mail.mail@com</div>

												</div>
										</div>

										<div className='my-team-grid__column-id' >{item.id}</div>
										<div className='my-team-grid__column-pp' >{item.pp}</div>
										<div className='my-team-grid__column-pv' >{item.pv}</div>
										<div className='my-team-grid__column-level' >{item.level}</div>
										<div className='my-team-grid__column-earned' >{item.earned}</div>
										<div className='my-team-grid__column-invested' >{item.invested}</div>
										<div className='my-team-grid__column-v-invested' >{item.vInvested}</div>
									</div>
								)
							})}
						</div>
					</div> */}
				</Card>
			</div>
		);
	}
}