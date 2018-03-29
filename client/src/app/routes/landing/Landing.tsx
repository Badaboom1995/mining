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
                    <Link to='/landing' className='landing-logo'>Mining LOGO</Link>
                    <nav className='landing-header__navigation'>
                        <ul className='landing-header__navigation-list'>
                            <li className='landing-header__navigation-item'><Link to='/landing' className='landing-header__navigation-link'>Головна</Link></li>
                            <li className='landing-header__navigation-item'><Link to='/landing/about' className='landing-header__navigation-link'>Про проект</Link></li>
                            <li className='landing-header__navigation-item'><Link to='/landing/reviews' className='landing-header__navigation-link'>Історія успіху</Link></li>
                            <li className='landing-header__navigation-item'><Link to='/landing/referal' className='landing-header__navigation-link'>Реферальна програма</Link></li>
                            <li className='landing-header__navigation-item'><Link to='/' className='landing-header__navigation-link'>Новини</Link></li>
                            <li className='landing-header__navigation-item'><Link to='/landing/faq' className='landing-header__navigation-link'>FAQ</Link></li>
                        </ul>
                    </nav>
                    <div className='landing-header__buttons'>
                        <Link to='/auth/login' className='landing-button landing-button--empty'>Вхід</Link>
                        <Link to='/auth/registration' className='landing-button'>Реєстрація</Link>
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
                            <li className='landing-header__navigation-item'><Link to='/landing' className='landing-header__navigation-link'>Головна</Link></li>
                            <li className='landing-header__navigation-item'><Link to='/landing/about' className='landing-header__navigation-link'>Про проект</Link></li>
                            <li className='landing-header__navigation-item'><Link to='/landing/reviews' className='landing-header__navigation-link'>Історія успіху</Link></li>
                            <li className='landing-header__navigation-item'><Link to='/landing/referal' className='landing-header__navigation-link'>Реферальна програма</Link></li>
                            <li className='landing-header__navigation-item'><Link to='/' className='landing-header__navigation-link'>Новини</Link></li>
                            <li className='landing-header__navigation-item'><Link to='/landing/faq' className='landing-header__navigation-link'>FAQ</Link></li>
                        </ul>
                    </nav>
                    <div className='landing-header__buttons'>
                        <Link to='/auth/login'  className='landing-button landing-button--empty'>Вхід</Link>
                        <Link to='/auth/registration' className='landing-button'>Реєстрація</Link>
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
                    <Route component={Reviews} path='/landing/reviews' />
					<Route component={Questions} path='/landing/faq' />
					<Route component={Referal} path='/landing/referal' />
					<Route component={About} path='/landing/about' />
                    <Route component={Home} path='/landing' />
                </Switch>
                <Footer />
            </div>
        )
    }
}