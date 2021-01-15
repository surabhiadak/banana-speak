var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input)
{
    return serverURL + "?" +"text=" +input
}
function errorHandler(error)
{
    console.log("error occurred", error)
    alert("Something wrong with server! Please try after some time")
}
function clickHandler()
{
    var inputText = txtInput.value //input

    //calling server for processing: this time processing part went to server
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => 
        {
        var translatedText = json.contents.translated;
        outputDiv.innerText=translatedText;  //output
        })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler) 