//undefined
console.log(name);

var name = "Manav";

//error with let
// console.log(swami);

let swami = "Ramanand Swami";

if(true){
    var raja = "Maharaj";
    console.log(raja);
}

console.log(raja); // scope does't matter for var that's why this gonna work

if(true){
    let kano = "mOhan";
    console.log(kano);
}
// console.log(kano); // scope matters for let and let variable remove automatically after being used

// so if  you can see in automatic for loop syntax there is let present and not a var
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// if we are using var then if we want to use index name of variable then it will couse and disaster