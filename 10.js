const charitra = {
    Ghanshyam : "Chhapaiya",
    Nilkanth: "Loaj",
    Shajanad: "Piplana",
    Swaminarayan: "Fareni",
    Age: 50,
    book: "Shikshapatri"
}

console.table(charitra);
console.log(charitra.Age);
console.log(charitra["Swaminarayan"]);
charitra.Age = "Infinity";
console.log(charitra.Age);