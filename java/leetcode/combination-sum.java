class Solution {
    public List<List<Integer>> combinationSum(int[] c, int target) {
        List<List<Integer>> result = new ArrayList();
        if (target < 0) {
            return result;
        }
        if (target == 0) {
            List<Integer> emp = new ArrayList();
            result.add(emp);
            return result;
        }
        for (int i = 0; i < c.length; i++) {
            List<List<Integer>> partSum = combinationSum(Arrays.copyOfRange(c, i, c.length), target - c[i]);
            for (List<Integer> s : partSum) {
                List<Integer> newList = new ArrayList();
                newList.add(c[i]);
                newList.addAll(s);
                result.add(newList);
            };
        }
        return result;
    }
}
