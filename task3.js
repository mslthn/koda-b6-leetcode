// 344. Reverse String

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

temp = []
var reverseString = function(s) {
    for (let i = 0; i < s.length; i++) {
        temp [i]= s[s.length - 1 -i]
    }
    console.log(temp)
};