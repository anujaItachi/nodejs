
const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .option({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);
// console.log(encodedAddress);
var geocodeUrl = `http://api.openweathermap.org/data/2.5/weather?q=${encodedAddress}&APPID=90da5f64f170592a369ccc3f628e52e4`;

//console.log()
axios.get(geocodeUrl).then((response) => {
    
    if (response.status !== 200) {
        
        throw new Error('Unable to find that address');
    }
    
    console.log(response);
    
    var lat = response.data.coord.lat;
    var lng = response.data.coord.lon;
    var weatherUrl = `https://api.darksky.net/forecast/148f7fa476454621227136961c31d16c/${lat},${lng}`;
    //console.log(response.data);
    return axios.get(weatherUrl);

}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature =  response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. it feels like ${apparentTemperature}.`);
}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect to api servers');
    } else {
        console.log('Unable to find that address');
    }

   // console.log(e);
});




// weather.getWeather(15.87, 74.5, (errorMessage, weatherResults) => {
//     if(errorMessage){
//         console.log(errorMessage);
//     } else {
//         console.log(JSON.stringify(weatherResults, undefined, 2));
//     }
// });






// var encodedAddress = encodeURIComponent(argv.address);

// request({
//     //url: 'http://api.openweathermap.org/data/2.5/weather?q=London&APPID=90da5f64f170592a369ccc3f628e52e4',
//     url: `http://api.openweathermap.org/data/2.5/weather?q=${encodedAddress}&APPID=90da5f64f170592a369ccc3f628e52e4`,
//     json: true
// }, (error, response, body) => {
//     if (error) {
//         console.log('unable to connect to google server');
//     } else if (response.statusMessage !== 'OK') {
//         console.log('Unable to find that address');
//     } else if (response.statusMessage === 'OK'){
//         console.log(response.body);
//     }

    //console.log(response.statusMessage);
    //console.log(body);
    // var fun = (name, body) => {
    //   if(name === 'clouds'){
    //     return {'anuja' : 4};
    // }else{
    //   return body;
    // };
//}
    //console.log(JSON.stringify(response, undefined, 2));
    //console.log(`Address: ${body.weather[0].icon}`);
    // console.log('here');
    // console.log(body);
// });



//148f7fa476454621227136961c31d16c
//https://api.darksky.net/forecast/148f7fa476454621227136961c31d16c/37.8267,-122.4233


// const request = require('request');
// request({
//     url: 'https://api.darksky.net/forecast/148f7fa476454621227136961c31d16c/15.87,74.5',
//     json: true
// }, (error, response, body) => {
//     //if (!error && response.statusCode === 200)
//     if (error) {
//         console.log('unable to connect to the forecast.io server.');
//     } else if (response.statusCode === 400) {
//         console.log('unable to fetch weather');   
//     } 
//     else if (response.statusCode === 200) {
//         console.log(body.currently.temperature);
//     }
// });