class Maharaj{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    getDetail(){
        return {nam: this.name, umar: this.age};
    }

    #mandirs = []; // declaration of private variable in class 
    //private variables can not access directly outside class

    sevaMandir(kya){
        this.#mandirs.push(kya);
    }

    maruDham(){
        return this.#mandirs;
    }
}

var Manav = new Maharaj("Swaminarayan",49);
console.log(Manav.getDetail());
console.log(Manav.umar); // undefined
console.log(Manav.getDetail().umar);

Manav.sevaMandir("Vadtal")
console.log(Manav.maruDham());
console.log(Manav.mandirs); //undefined bcz mandirs is private now