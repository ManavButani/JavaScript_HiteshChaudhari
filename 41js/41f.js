// In 40.js we can see that output sequence cause a trouble when 
// we are also working with backend part 
// so solutin we can see with help of 41f.js 41s.js ...

const aek = ()=>{
    return "One";
}

const be = ()=>{
    setTimeout(()=>{
        return "Two is";
    },3000)
}

const tran = ()=>{
    return "three"
}

const manebolavo = ()=>{
    let one = aek();
    console.log(one);

    let two = be();
    console.log(two);

    console.log(tran());
}

manebolavo();

//one
//undefined
//three