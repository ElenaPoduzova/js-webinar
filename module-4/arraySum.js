/**
 * It recieves an array of strings, integers and
 * array like itself.
 * Return the summary of all integers in it on * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */

 function sumArray(array) {
    var sum = (acc, val) => {
        if (Array.isArray(val)) {
            return (acc + val.reduce(sum, 0));
        }
        else if (Number.isInteger(val)) {
            return acc + val;
        }
        else
            return acc;
    };

    if (!Array.isArray(array))
        return 0;

    return array.reduce(sum, 0);
}

module.exports = sumArray;