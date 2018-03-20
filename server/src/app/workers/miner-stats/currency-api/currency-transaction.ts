




export interface ICurrencyTransaction {
	/**
	 * Transaction type
	 * @type {string}
	 * @memberof ICurrencyTransaction
	 */
	type : string;
	/**
	 * Transaction value
	 */
	value : number;	
	/**
	 * Transaction time
	 * @type {number}
	 * @memberof ICurrencyTransaction
	 */
	timestamp : number;
	/**
	 * Transaction index
	 * @type {number}
	 * @memberof ICurrencyTransaction
	 */
	index : number;
}