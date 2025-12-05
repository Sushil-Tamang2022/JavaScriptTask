const products = [
    {
        name: "iPhone10",
        price: 20000,
    },
    {
        name: "iPhone12",
        price: 25000,
    },
    {
        name: "iPhone13",
        price: 30000,
    },
    {
        name: "iPhone14",
        price:40000,
    },

    {
        name: "iPhone14",
        price: 50000,
    },
    
]

// to acess all the item we use forEach() loop
// let p1 = products[0];
// let p2 = products[1];
// console.log(p);
// console.log(p1.name);
// console.log(p2.price);

// console.log(products[0].name);
// console.log(products[0].price);
// console.log(products[1]);

// products.forEach((item) => {
//     console.log(item.name)
//     console.log(item.price)
// })

// let sum = products.reduce((acc, item) => {
//     return acc + item.price
// }, 0)

// console.log(`Sum: ${sum}`)

// Write a program that will double the price of products
// let newProduct = products.map((item) => {
//     return {...item, price: item.price * 2} //old item && newItem dubai chahida spread operator ko use garchhau{...} jasle pahila ko existing lai copy gari rakhchha
// })
// console.log(newProduct)

// Write a program that will find the product whose price is greater than 30, 000
// let filterProduct = products.filter((item) => {
//     return item.price > 30000 //old item && newItem dubai chahida spread operator ko use garchhau{...} jasle pahila ko existing lai copy gari rakhchha
// })
// console.log(filterProduct)

// Write a program that will find the product whose price is == 30, 000
// const pd = products.find((item) => [
//     return item.price == 50000
// ])
// console.log(pd)

// let p = products.find((item) => {
//     return item.price === 50000
// })
// console.log(p)

// console.log(products.find(item => item.price === 50000))
const pd = products.find((item) => {
    return item.price === 50000
})
console.log(pd)

