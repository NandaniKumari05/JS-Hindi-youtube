//Arrays

// const myArr = [0, 1, 2, 3, 4, 5, 6]
// const myHeros = ["Shaktiman", "nagraj"]
// const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[2]);

//Array methods

// myArr.push(7)
// myArr.push(8)
// myArr.pop()    //last value removed

// myArr.unshift(9) //add 1element in starting

// myArr.shift()
// console.log(myArr.includes(9));   //check ele. exist or not 


// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

//slice, splice

// console.log("A", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B", myArr);

// const myn2 = myArr.splice(1, 3)
// console.log("C", myArr);
// console.log(myn2);


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][1]);
// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7,  [8, 9, 5],[2, 3, 4]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Nandani"))
console.log(Array.from("Nandani"))
console.log(Array.from({name: "Nandani"})) //intresting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));