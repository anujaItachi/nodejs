console.log("client side javascript has been loaded")

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

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    // fetch('http://localhost:3000/weather?address=!').then((response) => {
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    response.json().then((data) => {
       if (data.error) {
           console.log(data.error)
       } else {
           console.log(data.location)
           console.log(data.forecast)
       }
    })
})

    //console.log(location)

//    console.log('testing!')
})