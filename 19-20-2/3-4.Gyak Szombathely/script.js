//let link = document.querySelector('a');
//link.addEventListener('click', esemeny);

let lista = document.querySelector('ul');
lista.addEventListener('click', esemeny);

function esemeny(event){
	event.preventDefault();
	
	if(!event.shiftKey){
		return;
	}
	
	let legkozelebbiLink = event.target.closest('a');
	console.log(event.target);
	console.log(this);
	
	if(this.contains(legkozelebbiLink)){
		console.log(legkozelebbiLink.href);
	}
}