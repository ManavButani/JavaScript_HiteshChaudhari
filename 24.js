// here we taking firstName and firstNamee so be carefull about declaration
// undefined is a worst than the error that's why need this

var bhakt = function (firstName,books) {
    // this.firstName = firstName;
    this.firstNamee = firstName;
    this.books = books;
    this.getbooks = function () {
        console.log(`${this.firstName} reads ${this.books} Granths`);
    };
};

bhakt.prototype.getName = function () {
    console.log(`Name of Bhakt is : ${this.firstName}`);
}

bhakt.prototype.getName2 = function () {
    console.log(`Name of Bhakt is : ${this.firstNamee}`);
}

var manav = new bhakt("Manav",5);
if(manav.hasOwnProperty("firstName")) // execute only if the firstName is exist
{
    manav.getName();
}

if(manav.hasOwnProperty("firstNamee")) // this is gonna execute because firstNamee exist
{
    manav.getName2();
}

var krenil = new bhakt("Krenil",2);
krenil.getName(); // undefined bcz never exist firstName property
// krenil.getName();