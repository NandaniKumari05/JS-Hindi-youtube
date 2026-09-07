const user = {
    username: "nandani",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);

    }
}
// user.welcomeMessage
// user.username = "nandu"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     console.log(this);
//     console.log(this.username);
// }
// chai()

// const chai = () => {
//     let username = "nandani"
//     console.log(this);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4))

//implicit return
// const addTwo = (num1, num2) => num1 + num2

// console.log(addTwo(3, 4))


// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3, 4))

const addTwo = (num1, num2) => ({username: "nandani"})
console.log(addTwo(3, 4))

