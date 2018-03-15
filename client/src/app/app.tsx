import { Root } from "./routes/Root";
import { Provider } from 'mobx-react';
import { routingService } from './services/routing/routing';
import { Router } from 'react-router-dom';
import { useStrict } from 'mobx';
import { uiService } from './services/ui/ui';
import { accountService } from './services/account/account';
import { authService } from './services/auth/auth';
import './styles/main.scss';
import { investmentService } from "./services/investment/investment";
import { services } from './services/index';

// restrict store state changes out of @actions
// useStrict(true);



const render = (Component, services) => {
	ReactDOM.render(
		<Provider
			{...services}
		>
			<Router history={routingService.history} >
				<Component />
			</Router>
		</Provider>,
		document.getElementById('root')
	);
}







render(Root, services);

if (module.hot) {
	module.hot.accept('./routes/Root', () => {
		const update = require('./routes/Root').Root;
		render(update, services);
	});

	module.hot.accept('./services/index.ts', () => {
		const update = require('./services/index').services; 
		const root = require('./routes/Root').Root;

		render(root, update);
	});

}

