class Solution {
    public int[] intersection (int[] nums1, int[] nums2) {
        List<Integer> list = new ArrayList<Integer>();
        for (int i = 0; i < nums1.length; i++) {
            for (int j = 0; j < nums2.length; j++) {
                if (nums1[i] == nums2[j] && !list.contains(nums2[j])) {
                    list.add(nums2[j]);
                }
            }
        }
        int[] newArr = new int[list.size()];
        Iterator<Integer> iterator = list.iterator();
        for (int k = 0; k < newArr.length; k++) {
            newArr[k] = iterator.next().intValue();
        }
        return newArr; // cast to array
    }
}
