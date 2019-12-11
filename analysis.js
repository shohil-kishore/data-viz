const fs = require("fs");

var data = fs.readFileSync("./count-with-auckland.json");
var json = JSON.parse(data);
var len = Object.keys(json.results).length;

var resultsArr = [];
for (let i = 0; i < len; i++) {
  resultsArr.push(json.results[i].count);
}

var dateArr = [];
for (let i = 0; i < len; i++) {
  dateArr.push(json.results[i].timePeriod);
}

console.log(resultsArr);
console.log(dateArr);
