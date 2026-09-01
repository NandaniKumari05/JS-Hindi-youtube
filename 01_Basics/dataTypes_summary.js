// # Primitive Datatype

//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// console.log(id === anotherId);

// const bigNumber = 1234566789n

//Reference (Non Primitive)

//Arrays, Objects,  Functions

// const heroes = ["shaktiman",  "doremon", "doga"];
// let myObj = {
//     name: "Nandani",
//     age: 19,
// }
// const myFunction = function(){
//     console.log("Hello I,m Nandani Gupta");
// }

// console.log(typeof heroes);

//************* 

//Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "Nandanidotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(anothername);
console.log(myYoutubename);

let user1 = {
    email: "nandu@.com",
    upi: "user@ybl"
}
let user2 = user1
user1.email = "nandu@google.com"
console.log(user1.email);
console.log(user2.email);
