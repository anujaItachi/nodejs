const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        //url: 'https://api.darksky.net/forecast/148f7fa476454621227136961c31d16c/15.87,74.5',
        url: `https://api.darksky.net/forecast/148f7fa476454621227136961c31d16c/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        //if (!error && response.statusCode === 200)
        if (error) {
            //console.log('unable to connect to the forecast.io server.');
            callback('unable to connect to the forecast.io server.');
        } else if (response.statusCode === 400) {
            //console.log('unable to fetch weather');
            callback('unable to fetch weather');   
        } 
        else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
            //console.log(body.currently.temperature);
        }
    });
};

module.exports.getWeather = getWeather;