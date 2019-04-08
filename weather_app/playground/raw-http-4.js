const https = require('https')

const url = 'https://api.darksky.net/forecast/148f7fa476454621227136961c31d16c/15.87,74.5' 

const request = https.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        //console.log(chunk)
        data = data + chunk.toString()
    })

    response.on('end', () => {
        //console.log(data)
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)

})

request.end()