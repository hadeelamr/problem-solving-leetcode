/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
        const n = position.length;
        let cars = [];
    for (let i = 0; i < n; i++) {
        let time = (target - position[i]) / speed[i];
        cars.push([position[i], time]);
    }
    cars.sort((a, b) => b[0] - a[0]);

    let fleets = 0;
    let stack = [];

        for (let [pos, time] of cars) {
            if (stack.length === 0 || time > stack[stack.length - 1]) {
            stack.push(time);
            fleets++;
        }
        }
     return fleets;

};