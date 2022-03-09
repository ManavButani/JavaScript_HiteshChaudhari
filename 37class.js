class Maharaj {
  constructor(name, emailid) {
    this.name = name;
    this.emailid = emailid;
  }

  getInfo() {
    return { kon_6: this.name, keva_6: this.emailid };
  }

  bookList = [];
  updateBookList(granth) {
    this.bookList.push(granth);
  }

  getBookList() {
    return this.bookList;
  }
}

// var swami = new Maharaj("swaminarayan", "parabramha&santo.krupa") // if want to use hear
module.exports = Maharaj; // if we want to use in onother file