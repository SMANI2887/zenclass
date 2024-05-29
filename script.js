//  convert to (string -> array)

let arr = ["1 2 3 4 5"];

let a = arr[0].split(" ").map(Number);

console.log(a)

// Conter to (array -> string)

let b = [1,2,3,4,5];

let str = b.join(' ')

console.log(str)
