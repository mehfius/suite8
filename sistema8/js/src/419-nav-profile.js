
function profile(array){
	
	var div    		= cE("div");
	var profile 	= cE("profile");
	//var figure 		= cE("figure");
	var label 		= cE("label");

		//profile.appendChild(figure);

		
			label.appendChild(cT(array.label));
	

	
	div.onclick=(function(){		

		formEdit("users",array.codigo);
		navClose();
		
	});
	
	var attribute = [];

	attribute.tag 		= "uploadedFiles";

	var result = cEA(attribute);
		
	if(array.figures!==undefined){

		for(var x=0;x<array.figures.length;x++){

			addUploadFilesProfile(result,array.figures[x]);

		}

	}

	div.appendChild(result);

	addUploadFilesProfile(result,null);
	
	profile.appendChild(div);
	profile.appendChild(label);

	
	return profile;

}

function profileUpload(array){


	/*
	var object = cE("input");

	object.setAttribute("type","hidden");
	object.setAttribute("value",array.files);	
	object.setAttribute("name","files");
	
	var attribute = [];

		attribute.tag 		= "input";
		attribute.type 		= "file";
		attribute.name 		= "fileupload";
		attribute.anexos 	= object.getAttribute('value');
		attribute.gwidth 	= "900";
		attribute.multiple	= "";
		attribute.onchange	= "formUpload(this);";	

	var fileupload = cEA(attribute);
	
		
	var attribute = [];

		attribute.tag 		= "div";
		attribute.class 	= "fileupload";

	var divFileUpload = cEA(attribute);	

	var attribute = [];

		attribute.tag 		= "icon";
		attribute.class 	= "icon-upload3";

	var divFileUploadEnviar = cEA(attribute);					

	var attribute = [];

		attribute.tag 		= "label";
		attribute.text 		= "enviar foto";

	var divFileUploadEnviar = cEA(attribute);	

	var attribute = [];

		attribute.tag 		= "uploadedStatus";

	var span = cEA(attribute);	
		

		
	div.appendChild(object);
		
	divFileUpload.appendChild(divFileUploadEnviar);
	divFileUpload.appendChild(fileupload);
		
	div.appendChild(divFileUpload);

	div.appendChild(span);	
		
	*/
	
	var attribute = [];

		attribute.tag 		= "icon";
		attribute.class 	= "icon-pencil";
	
	var icon = cEA(attribute);	
	
	icon.onclick=(function(){
		console.log(array);
		formEdit("users",array.codigo);
		navClose();
	});
	
	var attribute = [];

	attribute.tag 		= "uploadedFiles";

	var result = cEA(attribute);
		
	if(array.figures!==undefined){

		for(var x=0;x<array.figures.length;x++){

			addUploadFilesProfile(result,array.figures[x]);

		}

	}

	div.appendChild(result);
	div.appendChild(icon);
	
	addUploadFilesProfile(result,null);
	
	return div;	
  
}

function addUploadFilesProfile(local,filename){

	var div 				= cE("div");
	var figure 			= cE("figure");

	if(filename!==null){

		sA(figure,"style","background-image:url('"+localStorage.getItem("imgp")+filename+"');");

		div.appendChild(figure);

	}else{

		var icon 	= cE("icon");

		figure.setAttribute('style',"");
		figure.appendChild(icon);
		div.appendChild(figure);

		local.insertBefore(div, local.childNodes[0]);
		icon.setAttribute('class','icon-user');

	}
	
	local.insertBefore(div, local.childNodes[0]);

}

