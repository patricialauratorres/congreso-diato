const btnEnvio=document.getElementById('enviarEmail');
btnEnvio.addEventListener('Click',function(e) {
	e.preventDefault();
	const email=document.getElementById('email').value;
	const nombre=document.getElementById('nombre').value;
	const comentarios=document.getElementById('comentarios').value;

	window.location.href=`mailto:micaelamujica@ilpla.edu.ar?subject=envioDesdeFormulario&body=Nombre%3A${nombre}%0ACorreo%3A${email}%0AComentarios%3A${comentarios}`
});

