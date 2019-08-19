class Solution {
  public boolean isMonotonic(int[] A) {
    if (A.length == 1) return true;
    int d = 0;
    for (int i = 0; i < A.length - 1; i++) {
      if (d == 1) {
        if (A[i] > A[i+1]) return false;
      } else if (d == 2) {
        if (A[i] < A[i+1]) return false;
      } else { // initialize direction
        if (A[i] < A[i+1]) {
          d = 1;
        } else if (A[i] > A[i+1]) {
          d = 2;
        }
      }
    }
    return true;
  }
}
