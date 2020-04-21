function mountSection(){
	
	var section = cE("section");
	var view 		= cE("view");

	var ranking 	= cE("ranking");

	

	section.appendChild(view);
	
	got(document,"body")[0].appendChild(section);

}