import { IAccountSettingsProps } from './Props';
import { Card } from '../../components/card/Card';
import { Switch } from '../../components/switch/Switch';
import { Field } from '../../components/field/Field';
import { observer, inject } from 'mobx-react';
import { Button } from '../../components/button/Button';


@inject('profile', 'validation')
@observer
export class AccountSettings extends React.Component<IAccountSettingsProps> {


    /**
     * Get profile data
     */
    public componentDidMount() {
        const { profile } = this.props;
        profile.get();
    }


    /**
     * Unlaod profile page
     */
    public componentWillUnmount () {
        const { profile } = this.props;
        profile.unload();
    }



    /**
     * Side bar with extra options and sponsor info
     */
    public SideBar = () => {
        const { profile} = this.props;
        const {user, userSet} = profile;
        return (
            <div className="account-settings__side-bar">
                <Card className="account-settings__notifications">
                    <h3>Налаштування сповіщень</h3>
                    <Switch name='reciveNotificationOnNewPartner' value={user.reciveNotificationOnNewPartner} onChange={userSet} label="Новий особистий партнер" />
                    <Switch name='reciveNotificationOnNewTeamPartner' value={user.reciveNotificationOnNewTeamPartner} onChange={userSet} label="Новий командний партнер" />
                    <Switch name='reciveNotificationOnNewPartnerInvestment' value={user.reciveNotificationOnNewPartnerInvestment} onChange={userSet} label="Інвестиція осбстого партнера" />
                    <Switch name='reciveNotificationOnNewTeamPartnerInvestment' value={user.reciveNotificationOnNewTeamPartnerInvestment} onChange={userSet} label="Інвестиція командного партнера" />
                </Card>
                <Card className="account-settings__email-notifications">
                    <h3>Імейл розсилка</h3>
                    <Switch onChange={userSet} name='reciveNotificationsEveryWeek' value={user.reciveNotificationsEveryWeek}  label="Щотижневий звіт" />
                    <Switch onChange={userSet} name='reciveNotificationsEveryMonth' value={user.reciveNotificationsEveryMonth}  label="Месячный отчет" />
                </Card>
                <Card className="account-settings__sponsor-info">
                    <h3>Ваш спонсор</h3>
                    <div className="account-settings-sponsor-data">
                        <div className="account-settings-sponsor-data__name">Никнейм:</div>
                        <div className="account-settings-sponsor-data__value"> Somenickname </div>
                    </div>
                    <div className="account-settings-sponsor-data">
                        <div className="account-settings-sponsor-data__name"> Мобильный телефон: </div>
                        <div className="account-settings-sponsor-data__value"> +38 (093) 888-88-88 </div>
                    </div>
                    <div className="account-settings-sponsor-data">
                        <div className="account-settings-sponsor-data__name">E-mail:</div>
                        <div className="account-settings-sponsor-data__value"> email@example.com </div>
                    </div>
                </Card>
            </div>
        );
    };

    /**
     * Photo field ref
     */
    public photoField : any = null;
    /**
     * Emulate click
     */
    public onPhotoUplaodClick = () => {
        if (this.photoField) this.photoField.click();
    }

    /**
     * Data form with primary fields
     */
    public DataForm = () => {

        let { profile } = this.props;
        let { user, userSet } = profile;
        return (
            <Card className="account-settings__data-form">
                <h3 className="account-settings__section-title">Основная информация</h3>
                <section className="account-settings__primary-data">
                    <div className="account-settings__primary-data-photo">
                        <div className="account-settings-avatar">
                            <img src={ user.photo || require('img/user.svg')} />
                        </div>
                        <input multiple={false} ref={ref => this.photoField = ref} onChange={(event : any) => {
                            const [file] = event.target.files;
                            profile.uploadPhoto(file);
                        }} className='hidden' type='file' />
                        <div onClick={this.onPhotoUplaodClick}  className="account-settings__primary-data-photo-caption"> Загрузить фото </div>
                    </div>

                    <div className="account-settings__primary-data-fields">
                        <Field onChange={userSet} value={user.nickname} name='nickname' label="Никнейм" />
                        <Field disabled={true} onChange={userSet} value={user.email} name='email'  label="Email" />
                        <Field onChange={userSet} value={user.phone} name='phone'  label="Мобильный телефон" />
                    </div>
                </section>

                <section className="account-settings__section account-settings-extra">
                    <h3 className="account-settings__section-title"> Дополнительная информация </h3>
                    <div className="account-settings-extra__row">
                        <Field onChange={userSet} value={user.firstName} name='firstName'  className="account-settings-extra__name" label="Имя" />
                        <Field onChange={userSet} value={user.lastName} name='lastName'  className="account-settings-extra__lastname" label="Фамилия" />
                    </div>
                    <div className="account-settings-extra__row">
                        <Field
                            onChange={userSet}
                            value={user.birthDate}
                            name='birthDate'
                            className="account-settings-extra__birth"
                            label="Дата рождения"
                        />
                    </div>
                    <div className="account-settings-extra__row">
                        <Field value={user.country} onChange={userSet} name='country' className="account-settings-extra__country" label="Страна" />
                        <Field value={user.city} onChange={userSet} name='city' className="account-settings-extra__city" label="Город" />
                    </div>
                </section>

                <section className="account-settings__section account-settings-payment">
                    <h3 className="account-settings__section-title"> Платежная информация </h3>

                    <div className="account-settings-payment__row">
                        {/* <Field label="Bitcoin" /> */}
                        {/* <Field label="Advanced Cash" /> */}
                    </div>
                    <div className="account-settings-payment__row">
                        <Field onChange={userSet} value={user.ethWithdraw} name='ethWithdraw' label="Etherium" />
                        <Field onChange={userSet} value={user.zcashWithdraw} name='zcashWithdraw' label="Zec" />
                    </div>
                    <div className="account-settings-payment__row">
                        <Field onChange={userSet} name='cardNumber' value={user.cardNumber} label="Номер карты" />
                    </div>
                </section>
                <div className='account-settings__data-form-buttons flex-row' >
                    <Button  className='account-settings__data-form-save' onClick={profile.save} >Сохранить</Button>
                    {/* <Button onClick={profile.get} >Сбросить</Button> */}
                </div>
                
            </Card>
        );
    };

    /**
     * Renders account settings form
     */
    public render() {
        const { SideBar, DataForm, props } = this;

        if (!props.profile.isLoaded) return null;

        return (
            <div className="account-settings">
                <h1 className="main-page__content-title">Настройки</h1>
                <div className="account-settings__content">
                    {DataForm()}
                    {SideBar()}
                </div>
            </div>
        );
    }
}
