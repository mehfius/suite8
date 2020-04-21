function formMount(modules,codigo,cb){

	//var codigo 	= element.getAttribute("c");
	
	var url 	= localStorage.getItem("url")+'/json/'+modules+'/editar/'+codigo;

	var xmlhttp;
	var action = (codigo!==null)?"edit":"insert";
	
	//if(action=="edit"){
		
	//	element.appendChild(boxLoad());

	//}
	
	xmlhttp = new XMLHttpRequest();
 
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			
 			var json = JSON.parse(xmlhttp.responseText);
			
			if(action=="edit"){
				
				//var item = gibc(codigo);
				//item.setAttribute("action","1");
				formMountFields(modules,json,codigo);
				//rE(got(document,"box"));
				cb();
				
			}else if(action == "insert"){
	
				formMountFields(modules,json,codigo);
				
				cb();
				
			}
			
		}
		
	};
	
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
}

function formMountFields(modules,json,codigo){
	
	var window = cE("window");
	    window.setAttribute("modules",modules);

	var form=cE("form");
	    form.setAttribute("autocomplete","off");
  
	var header = cE("header");
		//header.setAttribute("style","background-color:"+localStorage.getItem("bgcolor")+";");

	window.appendChild(header);
	window.appendChild(form);
	
	var menu = cE("menu");
	
	    menu.setAttribute("style","background-color:"+localStorage.getItem("bgcolor")+";");

	form.appendChild(menu);
	
	document.body.appendChild(window);
	
	for(var x=0;x < json.length;x++){
		

		var type 		= json[x].type;
		var grid 		= json[x].grid;
		var gridmobile 		= json[x].gridmobile;
		
		var attribute = [];
		
		attribute.codigo		= codigo;
		attribute.label			= json[x].label;
		attribute.name			= json[x].name;
		attribute.title			= (json[x].title)?json[x].title:json[x].label;
		attribute.required	= json[x].required;
		attribute.pattern		= json[x].pattern;
		attribute.value			= (json[x].value!==undefined)?json[x].value:"";	
    attribute.list			= (json[x].list!==undefined)?json[x].list:"";	
		attribute.limit			= json[x].limit;
		attribute.grid			= json[x].grid;
		attribute.gridmobile= json[x].gridmobile;
		attribute.admin			= json[x].admin;
		attribute.attributes			= json[x].attributes;
		
		switch(type) {

		case "hide":

			var div = formMountHide(attribute);
			
          div.setAttribute('type',type);
				
			break;

		case "textarea":
				
			var div = formMountTextarea(attribute);
        
			    div.setAttribute('type',type);
	
			break;
				
		case "data":
				
			var div = formMountData(attribute);
        
			    div.setAttribute('type',type);
	
			break;
        
		case "text":
				
			var div = formMountText(attribute);
        
			    div.setAttribute('type',type);

			break;
				
    case "password":
				
			var div = formMountPassword(attribute);
        
			    div.setAttribute('type',type);

			break;
        
    case "youtube":
				
			var div = formMountYoutube(attribute);
        
			    div.setAttribute('type',type);

			break;
      
    case "trueorfalse":
				
			var div = formMountTrueFalse(attribute);
        
			    div.setAttribute('type',type);

			break;	
        
		case "texturl":
					
			var div = formMountTexturl(attribute);
        
	        div.setAttribute('type',type);

			break;
				
		case "texturlestablishment":

				var div = formMountTexturlestablishment(attribute);
				
            div.setAttribute('type',type);
        
			break;
				
		case "select":
        
      if(attribute.value=='undefined'){

          if(attribute.value.length<30){
            var div = formMountSelect(attribute);
          }else{
            var div = formMountSelectCustom(attribute);
          }

      }else{
      var div = formMountSelect(attribute);
      }
        	break;
   case "selectajax":


        var div = formMountSelectAjax(attribute);

        
			break;
				
		case "search":
	
			
			var div = formMountSelectCustom(attribute);
		
        
			break;
        
		case "multiple":
				
       var div = formMountMultiple(attribute);

           div.setAttribute('type',type);
        
			break;
        
		case "multiplehidden":
			
        var div = formMountMultipleHidden(attribute);

            div.setAttribute('type',type);
        
			break;
        
	  case "tag":
			
        var div = formMountTag(attribute);

            div.setAttribute('type',type);
        
		    break;
        
    case "taggroup":

      var div = formMountTagGroup(attribute);

          div.setAttribute('type',type);

      break;   
        
		case "fileupload":
				
        var div = formMountFileupload(attribute);
        
            div.setAttribute('type',type);

			break;	
				
		default:
				
			var div = formMountText(attribute);
			//console.log(type);

		}
    
	div.setAttribute('id','div'+attribute.name);
	div.setAttribute('grid',grid);
	div.setAttribute('gridmobile',gridmobile);

  if(attribute.admin=="1"){
      div.setAttribute('admin',attribute.admin);
  }

	form.appendChild(div);	
	
	}

	var label = cE("label");
	
	header.appendChild(btBack(codigo));
	
	header.appendChild(btHeaderSave(codigo));	
	
	header.appendChild(label);
	
		if(document.getElementsByName('files')[0]!==undefined){

			header.appendChild(btHeaderAttach());
			header.appendChild(btHeaderSeeAttach());

		}
	
	if(codigo===null){
		
		label.appendChild(cT("Novo "+gM(modules)));
		
	}else{

		label.appendChild(cT("Editando "+gM(modules)));
		
		header.appendChild(btHeaderPrint());

		header.appendChild(btHeaderDelete(codigo));
	
		got(document,"body")[0].setAttribute("open","1");
				
	}
  
  
	
	return form;
}

