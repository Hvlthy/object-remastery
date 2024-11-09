/*
Given a string, write a function "countLetters" that returns the most
common character within the sentence. If there are multiple characters
that appear the most, return the lexicographically smallest one
(e.g. if 'a' and 'b' are both the most common, return 'a' because it
is closest to the beginning of the alphabet). Be sure to exclude spaces
and punctuation.
*/

const countLetters = (str) => {
const cleanStr = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
const charCount = {};

for (let char of cleanStr) {
    charCount[char] = (charCount[char] || 0) + 1;
}
let maxCount = 0;
let mostCommonChar = '';
for (let char in charCount) {
    if (charCount[char] > maxCount ||
    (charCount[char] === maxCount && char < mostCommonChar)) {
        maxCount = charCount[char];
        mostCommonChar = char;
    }
}
return mostCommonChar;
}



// console.log(countLetters("The quick, brown fox jumped over the lazy dog.")); // e


/*** Do not change the code after this line ***/

module.exports = {
	countLetters,
};
