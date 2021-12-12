let form = document.querySelector("form");
let arrayDeMensajes = JSON.parse(localStorage.getItem("mensajesGuardados")) || [];
let lista = document.getElementById("lista");

document.addEventListener("DOMContentLoaded", function cargarMensajes() {
  let mensajesParseados = JSON.parse(localStorage.getItem("mensajesGuardados"));
  mensajesParseados.forEach(element => {
    var entry = document.createElement("li");
    entry.appendChild(document.createTextNode(element));
    lista.appendChild(entry);
  });
  
});

form.addEventListener("submit", guardar);

function guardar(event) {
  // Evito el comportamiento por default, en este caso evito que recargue la pagina.
  event.preventDefault();

  // Inicializo un array para guardar los mensajes

  // Pushea el nuevo mensaje al array
  arrayDeMensajes.push(form.children[1].value);

  let arrayDeMensajesString = JSON.stringify(arrayDeMensajes);

  localStorage.setItem("mensajesGuardados", arrayDeMensajesString);

  // Resetea el formulario una vez hecho el click en el boton Guardar
  form.reset();
}
