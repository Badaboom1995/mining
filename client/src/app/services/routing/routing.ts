
import { createBrowserHistory, createHashHistory, History } from 'history';
import {autobind} from 'core-decorators';
import { observable, action } from 'mobx';





export class RoutingService {
	

	/**
	 * History instance
	 */
	public history : History = DEV ? createHashHistory() : createBrowserHistory();
	/**
	 * Push url to history
	 */
	@autobind
	public push (url : string) {
		this.history.push(url);
	}	


}



export const routingService = new RoutingService();