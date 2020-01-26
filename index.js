const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = batteryBatches.reduce(function(total, element){return element + total}, 0)


// arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])

// accumulator
// The accumulator accumulates callback's return values. It is the accumulated value previously returned in the last invocation of the callback—or initialValue, if it was supplied (see below).
// currentValue
// The current element being processed in the array.