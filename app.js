var btnTranslate = document.querySelector('#btn-translate')
var txtInput = document.querySelector('#txt-Input')
var txtOutput = document.querySelector('#txt-translated')
var serverUrl = 'https://api.funtranslations.com/translate/shakespeare.json'

function getTranslaterUrl(txt){
    return serverUrl+"?text="+txt
}

function handleError(error){
    console.log("Error Occured "+error)
}

function translate(){
    var inputTxt = txtInput.value 

    fetch(getTranslaterUrl(inputTxt))
        .then(response => response.json())
        .then(json => {
            txtOutput.innerHTML = json.contents.translated
        })
        .catch(handleError)
}
btnTranslate.addEventListener("click", translate)