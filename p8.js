console.log('this is tutorial 8');
const age = 18;
const vari = 34;
const doesDrive = false;

//These case if i would convert 65 into string also then also it would return true and consider it as equal value
if (age == 19) {
    console.log("Age is 19");
} else if (age == 65) {
    console.log("Age is 65");
} else {
    console.log("Age is not 19");
}

//here to check type as well as value use '==='3 times equal sign
if (age === 19) {
    console.log("Age is 19");
} else if (age === 65) {
    console.log("Age is 65");
} else {
    console.log("Age is not 19");
}


//if we want to check both data type and values are not equal then syntax is  :'!=='
if (age != 19) {
    console.log("Age is 19");
}
if (age !== 65) {
    console.log("Age is 65");
} else {
    console.log("Age is not 19");
}

//For checking if the variable is  present or not inside the code

if (typeof vari !== 'undefined') {
    console.log('vari is defined');
} else {
    console.log('vari is not defined');
}


//AND , both condition should be true then and then only it would be true

if (doesDrive && age > 18) {
    console.log("You Can Drive")
} else {
    console.log("You Cannot Drive")
}

//OR if any is true rest of all are true 
if (doesDrive || age > 18) {
    console.log("You Can Drive")
} else {
    console.log("You Cannot Drive")
}


//TERNARY OPERATORS

console.log(age == 45 ? 'age is 45' : 'age is not 45');

//SWITCH CASE STATEMENT

switch (age) {
    case 18:
        console.log("you are 18");
        break; //break is useful that if one condition is performed then it should break and stop
    case 28:
        console.log("you are 28");
        break;
    case 38:
        console.log("you are 38");
        break;

    default:
        console.log("You are too small");
        break;

}