
/*
Given an object that has other objects nested inside of it, write a
function that takes that object and returns an array of all values
that are at a depth of 2.

BONUS:
Given a nested object with any number of levels, write a function
"anyDepthBonus" that returns an array of the key values contained
at any chosen level. The second argument of "anyDepthBonus" will be
a number designating the chosen level.

Hint: you may want to use recursion.
*/

const nestedObj = {
    a: "aloe",
    b: {
        c: "cello",
        d: "dello"
    },
    e: {
        f: "fellow",
        g: {
            h: "hello",
            i: "io"
        },
        j: "jello"
    }
}

const depthOfTwo = (obj) => {
    const res = [];

    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null){
            for (let subKey in obj[key]) {
                res.push (obj[key][subKey]);
            }
        }
    }
    return res;
}

const anyDepthBonus = (obj, depth, currentDepth = 1) => {
    if (currentDepth === depth) {
        // Flatten nested arrays and filter non-object values
        return Object.values(obj)
            .flat()
            .filter(value => typeof value !== 'object' || value === null);
    }

    let res = [];
 for (let key in obj) { if (typeof obj[key] === 'object' && obj[key] !== null) {
    const subResult = anyDepthBonus(obj[key], depth, currentDepth + 1);
     if (subResult.length > 0) { res = subResult; } } }
      return res; };

// console.log(depthOfTwo(nestedObj));               // ["cello", "dello", "fellow", { h: "hello", i: "io" }, "jello"]
 console.log(anyDepthBonus(nestedObj, 3))          // ["hello", "io"]

/*** Do not change the code below this line ***/
module.exports = { depthOfTwo, anyDepthBonus }
