/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    const rev = image.map((r)=> r.reverse().map((n)=> n===1 ? 0 : 1))

    return rev;
};