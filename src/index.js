/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    // your implementation
    var result = 0;
    preferences.unshift(0);
    for (var i = 1; i < preferences.length; i++) {
        var k = preferences[i];
        var n = preferences[k];
        if (i == preferences[n]) {
            result++;
        }
    }
    var res = Math.floor(result / 3);
    return res;
};