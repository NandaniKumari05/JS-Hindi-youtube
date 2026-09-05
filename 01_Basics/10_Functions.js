function sayMyName(){
    console.log("N");
    console.log("A");
    console.log("N");
    console.log("D");
    console.log("A");
    console.log("N");
    console.log("I");
}
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(4, 5)

//  console.log("result:",  result);

function loginUserMessage(username = "nandu"){
    if(!username){
        console.log("Please enter a username");
        return

    }
    return `${username} just logged in`
}   
// console.log(loginUserMessage("Nandani"));
// console.log(loginUserMessage());

function calculateCarPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCarPrice(200, 300, 400, 500))

// const user = {
//     username: "nandani",
//     price: 199
// }
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "shree",
    price: 299
})

const myNewArray = [200, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 600, 500]));