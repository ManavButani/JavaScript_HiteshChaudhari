var isEven = (n) => {
    // if (n%2 ===0) {
    //     return true;
    // }
    // return false;
    return n%2===0;
};

console.log(isEven(2));
var nama=[2,2,4,6].every((e)=>(e%2 !== 0))
console.log(nama);