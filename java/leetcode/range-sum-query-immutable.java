class NumArray {
    private static int[] n;
    public NumArray(int[] nums) {
        n = nums;        
    }
    
    public int sumRange(int i, int j) {
        int result = 0;
        for (int k = i; k <= j; k++) {
            result += n[k];
        }
        return result;
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * int param_1 = obj.sumRange(i,j);
 */
