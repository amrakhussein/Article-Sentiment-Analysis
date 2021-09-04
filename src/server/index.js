const dotenv = require('dotenv')
dotenv.config()

// Require fetch api for fetching data from urls
const fetch = require('node-fetch')


// const mockAPIResponse = require('./mockAPI.js')

// Require Express to run server and routes
const express = require('express')
const bodyParser = require('body-parser') // express depedency
const cors = require('cors') // Cors for cross origin allowance

// Start up an instance of app
const app = express()
// configuring express to use body-parser as middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())



// console.log('dirname: ', __dirname)
// console.log('mock api', JSON.stringify(mockAPIResponse))


// designates what port the app will listen to for incoming requests
const PORT = 8081
app.listen(PORT, (err) => {
    if (err) throw new Error(err)
    console.log(`Server is listening on port ${PORT}!`)
})

// app.get('/test', function (req, res) {
//     res.send(mockAPIResponse)
// })

const mainPage = app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})




// a route that handling post request for new URL that coming from the frontend
app.post('/api/analyze', async (req, res) => {
    const userFormUrl = () => {
        // console.log('req',req)
        // api Key
        const API_KEY = process.env.API_KEY
        // console.log(API_KEY)
        const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1'

        // the article url from request body
        const  { url } = req.body
        const params = `?key=${API_KEY}&url=${url}&lang=en&txt=UTF-8`
        const urlToFetch = BASE_API_URL + params
        console.log('url to be feteched: ', urlToFetch)
        return urlToFetch
    }
    try {
        // fetch data from api
        const response = await fetch(userFormUrl(), {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        })

        // parse the api data into json
        const newData = await response.json()

        // sending the data to the client
        const dataToClient = await res.send({
            text: newData.sentence_list[0].text,
            agreement: newData.agreement,
            subjectivity: newData.subjectivity,
            confidence: newData.confidence,
            irony: newData.irony,
            score_tag: newData.score_tag
        })
    } catch (err) {
        console.log(err.message)
    }
})


module.exports = { mainPage }