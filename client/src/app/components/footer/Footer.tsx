import { IFooterProps } from "./Props";





export class Footer extends React.Component<IFooterProps> {
	/**
	 * render
	 */
	public render() {
		const { className, ...props} = this.props;
		return (
			<footer {...props} className={`main-footer ${className}`} >
				<div className='main-footer__copyright' >© The Mining Dream</div>
				<div className='main-footer__social' >
					<div className='main-footer-social-item' >
						<i className='icon-facebook' ></i>
					</div>
					<div className='main-footer-social-item' >
						<i className='icon-twitter' ></i>
					</div>
					<div className='main-footer-social-item' >
						<i className="icon-instagram"></i>
					</div>
					<div className='main-footer-social-item' >
						<i className="icon-telegram"></i>
					</div>
				</div>
				<div className='main-footer-lang' >
					<div className='main-footer-lang__item ' >RU</div>
					<div className='main-footer-lang__item main-footer-lang__item--active' >UA</div>
					<div className='main-footer-lang__item ' >ENG</div>
				</div>
			</footer>
		);
	}
}