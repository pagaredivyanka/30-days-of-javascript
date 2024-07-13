/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const n = init
    var obj = {
        increment(){
            return init += 1
        },
        decrement(){
            return init -= 1
        },
        reset(){
            return init = n
        }
    }
    return obj
}

