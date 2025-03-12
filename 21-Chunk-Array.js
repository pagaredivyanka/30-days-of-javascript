/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */

/*
Using ->  _.chunk function

const _ = require("lodash")  // where _ is a variable we can replace it bya any thing  ex. abc
let arr = [1,2,3,4,5,6]

//making chunks of size 1
console.log(_.chunk(arr, 1))  // _ = abc

*/

var chunk = function(arr, size) {
    let result = []

    for(let i = 0; i < arr.length; i+= size) {
        result.push(arr.slice(i, i+ size))
    }
    return result
};
