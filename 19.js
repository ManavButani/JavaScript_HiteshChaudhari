// here if we want to grab the class then put . before and if we want to grab id then put #

var num = document.querySelector(".counter");
//var num = document.querySelector("#counter");
var fow = document.querySelector(".follower");

let count = 0;

setInterval(()=>{
    if(count<=1008){
        count++;
        num.innerHTML=count;
    }
},1)

setTimeout(()=>{
    fow.innerHTML="Jai Swaminarayan Mala completed ! :)"
},7000)