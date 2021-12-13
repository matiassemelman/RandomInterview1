let form = document.getElementById("userInputForm");

form.addEventListener('submit', function guardar(event) {
    event.preventDefault();
    let formDataElement = new FormData(event.target);
    console.log(formDataElement.get('inputMessage'))
})