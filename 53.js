console.log("This is tutorial 53");
 
function greet(name, greetText = "Greetings from Javascript"){
    let Name1 = "Name1";
    console.log(greetText + "" + name);
    console.log(name + " is a good boy");

}
function sum(a,b,c){
    let d= a+ b+ c;
    return d;
    // This line will never exectue(Unreachablecode                                                                                                            )
    // console.log("Funciotn is rturn")
}
let name = "Harry";
let name1 = "Subham";
let name2 = "Sagar";
let name3 = "Karim";

let greetText1 = "Good morning "
greet(name, greetText1);
greet(name1, greetText1);
greet(name2, greetText1);
greet(name3, greetText1);
// let retVal = greet(name3);
// console.log("retVal");

let returnVal = sum(1,2,3);
console.log("returnVal")
// console.log("Harry is a good boy" );
// console.log("Subham is a good boy" );
// console.log("Sagar is a good boy" );
// console.log("Karim is a good boy" );