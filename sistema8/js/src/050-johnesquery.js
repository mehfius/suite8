
function getImageInfo(src,cb){
	
		var img = new Image();

						img.src = src
						
						img.onload = function(){

						var height = img.height;
						var width = img.width;
							
						// code here to use the dimensions
	
						cb();
					}
					


}
//get value of array
function getValueArray(array,field,value){
	
	var nArray= [];
	
	for(var x=0;x<array.length;x++){
		
		if (eval('array[x].'+field) == value){

			nArray.push(array[x]);
	
		}
		
	}

	return nArray;
}

// Get object by name
function gon(n){return document.getElementsByName(n);}

function gonFind(n){return document.getElementsByName(n).length;}

// Get object by id
function goi(id){return document.getElementById(id);}
function goiFind(id){return document.getElementById(id);}
function goiHtml(id,v){var html=goi(id);html.innerHTML+=v;}

// Get object by tag
function got(p,tag){
	
	if(p===0 || p=== null){
		
		var r = document.getElementsByTagName(tag);
		if(r.length){
			return document.getElementsByTagName(tag);
		}else{
			debuga('[' + arguments.callee.name + '] Elemento "'+tag+'" não encontrado' );
			return false;
		}
		
	}else if(p===undefined){
		
		debuga('[' + arguments.callee.name + '] Elemento "'+tag+'" não encontrado' );
		
		return false;
		
	}else{
		
		return p.getElementsByTagName(tag);
	}
	
}

function gotFind(tag){return document.getElementsByTagName(tag).length;}

function gotFindP(p,tag){return p.getElementsByTagName(tag).length;}

// Get url param, by position
function requestParam(n){var p = window.location.href.toString().split(window.location.host)[1];return p.split("/")[n];}

// Create element
function cE(tag) {debuga('[' + arguments.callee.name + '] Criado o elemento : <'+tag+'>'); return document.createElement(tag);}

// Create button
function cB(text) {debuga('[' + arguments.callee.name + '] Criado o botao : <'+text+'>');var button = cE("button");sA(button,"type","button");button.appendChild(cT(text));return button;}

// Create element with attributes
function cEA(attributes){
	
	var object = cE(attributes.tag);
	
	object.innerHTML=(attributes.text!==undefined)?attributes.text:"";
	
	for (var key in attributes){if(key!="tag" && key!="text"){sA(object,key,attributes[key]);}}
	
	return object;
	
}

// Create Textnode
function cT(textnode){return document.createTextNode(textnode);}

// Set Atribute
function sA(e,a,v){if(e!== null){e.setAttribute(a,v);}else{debuga('Element error');}}

//Remove all child elements
function race(e){while (e.firstChild) {e.removeChild(e.firstChild);}}

function goap(p,a,v){
	
  var matchingElements = [];
  var allElements = p.getElementsByTagName('*');
	
  for (var i = 0, n = allElements.length; i < n; i++)
  {
    if (allElements[i].getAttribute(a) === v){
      // Element exists with attribute. Add to array.
      matchingElements.push(allElements[i]);
		
    }
  }
	
  return matchingElements;
	
}

function goa(a,v){
  var matchingElements = [];
  var allElements = document.getElementsByTagName('*');
	
  for (var i = 0, n = allElements.length; i < n; i++)
  {
    if (allElements[i].getAttribute(a) === v){
      // Element exists with attribute. Add to array.
      matchingElements.push(allElements[i]);
		
    }
  }
	
  return matchingElements;
}

function rE(element){
	
	if(element===undefined){
		
		debuga('[' + arguments.callee.name + '] Elemento não encontrado' );
	}else if(element.length===0){
	}else if(element.length){

		while (element.length){

			debuga('[' + arguments.callee.name + '] Removido o elemento : ' + element[0].tagName+'>');
			element[0].parentNode.removeChild(element[0]);

		}

	}else{
    

		debuga('[' + arguments.callee.name + '] Removido o elemento : <' + element.tagName+'>');
		element.parentNode.removeChild(element);




	}	
	
}

function pO(tag) {

	element = document.getElementsByTagName(tag);

	if (element.length) {

		debuga("[" + arguments.callee.name + "] " + element.length + " Elements '" + tag + "' found");
		return element;

	} else {

		debuga("[" + arguments.callee.name + "] Element '" + tag + "' not found");
		return 0;
		
	}

}

function pegaObjetoPorAtributo(atributo){

	var matchingElements = [];
	var allElements = document.getElementsByTagName('*');
	
	for (var i = 0; i < allElements.length; i++)
	{
		if (allElements[i].getAttribute(atributo))
		{
			// Element exists with attribute. Add to array.
			matchingElements.push(allElements[i]);
		}
	}
	
	return matchingElements;

}

function pegaObjetoPorAtributoP(p,atributo){

	var matchingElements = [];
	var allElements = p.getElementsByTagName('*');
	
	for (var i = 0; i < allElements.length; i++)
	{
		if (allElements[i].getAttribute(atributo))
		{
			// Element exists with attribute. Add to array.
			matchingElements.push(allElements[i]);
		}
	}
	
	return matchingElements;

}

function debuga(mensagem) {

	//console.log("[" + arguments.callee.name + "]" + mensagem);

}

function removeAcento(strToReplace) {

	var string = (strToReplace);

    str_acento 		= "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";



    str_sem_acento 	= "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";
    nova 			="";

	for (var i = 0; i < string.length; i++) {

		if (str_acento.indexOf(string.charAt(i)) != -1) {

        	nova+=str_sem_acento.substr(str_acento.search(string.substr(i,1)),1);
        	
	    } else {

	        nova+=string.substr(i,1);

	    }
	    
	}

    return nova;

}