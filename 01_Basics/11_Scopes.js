var c = 300
let a = 400
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "nandani"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
// one() 

if (true) {
    const username = "nandani"
    if(username === "nandu") {
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ***************


const addTwo = function(num){
    return num + 3
}
addTwo(5)