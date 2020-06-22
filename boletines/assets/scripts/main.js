// Obtener los elementos de la clases .close
let links = document.querySelectorAll(".close");

// Recorrerlos
links.forEach(function(link){
	//Agregar un evento click a cada uno de ellos
	link.addEventListener("click",function(ev){
		ev.preventDefault();

	// Obtener los elementos de .content
	let content = document.querySelector('.content');
	
	// Quitar las clases de animación que ya tiene
	content.classList.remove("animate__fadeInDown");
	content.classList.remove("animate__animated");
	
	//Agregar clases para animar su salida fadeOutUp
	content.classList.add("animate__fadeOutUp");
	content.classList.add("animate__animated");

	setTimeout(function(){
		location.href = "/boletines";
	},600);

	return false;

	});
});