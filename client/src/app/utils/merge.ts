



/**
 * @param source 
 * @param target 
 */
export const merge = (source : object, target : object) => {
	Object.keys(source).map(key => target[key] = source[key]);
	return target;
}