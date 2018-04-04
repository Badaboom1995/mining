import { ApiModule } from "../lib/api-module/api-module";





export class MinerApi extends ApiModule {
	/**
	 * Get miner types list
	 */
	public getTypes = () => this.request('/admin/miner-types/list');
}