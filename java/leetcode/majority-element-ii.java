class Solution {
    public List<Integer> majorityElement(int[] nums) {
      HashMap<Integer, Integer> seen = new HashMap<Integer, Integer>();
      List<Integer> list = new ArrayList<Integer>();
      if (nums.length == 1) {
          list.add(nums[0]);
          return list;
      }
      int majorityCount = nums.length / 3;
      for (int i = 0; i < nums.length; i++) {
          seen.put(nums[i], seen.getOrDefault(nums[i], 0) + 1);
      }

      for (int i : seen.keySet()) {
        if (seen.get(i) > majorityCount) {
          list.add(i);
        }
      }
      return list;
    }
}
