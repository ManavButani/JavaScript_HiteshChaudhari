// ...args spread opperation

var ReturenedminValue = Math.min(2, 4, 55, 8952, 0, -52742);
console.log(ReturenedminValue);

var myObj = {u:32};
Object.assign(myObj, {a:1, b:2, c:3}, {j:25}, {z:26, x:27, l:45});
console.log(myObj);

// note that emty object alwaus should be assignt to the variabel otherwise cause an error
var myObj1={};  // instead of var myObj1; cause an error
Object.assign(myObj1, {a:1, b:2, c:3}, {j:25}, {z:26, x:27, l:45});
console.log(myObj1); 

function sumOne(a, b) {
    return a+b;
}

console.log(sumOne(5,6));

var myA = [7, 8];
console.log(sumOne(myA));
console.log(sumOne(...myA));

var myB = [7, 8, 66, 77 ,1];
console.log(sumOne(...myA)); // reason explained below

console.log(sumOne(5,6, 1,7)); // 11 bcz sumOne() contains only two parameters 
//thats why after two all arguments given is ignored

function manav(...swamiNarayan) {
    console.log(swamiNarayan);

    var element = 0;
    for (let index = 0; index < swamiNarayan.length; index++) {
        var element = element+ swamiNarayan[index];
    }
    return element;
}

console.log(manav(5,5,5,5,5));

function krenil(c,d,...swamiNarayan) {
    console.log(swamiNarayan);
    let multi = c*d;
    var sum = 0;
    for (let index = 0; index < swamiNarayan.length; index++) {
        var sum = sum+ swamiNarayan[index];
    }
    return [sum,multi];
}

console.log(krenil(5,5,5,5,5));