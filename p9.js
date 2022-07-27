console.log("Welcome to tutorial 9");

//FOR LOOPS

for (let i = 0; i < 100; i++) {
    console.log(i);
}

//WHILE LOOPS

let j = 0;
while (j < 100) {
    console.log(j);
    j += 1;
}

//DO WHILE LOOPS

let k = 0;
do {
    console.log(k + 1);
    k += 1;
} while (k < 10)

//BREAK AND CONTINUE

let p = 0;
do {
    if (p == 5) {
        break;
    }
    console.log(p + 1);
    p += 1;
} while (p < 10);

//CONTINUE
//whenever you want oto skip any value to b printed use continue

let m = 0;
do {
    if (m == 5) {
        break;
    }
    console.log(m + 1);
    m += 1;
} while (m < 10);

let arr = [2, 5, 6, 4, 2, 3];
arr.forEach(function(element) {
    console.log(element);
})

let obj = {
    name: 'Rohan Das',
    age: 78,
    type: "Dangerous Programmer",
    os: "Ubuntu",
}

for (let key in obj) {
    console.log(` the ${key} of object is ${obj[key]}`)
}

//if you want to access full array with index number as well.

arr.forEach(function(element, index, array) {
    console.log(element, index, array);
});