function formMountAutoStart(area,cb){
 
	var url 	= localStorage.getItem("url")+'/json/'+area+'/editar/null';

  var view 	= got(document,"view")[0];
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();
 
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			
 			var json = JSON.parse(xmlhttp.responseText);
     
				
			  cb(json);
		}
		
	};
	
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
  
}

function makeUrlFriendly(object){
	
	function convertToSlug(str){
		
 str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
  var to   = "aaaaaeeeeeiiiiooooouuuunc------";
  for (var i=0, l=from.length ; i<l ; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
			
	}
	
	var label = got(object,"input")[0]; 
	var url = cE("input");
	
	url.setAttribute('name','url');
	url.setAttribute('type','hidden');
	
	object.appendChild(url);
	
	url.setAttribute("value",convertToSlug(label.value));
	
	label.onkeyup = (function() {
		
		url.setAttribute("value",convertToSlug(this.value));
		
	});
	
	label.onblur = (function() {
		
		url.setAttribute("value",convertToSlug(this.value));
		
	});
	
}

function counter(div){
	
	function conta(object){
		
		var limit =	object.getAttribute("limit");
		var restante = limit-object.value.length;
		
		if(restante<0){
			object.parentNode.setAttribute("class","error");
		}else{
			object.parentNode.setAttribute("class","");
		}
		
		return  " ("+restante+" caracteres restantes)";
		
	}
	
	var object = pegaObjetoPorAtributoP(div,"limit");
	
	if(object.length){

		var label=got(div,"label")[0];
	
		var counter = cE("counter");
		var limit =	object[0].getAttribute("limit");
		
		label.appendChild(counter);
		
		counter.innerHTML=conta(object[0]);
		
		object[0].onkeyup=(function(){
			
			counter.innerHTML=conta(this);
			
		});
		
	}
	
}

function finder(object){
	
	var finder = cE("input");
	var label = got(object,"label");
	
	finder.setAttribute("type","text");
	finder.setAttribute("placeholder",label[0].innerHTML+" - Digite para procurar");
	finder.setAttribute("name","finder");
	finder.setAttribute("class","default");
  
	finder.onblur = function() {
		
	};  
  
	finder.onkeyup = function() {
    
    if(this.value.length>=3){
      
		var item = got(object,"opt");

		if(item.length){

			var string1 = removeAcento(this.value.toLowerCase());

			for(var x=0;x<item.length;x++){

				var ohtml=removeAcento(item[x].innerHTML.toLowerCase());

				if(item[x].getAttribute("selected")=="0"){

					if(ohtml.indexOf(string1) >= 0){			

						//item[x].style.display="block";
            item[x].setAttribute('found','1');
            
            
					}else{

						//item[x].style.display="none";
            item[x].setAttribute('found','0');
					}

				}


			}

	   
      
    }

    }else{
      
      for(var x=0;x<item.length;x++){

        item[x].setAttribute('found','0');

      }
    }
      
	};
	
	object.appendChild(finder);
	
}

function autoComplete(object,codigo){
	
	var label = goap(object,"name","label");
	
	var input = label[0];
	
	
	var datalist= cE("suggestsplaces");

	object.appendChild(datalist);
	
	input.onkeyup = function() {
		
		var url=localStorage.getItem("url")+'/admin/json/jsonGoogleplace.php?url='+this.value;

		xmlhttp = new XMLHttpRequest();

		xmlhttp.onreadystatechange = function() {

			race(datalist);
		
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

				var json = JSON.parse(xmlhttp.responseText);
				//console.log(json.predictions.length);
				
				for(x=0;x<json.predictions.length;x++){
					//console.log(x);
					console.log(json.predictions[x].description);
					
					var option = cE("option");
					var text = cT(json.predictions[x].description);
					
					option.setAttribute("place_id",json.predictions[x].place_id);
					option.appendChild(text);
					
					option.onclick=(function(){
						
						var url=localStorage.getItem("url")+'/admin/json/jsonGoogleplacedetails.php?place_id='+this.getAttribute("place_id");

						xmlhttp = new XMLHttpRequest();

						xmlhttp.onreadystatechange = function() {
							
							if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

								var json = JSON.parse(xmlhttp.responseText);
								
								var item=goa("c",codigo)[0];
								var address=goap(item,"name","address")[0];
								var contact=goap(item,"name","contact")[0];
								var googlemaps=goap(item,"name","googlemaps")[0];
								
								console.log(item);
								address.value=json.result.formatted_address;
								contact.value=json.result.international_phone_number;
								googlemaps.value=json.result.geometry.location.lat+","+json.result.geometry.location.lng;
								input.value=json.result.name;

								
							}
							
						};

						xmlhttp.open("GET", url, true);
						xmlhttp.send();
						
					});
					
					datalist.appendChild(option);
				
				}
				
			}

		};

		xmlhttp.open("GET", url, true);
		xmlhttp.send();
		
	};

}