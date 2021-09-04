
// Got the url pattern from this source
// https://www.codegrepper.com/code-examples/javascript/javascript+validate+url
function validateUrl(url){
    var expression = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g; //check valid url pattern
    var regex = new RegExp(expression);
    // console.log('regex for url: ', regex)
    return regex.test(url);
} 


export { validateUrl }