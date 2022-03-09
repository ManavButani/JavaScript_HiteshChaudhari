// import Maharaj from "./37class.js";

const Maharaj = require("./37class.js");

var swami = new Maharaj("swaminarayan", "parabramha&santo.krupa");
console.log(swami.getInfo());

swami.updateBookList("Vachanamrut");
swami.updateBookList("ShikshaPatri");
swami.updateBookList("Hari_Lila_Kalpataru");

var bookss = swami.getBookList();
bookss.forEach((c)=>{
    console.log(c);
})