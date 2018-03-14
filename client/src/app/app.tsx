import { Root } from "./routes/Root";
import { Provider } from 'mobx-react';
import { routingService } from './services/routing/routing';
import { Router } from 'react-router-dom';
import { useStrict } from 'mobx';
import { settingsService } from './services/settings/settings';
import { uiService } from './services/ui/ui';
import { accountService } from './services/account/account';
import { authService } from './services/auth/auth';
import './styles/main.scss';

// restrict store state changes out of @actions
// useStrict(true);







ReactDOM.render(
	<Provider
		routing={routingService}
		settings={settingsService}
		account={accountService}
		ui={uiService}
		auth={authService}
	>
		<Router history={routingService.history} >
			<Root />
		</Router>
	</Provider>,
	document.getElementById('root')
);




