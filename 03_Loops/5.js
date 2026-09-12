const codding = ["js", "cpp", "ruby", "java", "python"]
// codding.forEach(function name(val) {
//     console.log(val);
// })


// codding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// // codding.forEach(printMe)
// codding.forEach((item, indexe, arr) => {
//     console.log(item, indexe, arr);
// })

const myCodding = [
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
         languageName: "java",
        languageFile: "java"
    },
    {
         languageName: "python",
        languageFile: "py"
    },
]

myCodding.forEach((item) => {
    console.log(item.languageName);
})