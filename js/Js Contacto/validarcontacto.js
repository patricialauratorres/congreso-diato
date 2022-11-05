
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form").addEventListener('submit', validarFormulario);
    
});

function validarFormulario(evento) {
    evento.preventDefault();
    let error = false


    var nombre = document.getElementById('nombre').value;
    let mensaje1 = document.getElementById("mensaje1")
    if (nombre.length == 0) {
        mensaje1.style.display = "block"
        error = true
        return;
    }
    else {
        mensaje1.style.display = "none"
    }

    var email = document.getElementById('email').value;
    let mensaje2 = document.getElementById("mensaje2")
    if (email.length == 0) {
        mensaje2.style.display = "block"
        error = true
        return;
    }
    else {
        mensaje2.style.display = "none"
    };

    var number = document.getElementById('number').value;
    let mensaje3 = document.getElementById("mensaje3")
    if (number.length == 0) {
        mensaje3.style.display = "block"
        error = true
        return;
    }
    else {
        mensaje3.style.display = "none"
    }

    var message = document.getElementById('message').value;
    let mensaje4 = document.getElementById("mensaje4")
    if (message.length == 0) {
        mensaje4.style.display = "block"
        error = true
        return;
    }
    else {
        mensaje4.style.display = "none"
    }

    if (!error) {
        
        const $buttonMailto = document.querySelector('#mailto')
        const form = new FormData(this)
        $buttonMailto.setAttribute('href', `mailto:micaelamujica@ilpla.edu.ar?subject= Nombre: ${form.get('nombre')}  Teléfono: ${form.get('number')}  Correo: ${form.get('email')}&body=${form.get('message')}`)
        $buttonMailto.click()
    
        location. reload()

    }

   
    
}

