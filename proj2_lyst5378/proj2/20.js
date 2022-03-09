const red = document.querySelector(".red");
const violet = document.querySelector(".violet");
const pink = document.querySelector(".pink");
const orange = document.querySelector(".orange");
const cyan = document.querySelector(".cyan");
const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red));
// console.log(window.getComputedStyle(red).background);
// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedColor)=>{
    return window.getComputedStyle(selectedColor).backgroundColor;
}

// red.addEventListener('mouseleave',()=>{
//     center.style.background = redis;
// });

const magicColor = (elementer, color)=>{
 return elementer.addEventListener("mouseenter",()=>{
    center.style.background = color;
 });
};

console.log(red);

magicColor(red,getBGColor(red));
magicColor(violet,getBGColor(violet));
magicColor(orange,getBGColor(orange));
magicColor(pink,getBGColor(pink));
magicColor(cyan,getBGColor(cyan));
