class Solution {
    public int singleNonDuplicate(int[] nums) {
        int previousVal = nums[0];
        int foundElem = previousVal;
            for (int i = 0; i < nums.length; i++) {
                if (previousVal != nums[i] && (i + 1 == nums.length || nums[i] != nums[i + 1])) {
                    foundElem = nums[i];
                    break;
		}
                previousVal = nums[i];
        }
        return foundElem;
    }
}

