/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    
    const maxCandies = Math.max(...candies);
    return candies.map((candyAmount) => candyAmount + extraCandies >= maxCandies);
    
};