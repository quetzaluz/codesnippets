/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var permute = function(nums) {
    let result = [];
    var per = function (selected, pool) {
        if (pool.length === 0) {
            result.push(selected.slice(0));
            return;
        }
        for (let i = 0; i < pool.length; i++) {
            const num = pool[i];
            selected.push(num);
            per(selected, pool.slice(0, i).concat(pool.slice(i + 1)));
            selected.pop();
        }
    }
    let pool = nums.slice(0);
    let selected = [];
    per(selected, pool);
    return result;
};
