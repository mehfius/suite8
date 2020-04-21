function formMountPassword(attribute){
  
  var label       = cE("label");
	var div         = cE("div");
  
  label.appendChild(cT(attribute.label));

  div.appendChild(label);

	var object = cE("input");
	
	for (var key in attribute){
				
		if(attribute[key]!=="0" && attribute[key]!==""){
			object.setAttribute(key,attribute[key]);
		}

	}
	
	object.setAttribute("type","password");
	object.setAttribute("class","default");
	object.setAttribute("placeholder",attribute.label);
  div.appendChild(object);
  
  return div;
  
}