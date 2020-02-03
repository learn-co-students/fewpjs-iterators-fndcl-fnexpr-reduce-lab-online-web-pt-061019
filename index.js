const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// let totalBatteries = function(batteryBatches) {
//   return batteryBatches.reduce(function(total, battery) {
//     return battry + total
//   })
// }

let totalBatteries = batteryBatches.reduce(function(total, battery) {return total += battery})


// let doubledAndSummed = [1, 2, 3].reduce(function(total, element){ return element * 2 + total}, 0)
