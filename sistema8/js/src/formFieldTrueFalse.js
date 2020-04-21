function formMountTrueFalse(attribute){
	
 var div   = cE("div");	
	
	var icon  = cE("icon");
  icon.setAttribute("class","icon-");
	div.appendChild(icon); 
	icon.onclick=function(){formTrueFalse(this);};
	
  var label       = cE("label");
  
  var vhide = (attribute.value==="1")?"0":"1";


    div.setAttribute("hide",vhide);


    label.onclick=function(){formTrueFalse(this);};



    label.appendChild(cT(attribute.label));

    div.appendChild(label);

    attribute.type			= "text";
  
    var object = cE("input");

    for (var key in attribute){

 
        object.setAttribute(key,attribute[key]);


    }

    object.setAttribute("autocomplete","off");
    object.setAttribute("type","text");
    object.setAttribute("class","default");

    div.appendChild(object);
  
  return div;
  
}

function formTrueFalse(e){
	
	var hide = e.parentElement.getAttribute('hide');
	
	if(hide==1){
		e.parentElement.setAttribute('hide','0');
    got(e.parentElement,"input")[0].value="1";
    
	}else if(hide==0){
		e.parentElement.setAttribute('hide','1');
    got(e.parentElement,"input")[0].value="0";
	}
	
}