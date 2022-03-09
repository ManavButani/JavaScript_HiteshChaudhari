var manav={
    firstName : "manav",
    lastName: "Butani",
    role: "Bhakt",
    getInfo: function(){
        console.log(`
        Name is ${this.firstName} ${this.lastName}
        his role in life is ${this.role}
        `);
    }
}

var krenil={
    firstName: "Krenil",
    lastName: "Butani",
    role: "Das of Maharaj"
}

manav.getInfo();
// krenil.getInfo(); //error if uncomment this because krenil doesnt have method call getInfo()

//Now what if we want use method of Manav for Krenil
// we have two ways using bind and using call
console.log("---***Easy way of printing----***");
manav.getInfo.bind(krenil)();

console.log("---***Hard way of printing----***");
var kock=manav.getInfo.bind(krenil);
kock();

console.log("---***Using Call----***");
manav.getInfo.call(krenil);