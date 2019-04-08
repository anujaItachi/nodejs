const express = require('express')
const path = require('path')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// console.log(__dirname)
// //console.log(__filename)
// console.log(path.join(__dirname, '../public'))

const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))


// using handlers(hbs)
// app.get('/ab', (req, res) => {
//     res.render('index')
// })

app.get('/ab', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Andrew Mead'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Andrew Mead'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Andrew Mead'
    })
})

//query string
app.get('/products', (req, res) => {
    if (!req.query.name) {
        return res.send({
            error: 'Name has to be provided'
        })

    }
    console.log(req.query.name)
    res.send({
        products: []
    })

})

//query string
app.get('/weather', (req,res) => {
    if (!req.query.address) {
        return res.send({
            error: 'Address has to be given'
        })
    
    }

    // geocode(req.query.address, (error, { latitude, longitude, location }) => {
    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({error})
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })


    })
    // console.log(req.query.address)
    // res.send({
    //     forecast: 'It is snowing',
    //     location: 'Philadelphia',
    //     address: req.query.address
    // })
})

app.get('/help/*', (req, res) => {
    // res.send('Help article not found')
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: ' Help article not found.'
    })
})

app.get('*', (req,res) => {
    // res.send('My 404 page')
    res.render('404', {
       title: '404',
       name: 'Andrew Mead',
       errorMessage: 'Page not found.' 
    })

})

// app.get('', (req, res)=>{
//     res.send({
//         anuja : 'Hanu'
//     })
// })
//1) Hello Express
// app.get('', (req, res) => {
//     res.send('Hello express!')
// })

// app.get('/help', (req,res) => {
//     res.send('Help page')
// })

// app.get('/about', (req,res) => {
//     res.send('About page')
// })

// app.get('/weather', (req,res) => {
//     res.send('View Weather page')
// })

// app
// app.com/help
// app.com/about

//2) Serving up HTML and JSON

// app.get('', (req, res) => {
//     res.send('<h1>Weather</h1>')
// })

// app.get('/help', (req,res) => {
//     res.send([{
//         name: 'Andrew',
//         age: 27
//     },{
//         name: 'Raj',
//         age: 30
//     }])
// })

// app.get('/about', (req,res) => {
//     res.send('<h1>About</h1>')
// })

// app.get('/weather', (req,res) => {
//     res.send({
//         forecast: 'It is snowing',
//         location: 'Philadelphia'
//     })
// })


app.listen(3000, () => {
    console.log('Server is set up on port 3000')
})