// in this code we learn keyword
// promise,resolve, async , await

const aek = ()=>{
    return "One";
}

const be = ()=>{
    return new Promise((resolve,reject)=>{
        resolve ("Two");
    })
}

const tran = ()=>{
    return "three"
}

const manebolavo = async ()=>{
    let one = aek();
    console.log(one);

    let two = await be();
    console.log(two);

    console.log(tran());
}

manebolavo();

// One
// Promise { undefined }
// three