//console.log("It works!")
//console.log(year, month, day);
var dateutils = require("./date");

var TEST = dateutils.currentDataTime();
var d = TEST.my_date
var t = TEST.my_time
console.log("Today is "+d+", the current time is "+t);

