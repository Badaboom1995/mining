import { observable } from 'mobx';
import { merge } from '../../../utils/merge';




export class Miner {
	/**
	 * Miner display name
	 */
	@observable
	public name?: string = '';
	/**
	 * Miner video card
	 */
	@observable
	public video? : string = '';
	/**
	 * Miner price
	 */
	@observable
	public price? : string | number = '';
	/**
	 * Initialize with object
	 * @param source 
	 */
	public constructor(source : Miner = {}) {
		merge(source, this);
	}
}