// lexical scoping
function manav(){
    var firstName = "Manav01Hero";
    function swaminarayan()
    {
        console.log(firstName);
    }
swaminarayan();
}

manav();
// console.log(firstName); gives us refrece error 