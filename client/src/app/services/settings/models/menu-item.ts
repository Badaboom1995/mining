import { observable } from 'mobx';
import { merge } from '../../../utils/merge';




export class MenuItem {

	/**
	 * Roles allowed to view route
	 */
	@observable
	public roles? : string[] = [];
	/**
	 * Link caption
	 */
	@observable
	public caption? : string = '';
	/**
	 * Url of menu item
	 */
	@observable
	public url? : string = '';
	/**
	 * Merge model with payload
	 */
	public constructor( payload : MenuItem ) {
		merge(payload, this);
	}


}	