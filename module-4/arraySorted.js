/**
 * It determines, whether the given array is sorted in
 * alphabetically ascending order.
 * 
 * It ignores
 *  - case of the character
 *  - given special characters (nothing by default)
 *  - whitespaces
 * 
 * @param {string[]} items the subject items
 * @param {string} ignore characters to ignore
 * @returns {boolean} true if the array is properly sorted,
 *                    false otherwise
 */

 function sortArray(array, specChar) {
    return array.every((el, index, arr) => {
        if (arr[index + 1] == null)
            return true;
        if (Array.isArray(el)) {
            return sortArray(el);
        }

        var val1 = el.toString().toLowerCase().replace(' ', '');
        var val2 = arr[index + 1].toString().toLowerCase().replace(' ', '');

        if (specChar != null) {
            var specCharArray = specChar.split('');
            specCharArray.forEach(ch => {
                console.log("ch: " + ch);
                var regex = new RegExp("\\"+ch, "g");
                val1 = val1.replace(regex, '');
                val2 = val2.replace(regex, '');
            });
        }
        return (val1 <= val2);
    })
}

module.exports = sortArray;