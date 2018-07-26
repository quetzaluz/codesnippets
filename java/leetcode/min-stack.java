class MinStack {
    static int min;
    static ArrayList<Integer> collection;
    /** initialize your data structure here. */
    public MinStack() {
        min = Integer.MAX_VALUE;
        collection = new ArrayList<Integer>();
    }
    
    public void push(int x) {
        if (min > x) { min = x; }
        collection.add(x);
    }
    
    public void pop() {
        int result = collection.remove(collection.size() - 1);
        if (result == min) {
            min = Integer.MAX_VALUE;
            for (int i = 0; i < collection.size(); i++) {
                if (min > collection.get(i)) {min = collection.get(i);}
            }
        }
    }
    
    public int top() {
        return collection.get(collection.size() - 1);
    }
    
    public int getMin() {
        return min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(x);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */
 