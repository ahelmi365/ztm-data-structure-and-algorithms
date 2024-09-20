console.log("hi arrays!");

const strings = ["a", "b", "c", "d"];
console.log({ strings }); // [ 'a', 'b', 'c', 'd' ]
// operations on array

// push: Appends new elements to the end of an array,
// and returns the new length of the array.
const push = strings.push("e");
console.log({ push }); // 5
console.log({ strings }); // [ 'a', 'b', 'c', 'd', 'e' ]

// pop:Removes the last element from an array and returns it.
// If the array is empty, undefined is returned and the array is not modified.
const pop = strings.pop();
console.log({ pop }); // "e"
console.log({ strings }); //  [ 'a', 'b', 'c', 'd' ]

// unshift: Inserts new elements at the start of an array,
// and returns the new length of the array.
const unshift = strings.unshift("x");
console.log({ unshift }); // 5
console.log({ strings }); // [ 'x', 'a', 'b', 'c', 'd' ]

// shift: Removes the first item from an array and returns it.
// if the array is empty, undefiend is returned and the array is not modified
const shift = strings.shift();
console.log({ shift }); // "x"
console.log({ strings }); // [ 'a', 'b', 'c', 'd' ]

// splice: to inserts new elements in their place, returning the deleted elements.
const spliceInsert = strings.splice(2, 0, "Ali", "Helmi");
console.log({ spliceInsert }); // []
console.log({ strings }); // [ 'a', 'b', 'Ali', 'Helmi', 'c', 'd' ]

// splice: to Removes elements from an array and, if necessary,
const spliceDelete = strings.splice(2, 2);
console.log({ spliceDelete }); // ["Ali", "Helmi"]
console.log({ strings }); // [ 'a', 'b', 'c', 'd' ]
