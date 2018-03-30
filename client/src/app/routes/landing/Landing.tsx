import { Route, Switch, Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { ILandingProps } from './Props';
import { About } from './about/About';
import { Reviews } from './reviews/Reviews';
import { Questions } from './questions/Questions';
import { Referal } from './referal/Referal';
import { Home } from './home/Home';

export class Landing extends React.Component<ILandingProps> {

    /**
     * Header block
     */
    public Header = () => {
        return (
            <header className='landing-header '>
                <div className='landing__container landing__container-flex'>
                    <Link to='/' className='landing-logo'>Mining LOGO</Link>
                    <nav className='landing-header__navigation'>
                        <ul className='landing-header__navigation-list'>
                            <li className='landing-header__navigation-item'><Link to='/' className='landing-header__navigation-link'>Головна</Link></li>
                            <li className='landing-header__navigation-item'><Link to='/about' className='landing-header__navigation-link'>Про проект</Link></li>
                            <li className='landing-header__navigation-item'><Link to='/reviews' className='landing-header__navigation-link'>Історія успіху</Link></li>
                            <li className='landing-header__navigation-item'><Link to='/referal' className='landing-header__navigation-link'>Реферальна програма</Link></li>
                            <li className='landing-header__navigation-item'><Link to='/' className='landing-header__navigation-link'>Новини</Link></li>
                            <li className='landing-header__navigation-item'><Link to='/faq' className='landing-header__navigation-link'>FAQ</Link></li>
                        </ul>
                    </nav>
                    <div className='landing-header__buttons'>
                        <Link to='/lk/auth/login' className='landing-button landing-button--empty'>Вхід</Link>
                        <Link to='/lk/auth/registration' className='landing-button'>Реєстрація</Link>
                    </div>
                </div>
            </header>
        );
    }

    /**
     * Footer block
     */
    public Footer = () => {
        return (
            <footer className='landing-header landing-header--footer'>
                <div className='landing__container landing__container-flex'>
                    <a href='#' className='landing-logo'>Mining LOGO</a>
                    <nav className='landing-header__navigation'>
                        <ul className='landing-header__navigation-list'>
                            <li className='landing-header__navigation-item'><Link to='/' className='landing-header__navigation-link'>Головна</Link></li>
                            <li className='landing-header__navigation-item'><Link to='/about' className='landing-header__navigation-link'>Про проект</Link></li>
                            <li className='landing-header__navigation-item'><Link to='/reviews' className='landing-header__navigation-link'>Історія успіху</Link></li>
                            <li className='landing-header__navigation-item'><Link to='/referal' className='landing-header__navigation-link'>Реферальна програма</Link></li>
                            <li className='landing-header__navigation-item'><Link to='/' className='landing-header__navigation-link'>Новини</Link></li>
                            <li className='landing-header__navigation-item'><Link to='/faq' className='landing-header__navigation-link'>FAQ</Link></li>
                        </ul>
                    </nav>
                    <div className='landing-header__buttons'>
                        <Link to='/lk/auth/login'  className='landing-button landing-button--empty'>Вхід</Link>
                        <Link to='/lk/auth/registration' className='landing-button'>Реєстрація</Link>
                    </div>
                </div>
            </footer>
        );
    }

    public render() {
        const { Header, Footer } = this;
        return (
            <div className='landing'>
                <Header />
                <Switch>
                    <Route component={Reviews} path='/reviews' />
					<Route component={Questions} path='/faq' />
					<Route component={Referal} path='/referal' />
					<Route component={About} path='/about' />
                    <Route component={Home} path='/' />
                </Switch>
                <Footer />
            </div>
        )
    }
}