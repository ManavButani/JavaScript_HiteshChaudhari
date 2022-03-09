//new keyword

var bhakt = function (firstname, bookreads) {
    this.firstname = firstname;
    this.bookreads = bookreads;
    this.getbookReads = function () {
        console.log(`${this.firstname} reads ${this.bookreads}`);
    };   
}

var manav=bhakt("manav",5); // without new keyword this gonna be refer to the global object
console.log(manav);


// every time new keyword calls constructor internally and makes new instances
var manav = new bhakt("manav",5); // with new keyword this gonna be refer to current object
console.log(manav);

var krenil = new bhakt("krenil",2);
console.log(krenil);
