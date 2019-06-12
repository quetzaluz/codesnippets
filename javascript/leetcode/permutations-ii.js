/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = (nums) => {
    const isUniquePermutation = (perm, result) => {
        for (let res of result) {
            let isSame = true;
            for (let i = 0; i <  res.length; i++) {
                isSame = isSame && perm[i] == res[i];
                if (!isSame) break;
            }
            if (isSame) return false;
        }
        return true;
    };
    
    const swap = (a, i, j) => {
      const temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    };

    const permute = (nums, start, result) => {
        if (start >= nums.length && isUniquePermutation(nums, result)) {
            result.push(nums.slice());
        }
        for (let i = start; i < nums.length; i++) {
            swap(nums, start, i);
            permute(nums, start + 1, result);
            swap(nums, start, i);
        }
    };
    
    let result = [];
    permute(nums, 0, result);
    return result;
};
