//object property shorthand

const name = 'Andrew'  //name(variable)
const userAge = 25     //userAge(variable)

// const user = {
//     name: name,
//     age: userAge,
//     location: 'London'
// }

// user(object)
const user = {
    name,  //object shorthand since the 'variable' name is same as the name defined in the 'object'
    age: userAge,  // can't use shorthand coz the name defined in 'object' is different from the one defined in the 'variable' 
    location: 'London'
}

console.log(user)

//object destructuring(means the object defined should be reversed defined in the variable like restructuring again)
const product = {
    label: 'notebook',
    price: '22',
    stock: '201',
    saleprice: undefined,
    rating: 4.2 //if value is given here default = 5 is not considered whereas this value = 4.2 will be considered 
}

// console.log(product.label)
// console.log(product.stock)

// const {label, stock, rating} = product
// const {label:productLabel, stock, rating = 5} = product  //rating = 5(default)

// // console.log(label)

// console.log(productLabel)  //renaming the variable
// console.log(stock)
// console.log(rating)

// Creating a function
// const transaction = (type, myProduct) => {
//     const { label } = myProduct
// } OR

// const transaction = (type, {label, stock}) => {
const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock)
}

transaction('order', product)
//transaction('order')



