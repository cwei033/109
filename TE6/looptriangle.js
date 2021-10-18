//print triangle of # using loop
for (let i = "#"; i.length < 8; i += "#") {
  console.log(i);
}

//or
let mark = '';
for (let i = 0; i <= 6; i++) { //run mark+=# 7 times
  mark += "#";
  console.log(mark); //console.log has to be inside the loop otherwise the console will only show the last result i.e. 7#'s'
}

// const f = function(x, y) {
//   if (x > y) {
//     console.log(y);
//   } else {
//     console.log(x);
//   }
// }
//
// f(30, 5);
