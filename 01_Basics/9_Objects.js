//Object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Nandani",
    "full name": "Nandani Kuamri",
    [mySym]: "mykey1",
    age: 19,
    location: "delhi",
    email: "nandu@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym])

JsUser.email = "nandani@.com"
Object.freeze(JsUser)
JsUser.email = "nandaniKri@.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting);