// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function (driver) {return driver.revenue > revenue});
}

function driverNamesWithRevenueOver(drivers, revenue){
  let temp = drivers.filter(function (driver) {return driver.revenue > revenue});
  return temp.map(function (driver){ return driver.name})
}

function exactMatch(drivers, obj){
  obj_key = Object.keys(obj)[0]
  obj_value = obj[obj_key]
  return drivers.filter(function (driver) {return driver[obj_key] === obj_value})
}

function exactMatchToList(drivers, obj){
  obj_key = Object.keys(obj)[0]
  obj_value = obj[obj_key]
  let temp = drivers.filter(function (driver) {return driver[obj_key] === obj_value})
  return temp.map(function (driver){return driver.name})

}
// function nameToAttributes(drivers){
//   return drivers.map(function (driver){
//     const first = driver.split(' ')[0];
//     const last = driver.split(' ')[1];
//     return { firstName: first, lastName: last };
//   });
// }
//
// function findMatching(drivers, string){
//   return drivers.filter(function (driver) {return driver.toLowerCase() === string.toLowerCase()})
// }
