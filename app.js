let form = document.querySelector("form");
let messagesArray = JSON.parse(localStorage.getItem("messagesStored")) || [];
let list = document.getElementById("list");

/* ======================= LOAD MESSAGES WHEN PAGE FINISH LOADING ======================= */

document.addEventListener("DOMContentLoaded", function MessagesLoad() {
  let parsedMessages = JSON.parse(localStorage.getItem("messagesStored"));
  parsedMessages.forEach((element) => {
    var entry = document.createElement("li");
    entry.appendChild(document.createTextNode(element));
    list.appendChild(entry);
  });
});

/* ======================= SAVE MESSAGE =================================== */

form.addEventListener("submit", save);

function save(event) {

  // ========================== HTML RENDER =====================

  // Store in variable the value of input (user message)
  let message = form.children[1].value;

  // Prevent the reload on save button
  event.preventDefault();

  // Modularize the createElement
  var entry = document.createElement("li");

  // create TextNode into the new LI, with the message the user entered.
  entry.appendChild(document.createTextNode(message));

  // append the new LI to the list
  list.appendChild(entry);
  
  // =================== LOCAL STORAGE SAVE =====================
  
  messagesArray.push(message);

  let messagesArrayString = JSON.stringify(messagesArray);

  localStorage.setItem("messagesStored", messagesArrayString);

  form.reset();
}
