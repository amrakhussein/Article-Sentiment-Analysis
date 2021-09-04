const fetch = require('node-fetch')

const handleSubmit = async (evt) => {
    evt.preventDefault()
    let urlFromForm = document.querySelector('#article-url').value
    console.log('urlform: ', urlFromForm)
    
    if (Client.validateUrl(urlFromForm)) {
        console.log("The form submitted successfully")
        post('http://localhost:8083/api/analyze', {url: urlFromForm})
          .then(data => updateUI(data))
    }else{
        alert('Please insert a valid URL or try another one!')
    }
}


const post = async (url = '', data = {}) => {
    console.log('data got from the form: ', data)

    const response = await fetch(url, { 
        method: 'POST',
        headers: {
         'Content-Type': 'application/json'

        },

        body: JSON.stringify(data) // parse raw text into json
    })

    try {
        const newData = await response.json()
        // console.log('data: ', newData)
        return newData
    } catch (error) {
        console.log('error: ', error.message )
    }
}


// reflect updates to the page
let updateUI = (data) => {
    document.querySelector('#text').textContent = `Text type: ${data.text}`
    document.querySelector('#agreement').textContent = `Agreement: ${data.agreement}`
    document.querySelector('#subjectivity').textContent = `Subjectivity: ${data.subjectivity}`
    document.querySelector('#confidence').textContent = `Confidence: ${data.subjectivity_confidence}`
    document.querySelector('#irony').textContent = `Irony: ${data.irony}`
    document.querySelector('#score_tag').textContent = `Total score: ${data.subjectivity_confidence}`
    
}

export { handleSubmit }
