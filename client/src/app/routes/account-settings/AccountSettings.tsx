import { IAccountSettingsProps } from "./Props";
import { Card } from '../../components/card/Card';
import { Switch } from '../../components/switch/Switch';
import { Field } from "../../components/field/Field";







export class AccountSettings extends React.Component<IAccountSettingsProps> {

	/**
	 * Side bar with extra options and sponsor info
	 */
	public SideBar = ({ }) => {
		return (
			<div className='account-settings__side-bar' >
				<Card className='account-settings__notifications' >
					<h3>Налаштування сповіщень</h3>
					<Switch label='Новий особистий партнер' />
					<Switch label='Новий командний партнер' />
					<Switch label='Інвестиція осбстого партнера' />
					<Switch label='Інвестиція командного партнера' />
				</Card>
				<Card className='account-settings__email-notifications' >
					<h3>Імейл розсилка</h3>
					<Switch label='Щотижневий звіт' />
					<Switch label='Інвестиція командного партнера' />
				</Card>
				<Card className='account-settings__sponsor-info' >
					<h3>Ваш спонсор</h3>
					<div className='account-settings-sponsor-data' >
						<div className='account-settings-sponsor-data__name' >Никнейм:</div>
						<div className='account-settings-sponsor-data__value' >Somenickname</div>
					</div>
					<div className='account-settings-sponsor-data' >
						<div className='account-settings-sponsor-data__name' >Мобильный телефон:</div>
						<div className='account-settings-sponsor-data__value' >+38 (093) 888-88-88</div>
					</div>
					<div className='account-settings-sponsor-data' >
						<div className='account-settings-sponsor-data__name' >E-mail:</div>
						<div className='account-settings-sponsor-data__value' >email@example.com</div>
					</div>
				</Card>
			</div>
		);
	}



	/**
	 * Data form with primary fields 
	 */
	public DataForm = ({ }) => {

		return (
			<Card className='account-settings__data-form' >
				
				<h3 className='account-settings__section-title' >Основная информация</h3>
				<section className='account-settings__primary-data' >
					<div  className='account-settings__primary-data-photo' >
						<div className='account-settings-avatar' >
							<img src={require('img/user.svg')} />
						</div>
						<div className='account-settings__primary-data-photo-caption' >Загрузить фото</div>
					</div>

					<div className='account-settings__primary-data-fields' >
						<Field label='Никнейм' />
						<Field label='Email' />
						<Field label='Мобильный телефон' />
					</div>

				</section>


				<section className='account-settings__section account-settings-extra' >
					<h3 className='account-settings__section-title' >Дополнительная информация</h3>
					<div className='account-settings-extra__row' >
						<Field className='account-settings-extra__name' label='Имя' />
						<Field className='account-settings-extra__lastname' label='Фамилия' />
					</div>
					<div className='account-settings-extra__row' >
						<Field className='account-settings-extra__birth' label='Дата рождения' />
					</div>
					<div className='account-settings-extra__row' >
						<Field className='account-settings-extra__country' label='Страна' />
						<Field className='account-settings-extra__city' label='Город' />
					</div>
				</section>


				<section className='account-settings__section account-settings-payment' >
					<h3 className='account-settings__section-title' >Платежная информация</h3>

					<div className="account-settings-payment__row">
						<Field label='Bitcoin' />
						<Field label='Advanced Cash' />
					</div>
					<div className="account-settings-payment__row">
						<Field label='Privat24' ></Field>
						<Field label='Etherium' ></Field>
					</div>
					<div className="account-settings-payment__row">
						<Field label='Номер карты' />
					</div>

				</section>


			</Card>
		);
	}

	/**
	 * Renders account settings form
	 */
	public render() {

		const {SideBar, DataForm } = this;

		return (
			<div className='account-settings' >
				<h1 className='main-page__content-title' >Настройки</h1>
				<div className='account-settings__content' >
					<DataForm />
					<SideBar />
				</div>
			</div>
		);
	}
}