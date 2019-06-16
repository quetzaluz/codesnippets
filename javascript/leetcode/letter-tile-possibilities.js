/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    const isUniquePermutation = (perm, result) => {
        for (let res of result) {
            if (perm === res) return false;
        }
        return true;
    };

    const per = (selected, pool) => {
        if (selected && isUniquePermutation(selected, result)) {
            result.push(selected)
        }
        for (let i = 0; i < pool.length; i++) {
            const l = pool[i];
            selected += l;
            per(selected, pool.slice(0, i).concat(pool.slice(i + 1)));
            selected = selected.substr(0, selected.length - 1);
        }
    }
    
    let result = [];
    let pool = tiles.split('');
    let selected = '';
    per(selected, pool);
    return result.length;
};
