class Maharaj {
  constructor(name, dham) {
    this.name = name;
    this.dham = dham;
  }

  getInfo() {
    return { kon6: this.name, kyathi6: this.dham };
  }

  static accessDarshan() {
    //static because child class can not use method
    return ["welcome to Akshardham", "Swaminarayan"];
  }

  accessGolok() {
    return ["dhanya 6 krishna krupalu"];
  }
}

class Devo extends Maharaj {
  constructor(name, kya) {
    super(name, kya);
  }

  getInfo() {
    //overriding method of Maharaj class
    return "Hu maharaj no bhakt 6u";
  }
}

const shiv = new Devo("Mahadev", "Kailash");
console.log(shiv.getInfo());
console.log(shiv.accessGolok());
// console.log(shiv.accessDarshan());
