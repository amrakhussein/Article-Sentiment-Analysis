## Evaluate News Article with Natural Language Processing
### just practicing with webpack configuration & working with apis

This project aims to build a web tool like mainly focusing on web pack & api. The idea of the project is that the user submit a url(article). And with [meaningcloud API](https://www.meaningcloud.com/products/sentiment-analysis) can get sentiment and analysis based on the article submitted. The meaningcloud api process the data taken from the user (the url submitted) giving interesting predicted data for example, whether the text including in the url is irony or not. 


### to run the project in dev mode
` $ npm install`

` $ npm run build-dev`

` $ npm run start`

** can be run on `localhost:8080`**

### to run the project in prod mode
` $ npm install`

` $ npm run build-prod`

` $ npm run start`

** can be run on `localhost:8081` **

** if you prefer to run on the dev mode and faced an issue you can insert the following code in the browser **

`navigator.serviceWorker.getRegistrations().then(function(registrations) { for(let registration of registrations) { registration.unregister() } })`

#### you can run jest 
`npm test`
