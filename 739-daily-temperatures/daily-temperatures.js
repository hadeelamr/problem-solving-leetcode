/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    const result = new Array(n).fill(0);
    const stack = [];

    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
            stack.pop();
        }

        if (stack.length) {
            result[i] = stack[stack.length - 1] - i;
        }

        stack.push(i);
    }
    return result;
};