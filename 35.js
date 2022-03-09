var swami = ["Swaminarayan", 2022, "Purushottam Narayan"];
// console.log(swami[0]); want to print perticular value

var [name, year, actual] = swami; // array destructuring
console.log(name);
console.log(year);
console.log(actual);

var narayan = {
    proof: "chinh",
    counter: 16,
    author: "Vyash"
}

// console.log(narayan.proof); want to print perticular value
var {proof, counter, author} = narayan; // object destructuring
console.log(counter);

var {proof, precount, author} = narayan; // make sure in object key is same as variable 
// otherwise print undefined
// here couter converts to precount and see
console.log(precount);

// also keep in mind there is {} breakets in object destructuring
// and [] in array des..