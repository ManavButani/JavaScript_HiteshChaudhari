var bhakt = function (name,booksread) {
    this.name = name;
    this.booksread = booksread;
    this.getBooksRead = function () {
        console.log(`${this.name} reads ${this.booksread} granths`);
    };
};

bhakt.prototype.getNameOfBhakt = function () {
    console.log(`Name of BhaktRaj is a : ${this.name}`);
}

var manav = new bhakt("Manav",5);
console.log(manav);
manav.getBooksRead();
manav.getNameOfBhakt();
// manav.getSambhan();