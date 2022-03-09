const charitra = {
    Ghanshyam : "Chhapaiya",
    Nilkanth: "Loaj",
    Shajanad: "Piplana",
    Swaminarayan: "Fareni",
    Age: 50,
    book: "Shikshapatri",
    ParamHansh: [],
    setPramHansh: function (swaminame) {
        this.ParamHansh.push(swaminame);
    },
    getParamHansh:function () {
        return `${this.book} is added, now we have ${this.ParamHansh.length} paramhansh`;
    }
}

charitra.setPramHansh("Muktanand swami");
console.log(charitra.getParamHansh);
console.log(charitra.getParamHansh());