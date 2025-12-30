// 2704. To Be Or Not To Be

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe : function(x){
            
            if (val === x) {
                return true
            } else if (val !== x){
                return (`"error" : "not equal"`)
            }
        },
        notToBe : function(x){
            
            if (val !== x) {
                return true
            } else {
                console.error("Not Equal")
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */