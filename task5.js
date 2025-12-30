// 2619. Array Prototype Last

/**
 * @return {null|boolean|number|string|Array|Object}
 */
const arr = [1, 2, 3];
Array.prototype.last = function() {
    if ( arr.length > 0){
        console.log(arr[arr.length - 1])
    } else if (arr.length === 0) {
        return -1
    }
};
 arr.last(); // 3