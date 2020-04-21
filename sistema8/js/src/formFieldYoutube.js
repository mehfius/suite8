function getStringFromYoutube(link){

  var i, r, rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
 
    r = link.match(rx);
  
  
    return r[1];
  
}

function formMountYoutube(attribute){
  
	var div    = cE("div");
 
	var object = cE("input");
  var figure = cE("figure");
  
	for (var key in attribute){
				
		if(attribute[key]!=="0" && attribute[key]!==""){
			object.setAttribute(key,attribute[key]);
		}

	}
	
	object.setAttribute("autocomplete","off");
	object.setAttribute("type","text");
	object.setAttribute("class","default");
	object.setAttribute("placeholder",attribute.label);
	object.setAttribute("required",attribute.required);
		
  figure.onclick=(function(){

    window.open(object.value,'_blank');

  });
  
  if(object.value){
    
    figure.setAttribute('style','background-image:url(https://img.youtube.com/vi/'+getStringFromYoutube(object.value)+'/0.jpg);');
  
  }
	
  object.onkeyup=(function(){
    
    var url 	= 'https://info8.com.br/sistema8/json/jsonYoutube.php?url='+object.value;

    var xmlhttp;

    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {

      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

          if(xmlhttp.responseText!='Not Found'){
            
            var json = JSON.parse(xmlhttp.responseText);
            
            div.setAttribute('error','0');
            
                figure.onclick=(function(){

          window.open(object.value,'_blank');

        });
             figure.setAttribute('style','background-image:url(https://img.youtube.com/vi/'+getStringFromYoutube(object.value)+'/0.jpg);');
	
          }else{
            
            figure.setAttribute('style','');
	
            div.setAttribute('error','1');
            
          }
        
        }

      }

    xmlhttp.open("GET", url, true);
    xmlhttp.send();   
    
  });
  
  
  div.appendChild(object);
  div.appendChild(figure);
  
  return div;
  
}


function reload(){
  
  
  
}