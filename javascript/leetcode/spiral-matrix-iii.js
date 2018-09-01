/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var spiralMatrixIII = function(R, C, r0, c0) {
    var r = r0;
    var c = c0;
    var result = [[r, c]];
    var visits = 1;
    var steps = 1;
    while (visits < R * C) {
        // across to the right
        for (var i = 0; i < steps; i++) {
            c++;
            if (r < R && r >= 0 && c < C && c >= 0) {
                result.push([r, c]);
                visits++;
            }
        }
    
        // down
        for (var i = 0; i < steps; i++) {
            r++;
            if (r < R && r >= 0 && c < C && c >= 0) {
                result.push([r, c]);
                visits++;
            }
        }
        steps++;
        
        // across to the right
        for (var i = 0; i < steps; i++) {
            c--;
            if (r < R && r >= 0 && c < C && c >= 0) {
                result.push([r, c]);
                visits++;
            }
        }
        
        // up
        for (var i = 0; i < steps; i++) {
            r--;
            if (r < R && r >= 0 && c < C && c >= 0) {
                result.push([r, c]);
                visits++;
            }
        }
        steps++;
    }
    return result;
};
