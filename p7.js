console.log('welcome in tut 7');
const marks = [75, 35, 45, 95, 85, 86];
const fruits = ['orange', 'apple', 'mango'];

const mixed = ['str', 89, [3, 5]];

const arr = new Array(23, 123, 21, 'orange');
console.log(arr);
console.log(mixed);
console.log(fruits);

//IS ARRAY or NOT AN ARRAY
//with help of these array function we can if it is an array or not an array
 console.log(Array.isArray(fruits));
console.log(Array.isArray('dfdfef'));
arr[0] = 'harry';
let arrelement[0] = arr[0];
console.log('element :', arrelement);
console.log(arr)

//Index Number of an array
//with help of these you can find index of any value which is inside the array
let value = marks.indexOf(95);
console.log(value);

//MUTATING OR MODIFYING ARRAYS

//Push newly defined array to last
marks.push(3564);

//Push newly defined array to first
marks.unshift(4520);

//these function would remove the last element of existing array
marks.pop();

//these function would remove the first element of existing array
marks.shift()

//Remove Selected elements from An Array
//means if u kept 0,2 it means start from zero and remove 2 elements from it
marks.splice(0,2)

//REVERSING AN ARRAY
//it would completely reverse the element of the array
marks.reverse();

//CONCAT
marks.concat(new one which u want to concat);

let myobj = {
    name: 'harry',
    channel: 'codeWithHarry',
    isActive: true,
    marks: [1, 5, 3, 6]
}

console.log(myobj);
console.log(myobj['channel']);
console.log(myobj).channel;
