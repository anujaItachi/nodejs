
const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast')
//const url = 'https://api.darksky.net/forecast/148f7fa476454621227136961c31d16c/15.87,74.5?key=value&otherKey=otherValue';
//const url = 'https://api.darksky.net/forecast/148f7fa476454621227136961c31d16c/15.87,74.5?units=us';
// const url = 'https://api.darksky.net/forecast/148f7fa476454621227136961c31d16c/15.87,74.5';

// request({ url: url, json: true }, (error, response) => {
//     // const data = JSON.parse(response.body)
//     // console.log(data.currently)
//     //console.log(JSON.stringify(response, undefined, 2));

//     // let v1 = JSON.parse(response.body);
//     // console.log(v1.currently);

    // if (error) {
    //     console.log('Unable to connect to weather service')
    // } else if (JSON.parse(response.body).error){
    //     console.log('Unable to find location')
    // } else {
    //     console.log(JSON.parse(response.body).daily.data[0].summary + 'It is currently ' + JSON.parse(response.body).currently.temperature + ' degrees out. There is a ' + JSON.parse(response.body).currently.precipProbability + ' % chance of rain.')
    // }
    //console.log(error)
    //console.log(JSON.parse(response.body).daily.data[0].summary + 'It is currently ' + JSON.parse(response.body).currently.temperature + ' degrees out. There is a ' + JSON.parse(response.body).currently.precipProbability + ' % chance of rain.')



    //console.log(JSON.parse(response.body).currently);

    //console.log(JSON.stringify(JSON.parse(response.body).currently));

    //console.log(data)

    //console.log(response)

//})

// const geocodeURL = 'http://api.openweathermap.org/data/2.5/weather?q=london&APPID=90da5f64f170592a369ccc3f628e52e4';
// request({ url: geocodeURL, json: true }, (error, response) => {
//     //console.log(response.body.cod)
//     if (error) {
//         console.log('Unable to connect to location services')
//     } else if (response.body.cod === '404') {
//         console.log('Unable to find location. Try another search.')
//     } else {        
//         const latitude = response.body.coord.lat
//         const longitude = response.body.coord.lon
//         console.log(latitude, longitude) 
//     }
    // const latitude = response.body.coord.lat
    // const longitude = response.body.coord.lon
    // console.log(latitude, longitude) 
      
    //console.log(response)
//})







// console.log('starting')

// setTimeout(() => {
//     console.log('2 second timer')
// }, 2000)

// setTimeout(() => {
//     console.log('0 second timer')
// }, 0)

// console.log('stopping')

// const geocode = (address, callback) => {
//     const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + address + '&APPID=90da5f64f170592a369ccc3f628e52e4'
    
//     request( {url: url, json: true}, (error, response) => {
//         if (error) {
//             callback('Unable to connect to location services', undefined)
//         } else if (response.body.cod === '404') {
//             callback('Unable to find location. Try another search.', undefined)
//         } else {
//             callback(undefined, {
//                 latitude: response.body.coord.lat,
//                 longitude: response.body.coord.lon,
//                 location: response.body.name

//             })
//         }
//     })

// }

const address = process.argv[2]

if(!address) {
    console.log('Please provide an Address')
// } else {
//     geocode(address, (error, data) => {
//         if (error) {
//             return console.log(error)
//         }
        
//         forecast(data.latitude, data.longitude, (error, forecastData) => {
//             if (error) {
//                 return console.log(error)
//             }
//             console.log(data.location)
//             console.log(forecastData)
//           })
    
//     }) 
    
// } OR

} else {
    geocode(address, (error, { latitude, longitude, location}) => {
        if (error) {
            return console.log(error)
        }
        
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
          })
    
    }) 
    
}

//console.log(process.argv)

// geocode(address, (error, data) => {
//     if (error) {
//         return console.log(error)
//     }
    
//     forecast(data.latitude, data.longitude, (error, forecastData) => {
//         if (error) {
//             return console.log(error)
//         }
//         console.log(data.location)
//         console.log(forecastData)
//       })

// })

// geocode('london', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//     forecast(data.latitude, data.longitude, (error, data) => {
//         console.log('Error', error)
//         console.log('Data', data)
//       })

// })


//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   })