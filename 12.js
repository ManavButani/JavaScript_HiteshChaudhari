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

 // here for initialiazaion we used let,var keyword bur we can not use const
 for(let i=0;i<=arr.length;i++){
     if(typeof(arr[i])==="string"){
         console.log(arr[i]);
     }
 }

 console.log("--------------");
 for(let i=0;i<=arr.length;i++){
    if(typeof(arr[i])!=="string"){
        continue;
    }
    console.log(arr[i]);
}

console.log("--------------");
for(let i=0;i<=arr.length;i++){
    if(typeof(arr[i])!=="string"){
        break;
    }
    console.log(arr[i]);
}