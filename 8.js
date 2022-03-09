var manav = [22, 26, 55, 66, 87, 10];
var result = manav.filter((e)=>(e != 55));
var result1 = manav.filter((e)=>(e < 55));
var result2 = manav.filter((e)=>(e > 55));
console.log(result);
console.log(result1);
console.log(result2);

var krenil = Array(22, 10, 11, 15, 0, 1);
var java = krenil.fill("Sahajanad",1,3);
console.log(java);

var raja = ["manav", "krenil", "swami", "jago", "sakal", "sujit", "suresh", "ramesh"];
//console.log(raja.slice(1,3));
raja.splice(1,4,"Swaminarayan")
console.log(raja);
raja.splice(2,4,"krenil")
console.log(raja);