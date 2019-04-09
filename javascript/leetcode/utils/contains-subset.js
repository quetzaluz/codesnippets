/* util method for seeing if a list of lists contains a given list
 * subsets: full list of subsets
 * thisSubset: single subset in list
 */

var containsSubset = function(subsets, thisSubset) {
    for (subset of subsets) {
        let noDiff = subset.length === thisSubset.length;
        let i = 0;
        while (noDiff && i < subset.length) {
            noDiff = noDiff && thisSubset[i] == subset[i];
            i++;
        }
        if (noDiff) return true;
    }
    return false;
}
