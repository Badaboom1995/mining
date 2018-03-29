import { ITeamPartProps } from "./Props";
import { Link } from "react-router-dom";





export const TeamPart = ({} : ITeamPartProps) => (
	<div className="call-to-action">
		<div className="title">
			<h2 className="title__main-title">Станьте учасником команди</h2>
			<p className="title__subtitle">МЕРЕЖА СТАЄ ТІЛЬКИ БІЛЬШОЮ, НІ ХТО НЕ ДОЗВОЛИТЬ ЦІЙ ТЕХНОЛОГІЇ ПРОСТО ПЕРЕСТАТИ ІСНУВАТИ.</p>
		</div>
		<Link to='/auth/registration' className="landing-button landing-button--big">Почати</Link>
		<Link to='/auth/login' className="call-to-action__link">Увійдіть, якщо вже є акаунт</Link>
	</div>
);