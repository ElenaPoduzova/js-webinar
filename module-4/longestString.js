/**
 * It recieves an array of strings and returns
 * the first longest string from it.
 * Also in the alphabetically first in case of more.
 *
 * @param {Array.<string>} strings
 * @returns {string} longest string or empty string in other cases
 */

function longestString(array) {
    var longest = (acc, val) => {
        if (typeof(val) == "string") {
            return acc = (val.length > acc.length) ? val : ((val.length == acc.length) && (val < acc)) ? val : acc;
        }
        else
            return acc;
    };

    if (!Array.isArray(array))
        return '';

    return array.reduce(longest, '');
}

module.exports = longestString;