let form = document.getElementById("userInputForm");
let list = document.getElementById("list");

// ========================== SAVE BUTTON ==========================

form.addEventListener("submit", function guardar(event) {
  event.preventDefault();
  let formDataElement = new FormData(event.target);
  let userInputValue = formDataElement.get("inputMessage");
  createMessageElement(userInputValue);
  form.reset();
});

function createMessageElement(message) {
  let liElement = document.createElement("li");
  liElement.className = 'user-message'  
  liElement.innerHTML = message;
  list.appendChild(liElement);
}


// ======================== CAPITALIZE BUTTON1 ========================
let userMessages = document.getElementsByClassName('user-message');


let upperCaseButton = document.getElementById("upperCaseButton");


upperCaseButton.addEventListener('click', messageToUpperCaseWithClass)

function messageToUpperCaseWithClass() {

  for (let index = 0; index < userMessages.length; index++) {
    userMessages[index].style.textTransform = 'capitalize'
  }
}
// ======================== CAPITALIZE BUTTON2 ========================


let upperCaseButton2 = document.getElementById("upperCaseButton2");

upperCaseButton2.addEventListener('click', messageToUpperCase)

function textToCapitalize(text){
  let wordsText=  text.trim().split(' ');
  wordsText = wordsText.map(word => upperFirstChar(word));
  return wordsText.join(' ')
}

function upperFirstChar(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function messageToUpperCase() {
  for (let index = 0; index < userMessages.length; index++) {
    let textMessage = userMessages[index].textContent;
    userMessages[index].textContent = textToCapitalize(textMessage)
}
}