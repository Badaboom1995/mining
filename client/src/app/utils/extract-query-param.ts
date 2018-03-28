



/**
 * Etracts query param from string
 * @param {string} [url=''] 
 * @param {string} param 
 * @returns 
 */
export const extractQueryParam = (url : string = '', param : string)  => {
	
	const reg = new RegExp(`${param}=([^#]+)`);
	const match = url.match(reg);
	if (match){
		const [ ,result] = match;
		return result;
	}
	return '';
}