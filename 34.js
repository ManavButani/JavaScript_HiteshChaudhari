var swami = new Map();

swami.set(1,"Ghanshyam");
swami.set(2,"Krishna");
swami.set(3,"Hari");
swami.set(4,"Swaminarayan");
swami.set(5,"Nilkanth");

console.log(swami);

swami.delete(3); //delete method always works on key not on values
console.log(swami);

//Below will return values beacuse forEach order of fethching is value,key order
console.log("=====");
swami.forEach((k)=>(console.log(`key is ${k}`))); 

console.log("--------");
swami.forEach((k,v)=>(console.log(`value is : ${k},${v} is key`)));

// for loop fetch the data in key, value order
// unlike forEach

for(let key of swami.keys()){
    console.log(key);
}

for(let value of swami.values()){
    console.log(value);
}

for(let [key,value] of swami){
    console.log(`${key} : ${value}`);
}