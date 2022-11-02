//Remember their is global context and execution context
//window is global object in browser.
//variable object    scope chain     this

// Functions declarations are scanned and made available to whoever to have an access .
// Variable declarations are also scanned but variable are made undefined .

var num=2;

function sayMe(){
    console.log("Say me!");
}

sayMe();

tipper("80");

function tipper(a){
    var bill=parseInt(a);
    console.log(bill+5);
}
// bigTipper("200");
var bigTipper= function(a){
    var bill=parseInt(a);
    console.log(bill+15);


}
bigTipper("200");

console.log(name);//undefied
var name="DARSHAN";
// console.log(name);//DARSHAN


function sayName(){
    var name="MR. D";
    console.log(name);
}

sayName();
console.log(name);




