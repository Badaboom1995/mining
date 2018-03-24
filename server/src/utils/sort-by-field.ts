/***
 *
 * @param {T[]} list
 * @param {string} name
 * @param {"asc" | "desc"} sort
 * @returns {T[]}
 */
export const sortByField  = <T>(list : T[], name : string , sort : 'asc' | 'desc' = 'asc') : T[] => {
    return list.sort((first, second) => {
        const a = sort == 'asc' ? second[name] : first[name] ;
        const b = sort == 'asc' ? first[name] : second[name] ;
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });
};

