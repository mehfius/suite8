
function formMountSelectAjax(attribute){

  var div           = cE("div");

  var label         = cE("label");

      label.appendChild(cT(attribute.label));

      div.appendChild(label);  

  var finder        = cE("input");

      finder.setAttribute("name","findernew");
      finder.setAttribute("title",attribute.label);
      finder.setAttribute("id","finder"+attribute.name);

  var labelfigure   = cE("labelfigure");
  
      if(attribute.value.length){

        labelfigure.style.backgroundColor=(attribute.value[0].colors!==undefined)?attribute.value[0].colors:"";
        labelfigure.style.backgroundImage=(attribute.value[0].filename!==undefined)?"url("+localStorage.getItem("imgm")+attribute.value[0].filename+"?key="+attribute.value[0].key+")":"";

      }
  
  var icon				  = cE("icon");

  if(attribute.value.length<50){
    
      icon.setAttribute("class","icon-arrowdown");
    
  }

  var iconconfig				= cE("icon");
      iconconfig.setAttribute("class","icon-cog");
      iconconfig.setAttribute("modules",attribute.name);

  var input = cE("input");
      input.setAttribute("name",attribute.name);
      input.setAttribute("id",attribute.name);
      input.setAttribute("type","hidden");
      input.setAttribute("codigo",attribute.codigo);
      input.setAttribute("required",attribute.required);
  if(attribute.value[0]!==undefined){
      input.value=attribute.value[0].value;
  }
  finder.placeholder=(attribute.value[0]!==undefined)?attribute.value[0].label:"Escolha "+attribute.label;
  finder.setAttribute("class","default");
  finder.setAttribute("autocomplete","new-password");


  div.appendChild(labelfigure);

  div.appendChild(finder);
  div.appendChild(icon);

  var select = cE("selectajax");

      select.setAttribute("mouse","0");
  

  
	select.onmouseover = function(){
		
		this.setAttribute("mouse","1");
		
	}
	
	select.onmouseout = function(){
		
		this.setAttribute("mouse","0");
			
	}

	icon.onclick=(function(){
    label.focus();
  });
 
	finder.onkeyup = function() {
    
    if(finder.value.length>=3){
      
      loadOpt(this,attribute);
       
    }else{
      
      select.style.display="none";
      
    }

	};
  
  div.onblur = function() {console.log('teste')};
	
	div.appendChild(select);
	div.appendChild(input);

  return div;
	
}

function loadOpt(element,attribute){
  
	var url 	= localStorage.getItem("url")+'/admin/json/jsonGetTableView.php?p='+attribute.name+'|codigo|label&l=label|'+element.value;

	var xmlhttp;

	xmlhttp = new XMLHttpRequest();
 
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			
 			var json = JSON.parse(xmlhttp.responseText);

      //var select= document.getElementById("div"+attribute.name).getElementsByTagName("selectajax")[0];
      
      var select= element.parentElement.getElementsByTagName("selectajax")[0];
      console.log(select);
      
        race(select);

        for(var x=0;x<json.length;x++){

          select.appendChild(mountOpt(json[x],attribute));

        }
      
        if(json.length>=1){
          select.style.display='block';
        }else{
          select.style.display='none';
        }
      
		}
		
	};
	
	xmlhttp.open("GET", url, true);
	xmlhttp.send();  
  
}

function mountOpt(json,attribute){
  
  var opt    = document.createElement("opt");
  var label  = document.createElement("label");
  var figure = document.createElement("figure");
  
  label.appendChild(document.createTextNode(json.label));
  opt.setAttribute("codigo",json.codigo);
  
  
  if(json.colors!==undefined){

    figure.setAttribute("style","background-color:"+json.colors+";");

  }

  if(json.filename!==undefined){

    figure.setAttribute("style","background-image:url("+localStorage.getItem("imgm")+json.filename+"?key="+json.key+");");

  }
  
  opt.onclick=(function(){
    
    var finder = document.getElementById("finder"+attribute.name);
    var input  = document.getElementById(attribute.name);
    var select = document.getElementById("div"+attribute.name);

    var selectajax = select.getElementsByTagName("selectajax")[0];

    var labelfigure = select.getElementsByTagName("labelfigure")[0];
    
    if(json.colors!==undefined){
      
      selectajax.style.display="none";
      labelfigure.setAttribute("style","background-color:"+json.colors+";");
      
    }
    
    if(json.filename!==undefined){
      
       selectajax.style.display="none";
       labelfigure.setAttribute("style","background-image:url("+localStorage.getItem("imgm")+json.filename+"?key="+json.key+");");
      
    }
    
    input.value        = json.codigo;
    finder.value       = label.innerHTML;
    finder.placeholder = label.innerHTML;
    
  });
              

    
  opt.appendChild(figure);
  opt.appendChild(label);
  
  return opt;
  
}
