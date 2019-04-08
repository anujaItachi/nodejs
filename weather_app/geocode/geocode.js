const request = require('request');



var geocodeAddress = (address, callback) => {

    var encodedAddress = encodeURIComponent(address);

    request({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${encodedAddress}&APPID=90da5f64f170592a369ccc3f628e52e4`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('unable to connect to google server');
            //console.log('unable to connect to google server');
        } else if (response.statusMessage !== 'OK') {
            callback('Unable to find that address');
            //console.log('Unable to find that address');
        } else if (response.statusMessage === 'OK') {
            callback(undefined, {
                address: response.body,
                latitude: response.body.coord.lat,
                longitude: response.body.coord.lon
            });
            console.log(response.body);
        }

    });

}


module.exports.geocodeAddress = geocodeAddress;