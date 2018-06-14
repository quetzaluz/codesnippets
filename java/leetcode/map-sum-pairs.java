class MapSum {

    /** Initialize your data structure here. */
    HashMap<String, Integer> map;

    public MapSum() {
        map = new HashMap<String, Integer>();
    }
    
    public void insert(String key, int val) {
        map.put(key.toLowerCase(), val);
    }
    
    public int sum(String prefix) {
        int res = 0;
        String p = prefix.toLowerCase();
        String thisKey;
        Iterator keys = map.entrySet().iterator();
        while(keys.hasNext()) {
            Map.Entry<String, Integer> pair = (Map.Entry)keys.next();
            if (pair.getKey().indexOf(p) == 0) {
                res += pair.getValue();
            }
        }
        return res;
    }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * MapSum obj = new MapSum();
 * obj.insert(key,val);
 * int param_2 = obj.sum(prefix);
 */
 