// for all regular function calls, this points to window object

console.log(this);

function manavkumar() {
    console.log("line20",this);
    
}
manavkumar();

var charitra={
    name: "swaminarayan",
    age: 49,
    getParamhansh: function(){
        console.log("line 7",this);

        function jaiswaminarayan(){
            console.log("Line10",this);
        }

        jaiswaminarayan();
    }
}

charitra.getParamhansh();

