import { MenuItem } from "./models/menu-item";
import { observable } from 'mobx';







export class SettingsService {
	/**
	 * Main menu
	 */
	@observable
	public menu : MenuItem[] = [
		
	];


}


export const settingsService = new SettingsService();