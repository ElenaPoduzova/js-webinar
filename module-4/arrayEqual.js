/**
 * It determines, whether the given two arrays
 * are equal, by considering the number of elements,
 * those order and value, in all levels.
 * 
 * It prints out a message in case of any
 * difference in any array, using console.warn!
 * 
 * @param {Array} first The first array
 * @param {Array} second The second array
 * @returns {boolean} true if the two arrays are equal,
 *                    false otherwise
 */

 function checkEqual(array1, array2) {
    if ((!Array.isArray(array1)) || (!Array.isArray(array2))) {
        console.warn('Argumemts should be arrays');
        return false;
    }

    if (Object.keys(array1).length !== Object.keys(array2).length) {
        console.warn(`Arrays should have the same length! First array is ${Object.keys(array1).length}, second array is ${Object.keys(array2).length}`);
        return false;
    }

    return array1.every((el, index) => {
        if (Array.isArray(el) && (Array.isArray(array2[index]))) {
            return checkEqual(el, array2[index])
        }
        if (el !== array2[index])
            console.warn(`Element ${index} is different: ${el} != ${array2[index]}`);
        return (el === array2[index]);
    })
}

module.exports = checkEqual;