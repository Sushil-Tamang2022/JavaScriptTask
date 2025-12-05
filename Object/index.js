// Object : Collection of key-pair value, duplicated key doesn't exist
// let user = {
//     name: "abc", // name is a field
//     age: 24,
// }

// console.log(user);
// console.log(typeof(user));
// console.log(user.name)
// console.log(user["name"])
// console.log(user["age"])

// user.age = 50 //update 
// user.phone = "9849067761" // add
// delete user.name // delete  user object ko name vanne property lai delete garchha
// console.log(user);


let user = {
    name: "abc",
    age: 24,
    address: {
        temp: "BKT",
        par: "KTM"
    },
    sub: {
        math: [90, 20, 40]
    }
}

// console.log(user.address.temp)
// console.log(user.address.par)
// console.log(user.address["temp"]);
// console.log(user.address["par"]);


// let sum = user.sub.math.reduce((acc, item) => {
//     return acc + item
// }, 0)
// let avg = sum / 3
// console.log(avg)
// console.log(sum)





