function manav(){
    var firstName = "Manav01Hero";
    function swaminarayan()
    {
        console.log(firstName);
    }
 return swaminarayan;
}

var radhunandan=manav();
radhunandan();

function add5(x){
    return function(y){
        return x+y;
    }
}

var lakshminarayan = add5(5);
//lakshminarayan(8); returns the 13
console.log(lakshminarayan(8));

//easy to use 
// add5(5)(5)

console.log(add5(5)(6)); // here we need to console log because the value is returnin from the function

//add5()()() //this is curing