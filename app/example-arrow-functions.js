// var names = ["Andrew", "Julie", "Jen"];

// names.forEach(function(name){
//     console.log("forEach", name);
// });

// names.forEach((name) => {
//     console.log("arrowFunc", name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + "!";
// console.log(returnMe("Andrew"));

// var person ={
//     name: "Andrew",
//     greet: function(){
//         names.forEach((name) =>{
//             console.log(this.name + " say hi to " + name)
//         });
//     }
// };

// person.greet();



//==== Challenge ====//

// function add (a,b){
//     return a+b;
// }
// console.log(add(1,3));
// console.log(add(9,0));

var add = (a,b) => a + b;
console.log(add(1,3));

var addy = (a,b) => {
    return a + b;
}
console.log(addy(9,0));

