var User = {
    name: "",
    getName: function () {
        console.log(`My name is : ${this.name}`);
    }
}

var manav = Object.create(User);
console.log(manav);
manav.name = "Manav Butani";
console.log(manav);
manav.getName();

var krenil = Object.create(User, {
    name: {value: "Krenil Butani"},
    courseCount: {value: 5}
})

krenil.getName();
console.log(krenil);