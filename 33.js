var name = `Swaminarayan's Brahamand`;
// why backticks , why template literals (``)
// var name = "Swaminarayanay\"ramayan"; bcz we have to use \ if we want to use " in a string
// aslo there is a same scenario with a '' (single quoatation)

var fullName = `${name} now presents`;
// in `` we can access variable with ${}

console.log(fullName);
console.log(fullName.charAt(0));
console.log(fullName.endsWith("?"));
console.log(fullName.includes('narayan\'s'));
console.log(fullName.toUpperCase());