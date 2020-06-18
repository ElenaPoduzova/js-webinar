/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */
function toCamelCase(string) {
    var array = string.split('');
    var concat = (acc, val) => {

    }

    return array.reduce(concat)
 }

 module.exports = toCamelCase;