class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        HashMap<Integer, HashMap> seen = new HashMap();
        for (int i = 0; i < nums1.length; i++) {
            if (seen.containsKey(nums1[i])) {
                HashMap<String, Integer> entry = seen.get(nums1[i]);
                int newValue = entry.get("ct1") + 1;
                seen.get(nums1[i]).put("ct1", newValue);
            } else {
                HashMap<String, Integer> entry = new HashMap();
                entry.put("ct1", 1);
                entry.put("ct2", 0);
                seen.put(nums1[i], entry);
            }
        }
        for (int i = 0; i < nums2.length; i++) {
            if (seen.containsKey(nums2[i])) {
                HashMap<String, Integer> entry = seen.get(nums2[i]);
                int newValue = entry.get("ct2") + 1;
                seen.get(nums2[i]).put("ct2", newValue);
            } else {
                HashMap<String, Integer> entry = new HashMap();
                entry.put("ct1", 0);
                entry.put("ct2", 1);
                seen.put(nums2[i], entry);
            }
        }

        int[] newArr = new int[Math.max(nums1.length, nums2.length)];
        int totalSize = 0;
        for (Integer key : seen.keySet()) {
            HashMap<String, Integer> entry = seen.get(key);
            int intersectingSize = Math.min((int)entry.get("ct1"), (int)entry.get("ct2"));
            System.out.println(intersectingSize);
            for (int j = totalSize; j < totalSize + intersectingSize; j++) {
                newArr[j] = key;
            }
            totalSize += intersectingSize;
        }
        return Arrays.copyOfRange(newArr, 0, totalSize);
    }
}
