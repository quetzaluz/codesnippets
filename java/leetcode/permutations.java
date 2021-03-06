class Solution {
    public List<List<Integer>> permute(int[] num) {
        ArrayList<List<Integer>> result = new ArrayList<List<Integer>>();
        permute(num, 0, result);
        return result;
    }
    
    void permute(int[] num, int start, List<List<Integer>> result) {
        if (start >= num.length) {
            List<Integer> item = convertArrayToList(num);
            result.add(item);
        }
        
        for (int i = start; i < num.length; i++) {
            swap(num, start, i);
            permute(num, start + 1, result);
            swap(num, start, i);
        }
    }
    
    private List<Integer> convertArrayToList(int[] num) {
        ArrayList<Integer> lst = new ArrayList<Integer>();
        for (int i = 0; i < num.length; i++) { lst.add(num[i]); }
        return lst;
    }
    
    private void swap(int[] a, int i, int j) {
        int temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
}
