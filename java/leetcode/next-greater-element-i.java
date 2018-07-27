class Solution {
    // util for checking presense of integer in array
    public boolean arrContains(int search, int[] a) {
        for (int i = 0; i < a.length; i++) {
            if (a[i] == search) {
                return true;
            }
        }
        return false;
    }
    
    // util for mapping nums1 to nextGreater set
    public int[] toIntArr(int[] nums1, HashMap<Integer, Integer> nextGreater) {
        int[] ret = new int[nums1.length];
        for (int i = 0; i < nums1.length; i++) {
            ret[i] = (int)nextGreater.get(nums1[i]);
        }
        return ret;
    }
    
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        HashMap<Integer, Integer> nextGreater = new HashMap();
        for (int n : nums2) {
            for (int k : nextGreater.keySet()) {
                if (nextGreater.get(k) == -1 && k < n) {
                    nextGreater.put(k, n);
                }
            }
            if (arrContains(n, nums1) && !nextGreater.containsKey(n)) {
                nextGreater.put(n, -1);
            }
        }

        return toIntArr(nums1, nextGreater);
    }
}
