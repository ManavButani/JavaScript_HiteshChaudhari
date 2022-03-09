const arr=[
    "swaminarayan",
    "sahajanad",
    "Ghanshayam",
    "Krishna",
    50,
    "Hari",
    2,
    "Harikrishna",
    "Nilkanth",
    "Shreeji"
]

//infinite loop
// let i=0;
// while(i<arr.length){
//     console.log(arr[i]);
// }

//let keyword does not allow to use intialize that variable more than one time it will generate an error
var i=0;
while(i<arr.length){
    i++;
    console.log(arr[i]);
}

console.log("**********");
var i=0;
while(i<arr.length){
    console.log(arr[i]);
    i++;
}

console.log("**********");
var i=20;
do{
console.log(arr[i]);
}while(i<arr.length)

