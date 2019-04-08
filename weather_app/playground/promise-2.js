const request = require('request');


var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {

        var encodedAddress = encodeURIComponent(address);

        request({
            url: `http://api.openweathermap.org/data/2.5/weather?q=${encodedAddress}&APPID=90da5f64f170592a369ccc3f628e52e4`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('unable to connect to google server');
                //console.log('unable to connect to google server');
            } else if (response.statusMessage !== 'OK') {
                reject('Unable to find that address');
                //console.log('Unable to find that address');
            } else if (response.statusMessage === 'OK') {
                resolve({
                    address: response.body,
                    latitude: response.body.coord.lat,
                    longitude: response.body.coord.lon
                });
                //console.log(response.body);
            }

        });


    });

};

geocodeAddress('London').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});