/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    return s.split("").sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0)).join("")===(t.split("").sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0))).join("")
};