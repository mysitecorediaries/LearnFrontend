if (true) {
  var x = 1;
  let y = 2;
}
console.log(x); // 1  (var leaked out of the block)
console.log(y); // ReferenceError (let stayed inside the block)


console.log(city); // undefined
var city = "Pune";

console.log(code); // ReferenceError
let code = 404;
