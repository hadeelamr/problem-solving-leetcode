/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let k = 0;
    let repeated = word;

    while (sequence.includes(repeated)) {
        k++;
        repeated += word; // نكرر الكلمة مرة إضافية
    }

    return k;
};