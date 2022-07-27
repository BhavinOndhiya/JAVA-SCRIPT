console.log('we are at tut 6');
const name = 'Harry';
const greeting = 'Good Morning';
// console.log(greeting + ' ' + name);

let html;
html = "<h1> this is heading</h1>" + "<p> this is my paragraph</p>";

html = html.concat('this', 'str2');
console.log(html);
// console.log(length.html);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());

// //console.log(html[1]);
// console.log(html.indexOf('this'));
// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt('3'));
// //if it ends with str2 it return true else false
// console.log(html.endsWith('str2'));
// //if your code includes 'is' then output is true else false. 
// console.log(html.includes('is'));
// console.log(html.includes('gsaekjjfbakj'));
// //if you want first multiple words or last it can be given with the help of slice(x,y)

// console.log(html.slice(0, 5));
// console.log(html.slice(-4));

//in substring you cant get minus element instead you will be given full string
// console.log(html.substring(0, 5));
// console.log(html.substring(-4));

//SPLIT Function
//with help of these we can split our string into small array

// console.log(html.split('>'));
// console.log(html.split('>'));

//REPLACE FUNCTION
//It replaces the first occurence only

// console.log(html.replace('this', 'it'));


//Writing HTML inside the js script through these method.
let fruit1 = 'orange';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
        <h1> This is heading </h1>
        <p> you like ${fruit1} and ${fruit2}
        
`;
document.body.innerHTML = myHtml;