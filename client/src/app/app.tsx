import { Root } from "./routes/Root";
import { Provider } from 'mobx-react';
import { Router } from 'react-router-dom';
import { useStrict } from 'mobx';
import './styles/main.scss';
import { services } from './services/index';

// restrict store state changes out of @actions
// useStrict(true);


const render = (Component, services) => {
	ReactDOM.render(
		<Provider
			{...services}
		>
			<Router history={services.routing.history} >
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

