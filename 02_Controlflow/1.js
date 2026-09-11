//IF
// const isUserLoggedIn = true
// const temperature = 42

// if(temperature === 50){
//     console.log("less than 50");

// }else {
// console.log("temperature is greater than 50");
// }

// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power:${power}`);

// const balance = 1000
// if (balance > 500) console.log("test"), // right
// console.log("test");
// if (balance > 500) console.log("test"),console.log("test2");  // not used as this 

// if(balance < 500) {
//     console.log("less than 500");

// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 750");
// }
// else {
//     console.log("less thana 1100");
// }

const isUserLoggedIn = true
const debitcard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if(isUserLoggedIn && debitcard && 2==2){
    console.log("Allow to buy course");
}

if(LoggedInFromGoogle || LoggedInFromEmail){
    console.log("User logged in");
}
