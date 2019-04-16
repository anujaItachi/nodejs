// console.log("client side javascript has been loaded")

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
//     //}).catch((e)=>console.log(e))
// })

// fetch('http://localhost:3000/weather?address=!').then((response) => {
//     response.json().then((data) => {
//        if (data.error) {
//            console.log(data.error)
//        } else {
//            console.log(data.location)
//            console.log(data.forecast)
//        }
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1') //if using id use #
const messageTwo = document.querySelector('#message-2')
// const messageOne = document.querySelector('p') //using element name
// const messageOne = document.querySelector('.className') //classname like did in CSS

//messageOne.textContent = 'From JavaScript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    // fetch('http://localhost:3000/weather?address=!').then((response) => {
    // fetch('http://172.16.76.81:3000/weather?address=' + location).then((response) => {   // if IP address is provided

    //fetch('http://localhost:3000/weather?address=' + location).then((response) => {    // if localhost is provided
    fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {
       if (data.error) {
           //console.log(data.error)
           messageOne.textContent = data.error
       } else {
        //    console.log(data.location)
        //    console.log(data.forecast)
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
       }    
    })
})

    //console.log(location)

//    console.log('testing!')
})