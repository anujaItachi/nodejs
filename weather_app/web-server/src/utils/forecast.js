const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/148f7fa476454621227136961c31d16c/' + latitude + ',' + longitude

    // request({url: url, json: true}, (error, response) => {

    //     // console.log(response.body.currently)

    //     if (error) {
    //         callback('Unable to connect to weather service!', undefined)
    //     } else if (response.body.error) {
    //         callback('Unable to find location', undefined)
    //     } else {
    //         callback(undefined, response.body.daily.data[0].summary + 'It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + ' % chance of rain.')
    //     }
    // }) OR

    request({url, json: true}, (error, { body }) => {

        // console.log(response.body.currently)

        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + 'It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + ' % chance of rain.')
        }
    })

}

module.exports = forecast