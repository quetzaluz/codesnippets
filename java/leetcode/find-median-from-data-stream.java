class MedianFinder {
    ArrayList<Integer> resultList = new ArrayList();
    public MedianFinder() {
        
    }
    
    public void addNum(int num) {
        for (int i = 0; i < resultList.size(); i++) {
            if (num < resultList.get(i)) {
                resultList.add(i, num);
                return;
            }
        }
        resultList.add(num);
    }
    
    public double findMedian() {
        int midPoint1 = 0;
        int midPoint2 = -1;
        if (resultList.size() % 2 == 1) {
            midPoint1 = (resultList.size() / 2);
        } else {
            midPoint1 = (int)(resultList.size() / 2 - 1);
            midPoint2 = (int)(resultList.size() / 2);
        }  
        return midPoint2 == -1 ? resultList.get(midPoint1) : (resultList.get(midPoint1) + resultList.get(midPoint2)) / 2.0; 
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder obj = new MedianFinder();
 * obj.addNum(num);
 * double param_2 = obj.findMedian();
 */