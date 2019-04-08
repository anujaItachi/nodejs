const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + address + '&APPID=90da5f64f170592a369ccc3f628e52e4'
    
    // request( {url: url, json: true}, (error, response) => {
    //     if (error) {
    //         callback('Unable to connect to location services', undefined)
    //     } else if (response.body.cod === '404') {
    //         callback('Unable to find location. Try another search.', undefined)
    //     } else {
    //         callback(undefined, {
    //             latitude: response.body.coord.lat,
    //             longitude: response.body.coord.lon,
    //             location: response.body.name

    //         })
    //     }
    // })

    request( {url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (body.cod === '404') {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.coord.lat,
                longitude: body.coord.lon,
                location: body.name

            })
        }
    })

}

module.exports = geocode
