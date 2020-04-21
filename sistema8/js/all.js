


/* ######## 050-johnesquery.js ######## */



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


/* ######## 100-default.js ######## */


function randomString(length) {
    return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
}

function loadAjax(url) {
	
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();
 
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			console.log(xmlhttp.responseText);

		}
	};

	xmlhttp.open("GET", url, true);
	xmlhttp.send();

}

function loadXMLDoc(url) {
	var xmlhttp;

	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}


	var returnJson  = null;
	var frase       = Array();
		frase[0]   	= 'Houve uma falha, por favor tente novamente'; 
		frase[1]   	= 'Mensagem enviada com sucesso';
 
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			returnJson = eval('(' + xmlhttp.responseText + ')');

			// if(returnJson == 0){

			// } else if (returnJson == 1) {

			// }

			escreve(returnJson, frase[returnJson]);

			//if (json.sucesso == 1) {

				// return ReturnJson;

				// console.log(ReturnJson)
			//} else {

			//	alert(json.resposta);
			//	console.log(json.debuga);

			//}

			/*
          if(xmlhttp.responseText){
           
          }else{

          }*/

		}
	};

	xmlhttp.open("GET", url, true);
	xmlhttp.send();



}

function isMobile() {


    if (sessionStorage.desktop) 
        return false;
    else if (localStorage.mobile) 
        return true;


    var mobile = ['iphone','ipad','android','blackberry','nokia','opera mini','windows mobile','windows phone','iemobile']; 
    for (var i in mobile) if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;


    return false;
}

function gibc(c){
  
  var tabela = got(document,"tabela")[0];
	var item = goap(tabela,"c",c)[0];
  
  return item;
  
}

function mountHeader(){
	
	if(!got(document,"header").length){

		var header  = cE("header");
				header.style.backgroundColor=localStorage.bgcolor;
		
		var a 		= cE("a");

		var logo    = cE("logo");
		var span    = cE("span");	
		var text    = cT(localStorage.systemname);

		span.appendChild(text);
		logo.appendChild(span);
		a.appendChild(logo);

		header.appendChild(a);

		got(document,"body")[0].appendChild(header);

	}
	
}


// Get system area
function gA(){return document.body.getAttribute('modules');}

// Get system modules label
function gM(name){
	
	var array = JSON.parse(localStorage.anav);
	var nArray= getValueArray(array,'name',name)[0];

	return nArray.title;
	
}

// Get system modules info
function gMI(name,info){
	
	var array = JSON.parse(localStorage.anav);

	var nArray= getValueArray(array,'name',name)[0];

	return eval("nArray."+info);
	
}

// Loading 
function boxLoad(){
	
	var box 	= cE("box");
	var icon 	= cE("icon");

	box.appendChild(icon);

	return box;
	
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

function loadXMLDoc(url) {
	var xmlhttp;

	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}


	var returnJson  = null;
	var frase       = Array();
		frase[0]   	= 'Houve uma falha, por favor tente novamente'; 
		frase[1]   	= 'Mensagem enviada com sucesso';
 
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			returnJson = eval('(' + xmlhttp.responseText + ')');


			escreve(returnJson, frase[returnJson]);



		}
	};

	xmlhttp.open("GET", url, true);
	xmlhttp.send();



}

function mountRanking(){

 var url 	= localStorage.getItem("url")+'/admin/json/jsonRanking.php?area='+gA();
  
	var ranking 	= got(document,"ranking")[0];
  race(ranking);
	var xmlhttp;

	
	xmlhttp = new XMLHttpRequest();
 
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			
 			var json = JSON.parse(xmlhttp.responseText);
			
				ranking.appendChild(mountRankingLine(json));
				
			}
			
		}
  
 	xmlhttp.open("GET", url, true);
	xmlhttp.send();
  
}

function mountRankingLine(json){
  
  var div = cE("div");
  
  var line = cE("line");
  var label = cE("span");
  var count = cE("span");
  label.appendChild(cT("Colaborador"));
  count.appendChild(cT("Posts"));
  line.appendChild(label);
  line.appendChild(count);
  div.appendChild(line);  
  
  for(var x=0;x < json.length;x++){
    
    var line = cE("line");
    var label = cE("span");
    var count = cE("span");
    label.appendChild(cT(json[x].label));
    count.appendChild(cT(json[x].count));
    line.appendChild(label);
    line.appendChild(count);
    div.appendChild(line);
    
  }
  
  return div;
  
}


/* ######## 115-sectionMount.js ######## */


function mountSection(){
	
	var section = cE("section");
	var view 		= cE("view");

	var ranking 	= cE("ranking");

	

	section.appendChild(view);
	
	got(document,"body")[0].appendChild(section);

}


/* ######## 300-mount.js ######## */



function changeTitle(name){
		
		var array = JSON.parse(localStorage.anav);
		var nArray= getValueArray(array,'name',name)[0];
	
		var logo 	= got(document,"logo")[0];
		var span  = cE("span");
		var title = cT(nArray.title);
	
		race(logo);
	
		span.appendChild(title);
		logo.appendChild(span);
	
		

}


function mountOrder(){
  
  var order = cE("order");
  
  var lbOrder = cE('label');
  
  lbOrder.appendChild(cT('Ordenar por :'));
  lbOrder.setAttribute("class","order");
  
  var btOrderLabel=cB("nome");
  btOrderLabel.setAttribute("class","order");
  
  btOrderLabel.onclick=(function(){
    
		localStorage.order=1;
		viewLoad(gA());
			
	});
  
  var btOrderData=cB("data");
  
  btOrderData.setAttribute("class","order"); 
  
  btOrderData.onclick=(function(){
    
		localStorage.order=0;
		viewLoad(gA());
			
	});
  
  if(localStorage.order==1){
    btOrderLabel.setAttribute("selected","1");
  }else{
    btOrderData.setAttribute("selected","1");
  }
  
  order.appendChild(lbOrder);
  order.appendChild(btOrderLabel);
	order.appendChild(btOrderData);
  
  return order;
  
}




/* ######## 400-nav.js ######## */



function navMount(array){

	if(gotFind("nav")){
		rE(got(document,"nav")[0]);

	}
	
	var html = '';
	var grade   = cE('grade');
	var nav  	= cE('nav');
	    nav.appendChild(profile(array.userinfo));

	var body = got(document,'body')[0];
	
	var anav = [];
	
	var arraynav = array.nav;

    localStorage.anav=JSON.stringify(arraynav);
    localStorage.userareas=array.userinfo.areas;
  
    for(var x = 0; x < arraynav.length; x++) {

      if(x===0 || arraynav[x].groups!==arraynav[x-1].groups){

        var span = cE('span');
        span.appendChild(cT(arraynav[x].groups));
        nav.appendChild(span);

      }

      var a 			= cE('a');
      var count 	= cE('count');


      count.appendChild(cT("("+arraynav[x].count+")"));

      //a.setAttribute('href','#'+arraynav[x].name);
      a.setAttribute('modules',arraynav[x].name);
      a.setAttribute('c',arraynav[x].codigo);
      a.appendChild(cT(arraynav[x].label));
      a.appendChild(count);

      a.onclick=(function(){
        resetHeaderOptions();
        modulesOpen(this);
        navClose();
        gridHide();
       
        //mountRanking();

        document.body.setAttribute("loading","1");
      });

      nav.appendChild(a);

    }
		
	var a = cE('a');

	a.onclick=(function(){

		//this.appendChild(boxLoad());
		logout();
    navClose();
		formClose();

	});
	
	a.appendChild(cT('Sair'));

	nav.appendChild(a);
	
	nav.setAttribute('id','nav');

	grade.onclick=(function(){
		
		navClose();
		formClose();

	});
	
	body.appendChild(nav);
	body.appendChild(grade);
	
	
}

function navClose(){
	
		var nav=got(document,"nav")[0];
	
				nav.setAttribute('class','hide');
	
}


/* ######## 419-nav-profile.js ######## */



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




/* ######## 425-navSuite.js ######## */


function loadNavSuite(){
  
  var navsuite = cE("navsuite");
  document.body.setAttribute("navsuite","0");
  
  document.body.appendChild(navsuite);

  
}


/* ######## 500-lazyload.js ######## */



function lazyloadOld() {
  
//got(document,"span")[0].innerHTML=(document.body.offsetHeight + document.body.scrollTop + document.documentElement.scrollTop)+">="+(document.body.scrollHeight-10);
  
    if ((document.body.offsetHeight + document.body.scrollTop + document.documentElement.scrollTop +100 >= (document.documentElement.scrollHeight-10))) {
			
			var filter = got(document,"filter")[0];
			
			var input = got(document,"input")[0];
			
			if(input.value===""){
			
			loadMore();	
        
			}
			
      
    }

  
}
   
function lazyload() {

  
    var rolled = document.body.offsetHeight + document.body.scrollTop + document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight;
 // alert(rolled+" - "+height);
    if ((rolled) > (height-10)) {
			
      var item = got(got(document,"tabela")[0],"item");

      var limit=item.length+",10";

      loadLazyJson(limit,function(json){

          var tabela = got(document,"tabela")[0];

          for(var x=0;x<json.length;x++){
            
            var item = cE('item');

            item.setAttribute('c',json[x].codigo);

            loadItem(item,json[x]);

            tabela.appendChild(item);
            
          }

       
      });
  
    }

}

function loadMore(){
  
  var item = got(got(document,"tabela")[0],"item");
  var display="0";
  
  for(var x=0;x<item.length;x++){

    display=getComputedStyle(document.getElementsByTagName("item")[x]).display;
    
    if(display=="none"){
      
      for(var y=x;y<x+10;y++){
        
         if(item[y]!==undefined){
           item[y].style.display="block";
         }else{
           break;
         }
        
      }
      
      break;
     
    }
    
  }
 
}

function loadLazyJson(limit,cb){
  
  var url = localStorage.getItem("url")+'/admin/json/jsonView.php?&area='+gA()+'&limit='+limit;
		
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

function loadMoreOld(){
  
  var item = got(got(document,"tabela")[0],"item");
  var display="0";
  
  for(var x=0;x<item.length;x++){

    display=getComputedStyle(document.getElementsByTagName("item")[x]).display;
    
    if(display=="none"){
      
      for(var y=x;y<x+10;y++){
         if(item[y]!==undefined){
           item[y].style.display="block";
         }else{
           break;
         }
        
      }
      
      break;
     
    }
    
  }
 
}


/* ######## 550-tabelaLoad.js ######## */



function tabelaLoad(modules,cb){
	
  var e = goa("filters","1");

  var param="";
  
  for(var x=0;x<e.length;x++){
    
    //console.log(e[x].getAttribute("filtroname"));
    if(e[x].value!==""){
      
      param+=e[x].getAttribute("filternamemodules")+"="+e[x].value;
      
    }
    
  }
  
	var url = localStorage.getItem("url")+'/admin/json/jsonView.php?area='+gA()+'&'+param;

  
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function() {
		
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			
			var array = JSON.parse(xmlhttp.responseText);
						
      var tabela   = cE('tabela');

      for(var x = 0; x < array.length; x++) {

        var item = cE('item');

        item.setAttribute('c',array[x].codigo);

        loadItem(item,array[x]);

        tabela.appendChild(item);

      }

			cb(tabela);
			
		}
		
	};
	
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

}



/* ######## 650-adsense.js ######## */


function adsense(){
  
  var ins = cE("ins");
  
  ins.setAttribute("style","width:320px;height:100px;float:left;border-top: 3px solid #fff;");
  ins.setAttribute("data-ad-client","ca-pub-7384375628902072");
  ins.setAttribute("data-ad-slot","2673791548");
  ins.setAttribute("class","adsbygoogle");
  
  return ins;
  
}

function adsenseVertical(){
  
  var ins = cE("ins");
  
  ins.setAttribute("style","display:inline-block;width:120px;height:600px");
  ins.setAttribute("data-ad-client","ca-pub-7384375628902072");
  ins.setAttribute("data-ad-slot","7149526584");
  ins.setAttribute("class","adsbygoogle");
  
  var adsensevertical = cE("adsensevertical");
  
  adsensevertical.appendChild(ins);
  
  return adsensevertical;  
  
  
} 


/* ######## 710-upload-resize.js ######## */




function resizeImage(file,cb){

// Get the image

	var oFReader = new FileReader();
	oFReader.readAsDataURL(file);
	
	oFReader.onload = function (oFREvent) {

		var temp = new Image();

		temp.src=oFREvent.target.result;

		temp.onload = function(){
		
			// callback(image);

			var image = convertCanvasToFile(convertImageToCanvas(temp));

			// Actions
			//document.getElementById("canvasHolder").appendChild(canvas);
			
 			//if(this.width!=this.height){
				
			//	alert("O sistema só permite foto quadrada. Recorte a foto e tente novamente.");
				
 		//	}else{
				
				cb(image);
				
		//	}

			
			
			
		};
		
	};

	// Converts image to canvas; returns new canvas element
	function convertImageToCanvas(image) {

		var canvas = document.createElement("canvas");

			var width  = 1280;
			var height = width * (image.height / image.width);

			canvas.height = height;
			canvas.width = width;

			canvas.getContext("2d").drawImage(image, 0, 0,width,height);

		return canvas;

	}

	// Converts canvas to an image
	function convertCanvasToImage(canvas) {

		var image = new Image();

		image.src = canvas.toDataURL("image/jpeg");

		return image;

	}

	function convertCanvasToFile(canvas) {
	
		var dataURL = canvas.toDataURL("image/jpeg");

		var blobBin = atob(dataURL.split(',')[1]);
		var array = [];

		for(var i = 0; i < blobBin.length; i++) {

			array.push(blobBin.charCodeAt(i));

		}

		var file=new Blob([new Uint8Array(array)], {type: 'jpg'});

		return file;
		
	}

}


/* ######## crateObject.js ######## */


function createObject(text){


  var json = JSON.parse(text);

  var field = document.createElement(json.tag);
  
  Object.entries(json).forEach(([key, value]) => {
    
    switch (key) {
    case 'innerhtml':field.innerHTML=json.innerhtml;break;
    case 'tag':break;        
    case 'textnode':field.appendChild(document.createTextNode(json.textnode));break;
    case 'pattern':field.setAttribute(key,decodeURI(value));break;  
    case 'value':field.value=json.value;break;
    default:field.setAttribute(key,value);}  
    
  })
  
  return field;
 
}


/* ######## form.js ######## */


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


/* ######## formFieldData.js ######## */


function formMountData(attribute){
  
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
	
	//object.setAttribute("data-mask","__/__/____");
	
	//object.setAttribute("onkeypress","maskDate(this)");
	//object.setAttribute("onblur","verifyDate(this)");
	object.setAttribute("autocomplete","off");
	object.setAttribute("type","date");
	object.setAttribute("class","default");
	object.setAttribute("maxlength","10");

	
  div.appendChild(object);
  
  return div;
  
}

function verifyDate(e){
	

	
	if(e.value.match(/^\d{2}\/\d{2}\/\d{4}$/) == null){
		e.value="";
	}
	
}

function maskDate(e){
	
	var date = e.value;
	
  if (date.match(/^\d{2}$/) !== null) {
     e.value = date + '/';
  }else if (date.match(/^\d{2}\/\d{2}$/) !== null) {
     e.value = date + '/';
  }
	
	
}


function applyDataMask(field) {
    var mask = field.dataset.mask.split('');
    
    // For now, this just strips everything that's not a number
    function stripMask(maskedData) {
        function isDigit(char) {
            return /\d/.test(char);
        }
        return maskedData.split('').filter(isDigit);
    }
    
    // Replace `_` characters with characters from `data`
    function applyMask(data) {
        return mask.map(function(char) {
            if (char != '_') return char;
            if (data.length == 0) return char;
            return data.shift();
        }).join('')
    }
    
    function reapplyMask(data) {
        return applyMask(stripMask(data));
    }
    
    function changed() {   
        var oldStart = field.selectionStart;
        var oldEnd = field.selectionEnd;
        
        field.value = reapplyMask(field.value);
        
        field.selectionStart = oldStart;
        field.selectionEnd = oldEnd;
    }
    
    field.addEventListener('click', changed)
    field.addEventListener('keyup', changed)
}



/* ######## formFieldHide.js ######## */


function formMountHide(attribute){
	
 var div   = cE("div");	
	
	var icon  = cE("icon");
	    icon.setAttribute("class","icon-");
  
			div.appendChild(icon); 
	
			icon.onclick=function(){formHide(this);};
	
	
  var label       = cE("label");
  
  var vhide = (attribute.value)?"0":"1";

			div.setAttribute("hide",vhide);

			label.onclick=function(){formHide(this);};

			label.appendChild(cT(attribute.label));

			div.appendChild(label);

			attribute.type			= "text";

			var object = cE("input");

			for (var key in attribute){

				if(attribute[key]!=="0" && attribute[key]!==""){
					
					object.setAttribute(key,attribute[key]);
					
				}

			}

			object.setAttribute("autocomplete","off");
			object.setAttribute("type","text");
			// object.setAttribute("class","default");

			div.appendChild(object);
  
  return div;
  
}

function formHide(e){
	
	var hide = e.parentElement.getAttribute('hide');
	
	if(hide==1){
		e.parentElement.setAttribute('hide','0');
	}else if(hide==0){
		e.parentElement.setAttribute('hide','1');
	}
	
}


/* ######## formFieldMultiple.js ######## */


function formMountMultiple(attribute){
 
  var label       = cE("label");
	var div         = cE("div");
  
  label.appendChild(cT(attribute.label));
  div.appendChild(label);

  div.setAttribute("class","multiple");
  //finder(div);

		var select = cE("multiple");
		var input  = cE("input");
		var valor  = (attribute.value[0].value[0]==",")?attribute.value[0].value:","+attribute.value[0].value;
	
		input.setAttribute("name",attribute.name);
		input.setAttribute("title",attribute.title);
		input.setAttribute("value",valor);
		input.setAttribute("autocomplete","off");
		input.setAttribute("required","");
		input.setAttribute("type","hidden");
		input.setAttribute("tipo","select");	
		select.appendChild(input);
		
		var arrayS = attribute.value;

		for (var keyS in arrayS){
			
			var codigo = arrayS[keyS].codigo;
			var label  = arrayS[keyS].label+" ("+arrayS[keyS].codigo+")";
			
			var bt = cB(label);
			
			bt.setAttribute("value",codigo);
			
			var selected = valor.indexOf(","+codigo+","); 
			
			if(selected>=0){
		
				bt.setAttribute('selected','1');

			}else{
				
				bt.setAttribute('selected','0');
				
			}
			
			bt.onclick=(function(){
				
				//var bt 		= got(this.parentNode,"button");
				var attr = this.getAttribute("selected");
				
				if(attr==1){
					
					this.setAttribute("selected","0");
					var valor = ","+this.value+",";
					var text = input.value;
					var x = text.replace(valor,","); 
					input.value=x;
					
				}else{
					
					this.setAttribute("selected","1");
					var valor = this.value+",";
					input.value=input.value+valor;
					
				}

			});

			select.appendChild(bt);

		}
	

	
	  div.appendChild(select);

  return div;
	
}




/* ######## formFieldMultipleHidden.js ######## */



function formMountMultipleHidden(attribute){
                      
  var label       = cE("label");
	var div         = cE("div");
  var view        = cE("multipleview");
 
      view.appendChild(multipleAdd(attribute));
  
      label.appendChild(cT(attribute.label));

      div.appendChild(label);
      div.setAttribute("class","multiplehidden");

  var select = cE("multiplehidden");
 
      select.appendChild(multipleHiddenClose());
  
  var input  = cE("input");
  
  var valor  = (attribute.value[0].value[0]==",")?attribute.value[0].value:","+attribute.value[0].value;
	
      input.setAttribute("name",attribute.name);
      input.setAttribute("title",attribute.title);
      input.setAttribute("value",valor);
      input.setAttribute("autocomplete","off");
      input.setAttribute("required","");
      input.setAttribute("type","hidden");
      input.setAttribute("tipo","select");
  
      multipleHiddenFinder(select);
  
		  select.appendChild(input);
		
	var arrayS = attribute.value;

		for (var keyS in arrayS){
			
			var codigo = arrayS[keyS].codigo;
			var label  = arrayS[keyS].label;
			
			var bt = cE("opt");
      
			    bt.appendChild(cT(label));
			    bt.setAttribute("value",codigo);
			
			var selected = valor.indexOf(","+codigo+","); 
			
			if(selected>=0){
		
				bt.setAttribute('selected','1');

          var list = [];

          list.label=label;
          list.codigo=codigo;

          view.appendChild(coolbutton(list));        
        
			}else{
				
				bt.setAttribute('selected','0');
				
			}
			
			bt.onclick=(function(){
				
				var attr = this.getAttribute("selected");
				
				if(attr==1){
					
					this.setAttribute("selected","0");
					var valor = ","+this.getAttribute('value')+",";
					var text = input.value;
					var x = text.replace(valor,","); 
					input.value=x;
					
          var multipleview = got(this.parentElement.parentElement,"multipleview")[0];
          
          rE(goap(multipleview,"c",this.getAttribute('value'))[0]);
        
          
				}else{
					
					this.setAttribute("selected","1");
					var valor = this.getAttribute('value')+",";
					input.value=input.value+valor;
          
          var list = [];
          
          list.label=this.innerHTML;
          list.codigo=this.getAttribute('value');
          
          var multiple = this.parentElement.parentElement;
          var multipleview = got(multiple,"multipleview")[0];
          multipleview.appendChild(coolbutton(list));
					
				}

			});

			select.appendChild(bt);

		}
	
	  div.appendChild(select);
    div.appendChild(view);
  
  return div;
	
}

function multipleHiddenClose(){
  
  var icon  = cE("icon");
      icon.setAttribute("class","icon-cross");
  
 
      icon.onclick=(function(){this.parentElement.parentElement.setAttribute("search","0");});
  
  return icon;
  
}

function multipleAdd(attribute){
  
  var icon  = cE("icon");
      icon.setAttribute("class","icon-plus");
  
  var label = cE("label");
      label.appendChild(cT(attribute.title));
  
  var btadd = cE("add");
      btadd.onclick=(function(){this.parentElement.parentElement.setAttribute("search","1");});
  
  
      btadd.appendChild(icon);
      btadd.appendChild(label);
    
  return btadd;
  
}
function coolbutton(list){
  
  var div     = cE("div");
  var label   = cE("label");
  var figure  = cE("figure");
  var close   = cE("icon"); 
  
      close.setAttribute("class","icon-cross");
  
  var text = cT(list.label);
  
  	close.onclick=(function(){
      
				if(confirm("Tem certeza que deseja remover ?")){
          
          var multiplehidden=got(this.parentElement.parentElement.parentElement,"multiplehidden")[0];

          var input = got(multiplehidden,"input")[1];

          var valor = ","+this.parentElement.getAttribute("c")+",";
          var text = input.value;
          var x = text.replace(valor,","); 

              input.value=x;
              rE(this.parentElement);

        }
			
        
    });
      
      label.appendChild(text);
      div.appendChild(figure);
      div.appendChild(label);
      div.appendChild(close);
  
      div.setAttribute('c',list.codigo);
  
  return div;
  
}

function multipleHiddenFinder(object){
	
	var finder = cE("input");
	//var label = got(object,"label");
	
      //finder.setAttribute("type","text");
      finder.setAttribute("placeholder","Digite para procurar");
      finder.setAttribute("name","finder"); 
  
	finder.onkeyup = function() {
    
    var item = got(object,"opt");
    
    if(this.value.length>=3){
      
      if(item.length){

        var string1 = removeAcento(this.value.toLowerCase());

        for(var x=0;x<item.length;x++){

          var ohtml=removeAcento(item[x].innerHTML.toLowerCase());

          //if(item[x].getAttribute("selected")=="0"){

            if(ohtml.indexOf(string1) >= 0){			

              //item[x].style.display="block";
              item[x].setAttribute('found','1');


            }else{

              //item[x].style.display="none";
              item[x].setAttribute('found','0');
            }
          //}
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


/* ######## formFieldPassword.js ######## */


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


/* ######## formFieldSearchmulti.js ######## */



function formMountSearchMulti(attribute){

    var div         = cE("div");
  
    var label       = cE("label");

        label.appendChild(cT(attribute.label));
  
        div.appendChild(label);
 
		var finder       = cE("input");
	
				finder.setAttribute("name","finder");
		    finder.setAttribute("autocomplete","new-password")
	
		var labelfigure       = cE("labelfigure");

			
	
		var icon				= cE("icon");
	
		if(attribute.value.length<50){
				icon.setAttribute("class","icon-arrowdown");
		}
	
		var iconconfig				= cE("icon");
				iconconfig.setAttribute("class","icon-cog");
				iconconfig.setAttribute("modules",attribute.name);
				//ipconfig.setAttribute("");
	
				iconconfig.onclick=(function(){
					
					if(confirm("Tem certeza que deseja mudar de página?")){
						
						modulesOpen(this);
						formClose();
						
					}else{
						
					};
					
				});
	
		var input = cE("input");
				input.setAttribute("name",attribute.name);
				input.setAttribute("type","hidden");
				input.setAttribute("codigo",attribute.codigo);
				input.setAttribute("required",attribute.required);
	
	
		finder.placeholder="Escolha "+attribute.label;
		finder.setAttribute("class","default");

	
		div.appendChild(labelfigure);
		div.appendChild(finder);
		div.appendChild(icon);
		div.appendChild(iconconfig);
	
		var select = cE("select3");
				
	select.setAttribute("mouse","0");
	
	if(attribute.value!==undefined){
		
		var valor  = (attribute.value[0].value!=="")?attribute.value[0].value:"1";

		var arrayS = attribute.value;

		for (var keyS in arrayS){

			var codigo  = arrayS[keyS].codigo;
			var alabel  = arrayS[keyS].label;

			var bt 			= cE("opt");
			
			var optlabel		= cE("label");
					optlabel.appendChild(cT(alabel));
			
			var optfigure 	= cE("figure");
			
			if(arrayS[keyS].filename!==null){
				
					optfigure.setAttribute("style","background-image:url("+localStorage.getItem("imgm")+arrayS[keyS].filename+"?key="+arrayS[keyS].key+");");
				
			}

			if(arrayS[keyS].colors!==null){
				
					optfigure.setAttribute("style","background-color:"+arrayS[keyS].colors+";");
				
			}
			
			bt.appendChild(optfigure);
			bt.appendChild(optlabel);
			
			bt.setAttribute("value",codigo);

			if(attribute.name=="colors"){
				
				optfigure.setAttribute("style","background-color:"+alabel+";");
			}
				
			bt.onclick=(function(){
				
				input.value=this.getAttribute("value");
				label.value=got(this,"label")[0].innerHTML;
				label.placeholder=got(this,"label")[0].innerHTML;
				//var select3 = document.getElementsByName(attribute.name);
				var style=got(this,"figure")[0].getAttribute("style");
				
				labelfigure.setAttribute("style",style);
				
				var select3=this.parentElement;
				
				var opt = got(select3,"opt");
				
				for (var x=0;x<opt.length;x++){
					
					opt[x].setAttribute("selected",false);
					opt[x].style.display="none";
				}
				
				this.setAttribute('selected',true);
				
			});
			
			if(codigo==arrayS[keyS].value){
				
				label.placeholder=alabel;
				input.value=codigo;
				bt.setAttribute('selected',true);
				
				var style=got(bt,"figure")[0].getAttribute("style");
				
				labelfigure.setAttribute("style",style);
				
				
				
			}else{

			}
			//bt.setAttribute('selected',false);
			select.appendChild(bt);

		}
	}
	
	select.onmouseover = function(){
		
		this.setAttribute("mouse","1");
		
	}
	
	select.onmouseout = function(){
		
		this.setAttribute("mouse","0");
			
	}
	
	label.onblur = function() {
		
		if(select.getAttribute("mouse")==0){
			
			var item = got(select,"opt");

			for(var x=0;x<item.length;x++){

				item[x].style.display="none";

			}
			label.value="";
		}
		
	};
	
	label.onclick = function() {
		
		if(attribute.value.length<50){
				var item = got(select,"opt");

					for(var x=0;x<item.length;x++){

								item[x].style.display="block";

				}
		}
		
	};
	
		label.onkeyup = function() {

		var item = got(select,"opt");

		if(item.length && this.value.length>3){

			var string1 = removeAcento(this.value.toLowerCase());

			for(var x=0;x<item.length;x++){

				var ohtml=removeAcento(item[x].innerHTML.toLowerCase());

					if(ohtml.indexOf(string1) >= 0){			

						item[x].style.display="block";

					}else{

						item[x].style.display="none";

					}

			}

		}else{
			
			for(var x=0;x<item.length;x++){
		
				item[x].style.display="none";

			}
			
		}

	};
	
	div.appendChild(select);
	//var selectgrid	= cE("selectgrid");
	//div.appendChild(selectgrid);
	div.appendChild(input);

  return div;
	
}



/* ######## formFieldSelect.js ######## */


function formMountSelect(attribute){
	 
    var div         = cE("div");
  
    var label       = cE("label");
  
		var placeholder = cE("placeholder");
 
		var icon				= cE("icon");
				icon.setAttribute("class","icon-arrow-down");
 
	
    label.appendChild(cT(attribute.label));
  
		placeholder.appendChild(cT("Selecione"));
		placeholder.setAttribute("class","default");

    div.appendChild(label);
		div.appendChild(placeholder);
		div.appendChild(icon);
		//div.appendChild(iconconfig);
	
		var select = cE("select");
				select.setAttribute("name",attribute.name);
	
	if(attribute.value!==undefined){
		var valor  = (attribute.value[0].value!=="")?attribute.value[0].value:"1";

		var arrayS = attribute.value;

		var bt = cE("option");
		select.appendChild(bt);

		bt.appendChild(cT("Selecione"));
    
   
    
		for (var keyS in arrayS){

			var codigo = arrayS[keyS].codigo;
			var alabel  = arrayS[keyS].label;

			var bt = cE("option");

			bt.appendChild(cT(alabel));

			bt.setAttribute("value",codigo);

			if(attribute.name=="colors"){
				bt.setAttribute("style","background-color:"+alabel+";");
			
			}

			if(codigo==arrayS[keyS].value){
				

				placeholder.innerHTML=alabel;
		
				bt.setAttribute('selected',true);
				

			}else{

				//bt.setAttribute('selected','0');

			}

			select.appendChild(bt);

		}
	}
	
		
	
		select.onchange=(function(){
			placeholder.innerHTML=this.options[this.selectedIndex].innerHTML;
		});
	
	  div.appendChild(select);
  
  return div;
	
}

function formMountSelectCustom(attribute){

    var div           = cE("div");
  
    var label         = cE("label");

        label.appendChild(cT(attribute.label));
  
        div.appendChild(label);  
  
		var finder        = cE("input");
	
				finder.setAttribute("name","findernew");
        finder.setAttribute("title",attribute.label);
	
		var labelfigure   = cE("labelfigure");

		var icon				  = cE("icon");
	
		if(attribute.value.length<50){
				icon.setAttribute("class","icon-arrow-down");
		}
	
		var iconconfig				= cE("icon");
				iconconfig.setAttribute("class","icon-cog");
				iconconfig.setAttribute("modules",attribute.name);
				//ipconfig.setAttribute("");
	
				iconconfig.onclick=(function(){
					
					if(confirm("Tem certeza que deseja mudar de página?")){
						
						modulesOpen(this);
						formClose();
						
					}else{
						
					};
					
				});
	
		var input = cE("input");
				input.setAttribute("name",attribute.name);
				input.setAttribute("type","hidden");
				input.setAttribute("codigo",attribute.codigo);
				input.setAttribute("required",attribute.required);
	
		finder.placeholder="Escolha "+attribute.label;
		finder.setAttribute("class","default");
		finder.setAttribute("autocomplete","new-password");
	
  
  
		div.appendChild(labelfigure);
  
		div.appendChild(finder);
		div.appendChild(icon);
		//div.appendChild(iconconfig);
	
		var select = cE("select3");
				
	      select.setAttribute("mouse","0");
  
	//console.log("name"+attribute.name+" - valor:"+attribute.value);
  
	if(attribute.value!==undefined){
		
		var valor  = (attribute.value[0].value!=="")?attribute.value[0].value:"1";

		var arrayS = attribute.value;

		for (var keyS in arrayS){

			var codigo  = arrayS[keyS].codigo;
			var alabel  = arrayS[keyS].label;

			var bt 			= cE("opt");
			
			var optlabel		= cE("label");
					optlabel.appendChild(cT(alabel));
			
			var optfigure 	= cE("figure");
			
			if(arrayS[keyS].filename!==undefined){
				
					optfigure.setAttribute("style","background-image:url("+localStorage.getItem("imgm")+arrayS[keyS].filename+"?key="+arrayS[keyS].key+");");
				
			}

			if(arrayS[keyS].colors!==undefined){
				
					optfigure.setAttribute("style","background-color:"+arrayS[keyS].colors+";");
				
			}
			
      if(arrayS[keyS].filename!==undefined || arrayS[keyS].colors!==undefined){
        
			  bt.appendChild(optfigure);
        
      }
      
      
			bt.appendChild(optlabel);
			
			bt.setAttribute("value",codigo);

			if(attribute.name=="colors"){
				
				optfigure.setAttribute("style","background-color:"+alabel+";");
			}
				
			bt.onclick=(function(){
				
				input.value=this.getAttribute("value");
				finder.value=got(this,"label")[0].innerHTML;
				finder.placeholder=got(this,"label")[0].innerHTML;
				//var select3 = document.getElementsByName(attribute.name);
				var style=got(this,"figure")[0].getAttribute("style");
				
				labelfigure.setAttribute("style",style);
				
				var select3=this.parentElement;
				
				var opt = got(select3,"opt");
				
				for (var x=0;x<opt.length;x++){
					
					opt[x].setAttribute("selected",false);
					opt[x].style.display="none";
				}
				
				this.setAttribute('selected',true);
				select3.style.display="none";
        
			});
			
			if(codigo==arrayS[keyS].value){
				
				finder.value=alabel;
				input.value=codigo;
        
				bt.setAttribute('selected',true);
        
        if(got(bt,"figure").length){
          
				  var style=got(bt,"figure")[0].getAttribute("style");
          labelfigure.setAttribute("style",style);
          
        }
				
			}else{

			}
			//bt.setAttribute('selected',false);
			select.appendChild(bt);

		}
    
	}
	
	select.onmouseover = function(){
		
		this.setAttribute("mouse","1");
		
	}
	
	select.onmouseout = function(){
		
		this.setAttribute("mouse","0");
			
	}
	
	finder.onblur = function() {
		
		if(select.getAttribute("mouse")==0){
			
			var item = got(select,"opt");

			for(var x=0;x<item.length;x++){

				item[x].style.display="none";

			}
			//label.value="";
       select.style.display="none";
 
		}
		
	};
  
	icon.onclick=(function(){
    label.focus();
  });
  
	finder.onfocus = function() {
		
		if(attribute.value.length<50){
      
				var item = got(select,"opt");

				for(var x=0;x<item.length;x++){

						item[x].style.display="block";

				}
      
		}
    
    select.style.display="block";
		
	};
  
	
	finder.onkeyup = function() {

	  var item = got(select,"opt");

		if(item.length && this.value.length>3){

			var string1 = removeAcento(this.value.toLowerCase());

			for(var x=0;x<item.length;x++){

				var ohtml=removeAcento(item[x].innerHTML.toLowerCase());

					if(ohtml.indexOf(string1) >= 0){			

						item[x].style.display="block";

					}else{

						item[x].style.display="none";

					}

			}

		}else{
			
			for(var x=0;x<item.length;x++){
		
				item[x].style.display="none";

			}
			
		}

	};
	
	div.appendChild(select);
	//var selectgrid	= cE("selectgrid");
	//div.appendChild(selectgrid);
	div.appendChild(input);

  return div;
	
}


/* ######## formFieldSelectAjax.js ######## */



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



/* ######## formFieldTag.js ######## */


function formMountTag(attribute){
                      
  var label       = cE("label");
	var div         = cE("div");
  var view        = cE("tagview");
  
      label.appendChild(cT(attribute.label));

      div.appendChild(label);
      div.appendChild(btAdd(attribute));

      div.setAttribute("class","formtag");

  var tagsearchbox = cE("tagsearchbox");
      tagsearchbox.appendChild(iconClose());
  
  var taghidden = cE("taghidden");
 
  var input  = cE("input");
 
  var valor  = attribute.value;
	
      input.setAttribute("name",attribute.name);
      input.setAttribute("title",attribute.title);
      input.setAttribute("value",valor);
      input.setAttribute("autocomplete","off");
      input.setAttribute("required","");
      input.setAttribute("type","hidden");
      input.setAttribute("tipo","select");
  
      tagFinder(tagsearchbox);
  
		  tagsearchbox.appendChild(input);
		
	var arrayS = attribute.list;

		for (var keyS in arrayS){
			
			var codigo = arrayS[keyS].codigo;
			var label  = arrayS[keyS].label;
      
			var opt = cE("opt");
      
			    opt.appendChild(cT(label));
			    opt.setAttribute("value",codigo);
     
			var found = valor.indexOf('"codigo":"'+codigo+'"'); 
			
			if(found>=0){
		
				opt.setAttribute('selected','1');
        
        var val = getObjectByCode(valor,codigo);
        
        var list = [];

            list.label=label;
            list.codigo=codigo;
            list.valor=val.valor;
           // list.valor=codigo;
        
        view.appendChild(tag(list));        
        
			}else{
				
				opt.setAttribute('selected','0');
				
			}
			
			opt.onclick=(function(){
				
				var attr = this.getAttribute("selected");
				
				if(attr==1){
					
					this.setAttribute("selected","0");
				
					var text = input.value;
          
					var div = this.parentElement.parentElement.parentElement;
          
          var tagview = got(div,"tagview")[0];
          
          rE(goap(tagview,"c",this.getAttribute('value'))[0]);
          
          input.value=getSelectedValues(tagview);
          
				}else{
					
					this.setAttribute("selected","1");
			
          var list = [];
          
              list.label=this.innerHTML;
              list.codigo=this.getAttribute('value');
          
          var div = this.parentElement.parentElement.parentElement;
          
          var tagview = got(div,"tagview")[0];
              tagview.appendChild(tag(list));
					    
          input.value=getSelectedValues(tagview);
          
				}

			});

			taghidden.appendChild(opt);

		}
  
	  tagsearchbox.appendChild(taghidden);    
  
	  div.appendChild(tagsearchbox);
    div.appendChild(view);
  
  return div;
	
}

function getObjectByCode(json,code){
  
  var obj = JSON.parse(json);
  
  for (var i = 0; i < obj.length; i++){
  
    if (obj[i].codigo == code){
      return obj[i];
    }
    
  }
  
}

function iconClose(){
  
  var icon  = cE("icon");
      icon.setAttribute("class","icon-cross");
  
 
      icon.onclick=(function(){this.parentElement.parentElement.setAttribute("search","0");});
  
  return icon;
  
}

function btAdd(attribute){
  
  var icon  = cE("icon");
      icon.setAttribute("class","icon-plus");
  
  var label = cE("label");
      label.appendChild(cT("Adicionar"));
  
  var btadd = cE("add");
      btadd.onclick=(function(){this.parentElement.setAttribute("search","1");});
  
  
      btadd.appendChild(icon);
      btadd.appendChild(label);
    
  return btadd;
  
}

function tag(list){
  
  var div     = cE("div");
  var label   = cE("label");
  
  var valor   = cE("valor");  
  
      if(list.valor!==undefined){
        
        valor.appendChild(cT(list.valor));
        
      }
  
  valor.onblur=(function(){
    
    var tagview = this.parentElement.parentElement;
    var valor = this.parentElement.parentElement.parentElement.getElementsByTagName("tagsearchbox")[0].getElementsByTagName("input")[1];
    
    valor.value=getSelectedValues(tagview);
    
  });
  
  var figure  = cE("figure");
  
  var btRemove   = cE("icon"); 
  
      btRemove.setAttribute("class","icon-cross");
  
  var text = cT(list.label);
  
  	btRemove.onclick=(function(){
      
      if(confirm("Tem certeza que deseja remover ?")){

        var multiplehidden=got(this.parentElement.parentElement.parentElement,"taghidden")[0];

        var input = got(multiplehidden,"input")[1];

        var view=this.parentElement.parentElement;

        rE(this.parentElement);
        
        input.value=getSelectedValues(view);

      }
        
    });
      
      label.appendChild(text);
      div.appendChild(figure);
      div.appendChild(label);
      div.appendChild(btRemove);
      div.appendChild(valor);

  
      div.setAttribute('c',list.codigo);
  
  return div;
  
}

function tagFinder(object){
	
	var finder = cE("input");

      finder.setAttribute("placeholder","Digite para procurar");
      finder.setAttribute("name","findernew"); 
  
	finder.onkeyup = function() {
    
    var item = got(object,"opt");
    
    if(this.value.length>=3){
      
      if(item.length){

        var string1 = removeAcento(this.value.toLowerCase());

        for(var x=0;x<item.length;x++){

          var ohtml=removeAcento(item[x].innerHTML.toLowerCase());

          //if(item[x].getAttribute("selected")=="0"){

            if(ohtml.indexOf(string1) >= 0){			

              //item[x].style.display="block";
              item[x].setAttribute('found','1');


            }else{

              //item[x].style.display="none";
              item[x].setAttribute('found','0');
            }
          //}
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

function getSelectedValues(object){
  
  var item = object.getElementsByTagName("div");
  var array = [];
  
  //console.log(item);
  
  for (var x=0;x<item.length;x++){
    
    array[x] = {codigo:item[x].getAttribute("c"),valor:item[x].getElementsByTagName("valor")[0].innerHTML}
    
    
  }
  
  console.log(JSON.stringify(array));
  return JSON.stringify(array);
  
}


/* ######## formFieldTagGroup.js ######## */


function formMountTagGroup(attribute){
                      
  console.log(attribute);
  
  var label       = cE("label");
	var div         = cE("div");
  var tagview     = cE("tagview");

      label.appendChild(cT(attribute.label));

      div.appendChild(label);
      div.appendChild(btAdd(attribute));

      div.setAttribute("class","formtag");

  var tagsearchbox = cE("tagsearchbox");
      tagsearchbox.appendChild(iconClose());

  var taghidden = cE("taghidden");

  var input  = cE("input");

  var valor  = attribute.value;

      input.setAttribute("name",attribute.name);
      input.setAttribute("title",attribute.title);
      input.setAttribute("value",valor);
      input.setAttribute("autocomplete","off");
      input.setAttribute("required","");
      input.setAttribute("type","hidden");
      input.setAttribute("tipo","select");

      tagFinder(tagsearchbox);

      tagsearchbox.appendChild(input);
  
 
	var arrayS = attribute.list;

		for (var keyS in arrayS){
			
			var codigo = arrayS[keyS].codigo;
			var label  = arrayS[keyS].label;
      
			var opt = cE("opt");
      
			    opt.appendChild(cT(label));
			    opt.setAttribute("value",codigo);
     
			var found = valor.indexOf('"codigo":"'+codigo+'"'); 
			
			if(found>=0){
		
				opt.setAttribute('selected','1');
        
        var val = getObjectByCode(valor,codigo);
        
        var list = [];

            list.label=label;
            list.codigo=codigo;
            list.valor=val.valor;
           // list.valor=codigo;
        
        tagview.appendChild(tag(list));        
        
			}else{
				
				opt.setAttribute('selected','0');
				
			}
			
			opt.onclick=(function(){
				
				var attr = this.getAttribute("selected");
				
				if(attr==1){
					
					this.setAttribute("selected","0");
				
					var text = input.value;
          
					var div = this.parentElement.parentElement.parentElement;
          
          var tagview = got(div,"tagview")[0];
          
          rE(goap(tagview,"c",this.getAttribute('value'))[0]);
          
          input.value=getSelectedValues(tagview);
          
				}else{
					
					this.setAttribute("selected","1");
			
          var list = [];
          
              list.label=this.innerHTML;
              list.codigo=this.getAttribute('value');
          
          var div = this.parentElement.parentElement.parentElement;
          
          var tagview = got(div,"tagview")[0];
              tagview.appendChild(tag(list));
					    
          input.value=getSelectedValues(tagview);
          
				}

			});

			taghidden.appendChild(opt);

		}
  
	  tagsearchbox.appendChild(taghidden);    
  
	  div.appendChild(tagsearchbox);
    div.appendChild(tagview);
  
  
  return div;
  
}


/* ######## formFieldText.js ######## */


function formMountText(attribute){
  
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
	
	object.setAttribute("autocomplete","new-password");
	object.setAttribute("type","text");
	object.setAttribute("class","default");
	object.setAttribute("placeholder",attribute.label);
	object.setAttribute("required",attribute.required);
		
  div.appendChild(object);
  
  return div;
  
}


/* ######## formFieldTextUrl.js ######## */


function formMountTexturl(attribute){
                     
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

    object.setAttribute("autocomplete","off");
    object.setAttribute("type","text");
    object.setAttribute("class","default");
    object.setAttribute("placeholder",attribute.label);
    div.appendChild(object);
  
  	makeUrlFriendly(div);	
  
  return div;  
  
}


/* ######## formFieldTextarea.js ######## */



function formMountTextarea(attribute){
  
 var label       = cE("label");
  var div         = cE("div");

  label.appendChild(cT(attribute.label));

  div.appendChild(label);

  var object = cE("textarea");
	
	for (var key in attribute){
		
		if(attribute[key]!=="0" && attribute[key]!==""){
			
			if(key=='value'){
				object.appendChild(cT(attribute[key]));
	
			}else{
				object.setAttribute(key,attribute[key]);
			}
			
		}
		
	}
	object.setAttribute('id','editor');
	object.setAttribute("class","default");
  object.setAttribute("placeholder",attribute.label);
	object.setAttribute("required",attribute.required);
	
  div.appendChild(object);
  /*
	var editor = CKEDITOR.replace(object, {
toolbar: [
    { name: 'document', items: [  'Bold', 'Italic', 'NumberedList', 'BulletedList','-','Source','CreateDiv'] }
]});

// The "change" event is fired whenever a change is made in the editor.
editor.on( 'change', function( evt ) {
	object.innerHTML=this.getData();

});
	*/
  counter(div);	  
  
  return div;
  
}



/* ######## formFieldTrueFalse.js ######## */


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


/* ######## formFieldUpload.js ######## */


function formUpload(object){
	
	var window = got(document,"window")[0];
	
	var uploadedfiles = got(window,"uploadedfiles")[0];
	
	for(var x=0;x<object.files.length;x++){
			
		var ext = object.files[x].type;
		var anexos=document.getElementsByName('files')[0].value;

		
		if(ext=='image/jpeg'){

			sendFile(object.files[x],anexos,localStorage.getItem("upload")+'?',

				function(filename){
				
					
					addUploadFiles(uploadedfiles,filename);
					

				}

			);
			
		}else if(ext=='application/pdf'){
			
			sendFile(object.files[x],anexos,localStorage.getItem("upload")+'?',

							 
				function(filename){
        
				  //pdftothumb(object);
	

					addUploadFilesPDF(uploadedfiles,filename);

				}
							 
			);

		}else if(ext=='image/png'){
			
			sendFile(object.files[x],anexos,localStorage.getItem("upload")+'?',

							 
				function(filename){
				

					addUploadFiles(uploadedfiles,filename);

				}
							 
			);
						
		}else{
			alert('Formato de arquivo não suportado');
		}

	}
		
}

function formMountFileupload(attribute){

      var label       = cE("label");
      var div         = cE("div");
  
			label.appendChild(cT(attribute.label));
				
			//div.appendChild(label);
				
			var object = cE("input");

			for (var key in attribute){

				if(attribute[key]!=="0" && attribute[key]!==""){
					object.setAttribute(key,attribute[key]);
				}

			}

			object.setAttribute("type","hidden");
			
			if(object.getAttribute("value")=="" || object.getAttribute("value")==null){
				
				object.setAttribute("value",randomString(32));
				
			}
				




			var attribute = [];

				attribute.tag 		= "uploadedStatus";

			var span = cEA(attribute);
				
			var attribute = [];

				attribute.tag 		= "uploadedFiles";

			var result = cEA(attribute);
				
			div.appendChild(object);
				

	
			div.appendChild(result);

			div.appendChild(span);
	

			var url 	= localStorage.getItem("url")+'/admin/json/jsonViewFile.php?anexos='+object.value;

			var xmlhttp;

			xmlhttp = new XMLHttpRequest();

			xmlhttp.onreadystatechange = function() {

				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

					if(xmlhttp.responseText!==""){
						
						var json = JSON.parse(xmlhttp.responseText);
						var items = [];
						
						for(var x=0;x<json.length;x++){
						
							var ext = json[x].filename.substring((json[x].filename.length-3),(json[x].filename.length));

							if(ext=='jpg'){
								
								addUploadFiles(result,json[x]);
						
							}else if(ext=='pdf'){

								addUploadFilesPDF(result,json[x].filename);

							}else if(ext=='png'){

								addUploadFilesPNG(result,json[x].filename);

							}

						}

						
					}
				
				}

			};

			xmlhttp.open("GET", url, true);
			xmlhttp.send();
  
  return div;
  
}

function addUploadFiles(local,object){

	var div 				= cE("div");
	var figure 			= cE("figure");
	var textCover 	= cT("Destaque");
	var spanDelete 	= cE("span");
	var spanLeft 		= cE("span");
	var spanRight 	= cE("span");
	var spanZoom 		= cE("span");
	var spanCover 	= cE("span");
	var divOptions 	= cE("options");
  var spanEdit 		= cE("span");

	if(object.filename!==undefined){
		var filename=object.filename;
		var key=object.key;
		
	}else{
		var filename=object;
	}
	
	
	
	if(filename!==null){

		spanCover.appendChild(textCover);

		divOptions.appendChild(spanDelete);
		divOptions.appendChild(spanLeft);
		divOptions.appendChild(spanZoom);
		divOptions.appendChild(spanRight);
		//divOptions.appendChild(spanEdit);
		
		div.appendChild(divOptions);

		spanDelete.setAttribute('class','icon-bin');
		spanLeft.setAttribute('class','icon-undo');
		spanRight.setAttribute('class','icon-redo');
		spanZoom.setAttribute('class','icon-search');
		spanEdit.setAttribute('class','icon-edit');
		
		sA(figure,"style","background-image:url('"+localStorage.getItem("imgm")+filename+"?key="+key+"');");
		sA(spanDelete,"onclick","if(confirm('Deseja remover este arquivo?')){removeAnexos(this.parentNode.parentNode,'"+filename+"')}");
		
		//sA(spanZoom,"onclick","window.open('"+localStorage.getItem("img")+filename+"?key="+randomString(32)+"','_blank');");
    
    spanZoom.onclick=(function(){
      window.open(localStorage.getItem("img")+filename+"?key="+randomString(32),'_blank');
    });
                      
		spanLeft.onclick=(function(){

			figure.setAttribute('style',"background-image:url('"+localStorage.getItem("urlimagerotate")+"?img="+filename+"&rotate=left&key="+randomString(32)+"');");
			divOptions.setAttribute('style',"background-image:url('"+localStorage.getItem("url")+"/admin/action/actionChangeImageKey.php?filename="+filename+"&key="+randomString(32)+"');");
      
      
		});

		spanRight.onclick=(function(){

			figure.setAttribute('style',"background-image:url('"+localStorage.getItem("urlimagerotate")+"?img="+filename+"&rotate=right&key="+randomString(32)+"');");
			divOptions.setAttribute('style',"background-image:url('"+localStorage.getItem("url")+"/admin/action/actionChangeImageKey.php?filename="+filename+"&key="+randomString(32)+"');");
      
		});
		
		if(goiFind(filename)){
			
			goi(filename).appendChild(divOptions);
			goi(filename).appendChild(figure);
			
		}else{
			
			local.insertBefore(div, local.childNodes[0]);
			div.appendChild(figure);
			
		}
		

		/*local.appendChild(div);*/
		
		
		var label   = cE("input");
		var content = cE("textarea");
    var btsalvar = cE("button");
        
		label.setAttribute("name","label");
		label.setAttribute("placeholder","Título");
		content.setAttribute("name","textarea");
    content.setAttribute("placeholder","Descrição");
    btsalvar.setAttribute("type","button");
		
    /*    
	    div.appendChild(label);
		div.appendChild(content);
		div.appendChild(btsalvar);
			*/
		div.setAttribute("id",filename);
	
		
	}else{

		var icon 	= cE("icon");

		figure.setAttribute('style',"");
		figure.appendChild(icon);
		div.appendChild(figure);
	
		
		local.insertBefore(div, local.childNodes[0]);
		icon.setAttribute('class','icon-user');

	}


}

function addUploadFilesPNG(local,filename){

	var div 		= cE("div");
	var figure 		= cE("figure");
	
	var textCover 	= cT("Destaque");
	var spanDelete 	= cE("span");

	var spanZoom 	= cE("span");
	var spanCover 	= cE("span");
	var divOptions 	= cE("options");

	if(filename!==null){

		spanCover.appendChild(textCover);

		divOptions.appendChild(spanDelete);

		divOptions.appendChild(spanZoom);


		div.appendChild(divOptions);

		spanDelete.setAttribute('class','icon-bin')

		spanZoom.setAttribute('class','icon-search')
		
		sA(figure,"style","background-image:url('"+localStorage.getItem("png")+filename+"');");
		sA(spanDelete,"onclick","if(confirm('Deseja remover este arquivo?')){removeAnexos(this.parentNode.parentNode,'"+filename+"')}");
		
		sA(spanZoom,"onclick","window.open('"+localStorage.getItem("png")+filename+"','_blank');");

		div.appendChild(figure);
		local.appendChild(div);

	}else{

		var icon 	= cE("icon");

		figure.setAttribute('style',"");
		figure.appendChild(icon);
		div.appendChild(figure);
		local.appendChild(div);
		icon.setAttribute('class','icon-user');

	}


}

function addUploadFilesPDFv2(local,filename){

	var div 				= cE("div");
	var divOptions 	= cE("options");

	var textCover 	= cT("Destaque");
	
	var spanDelete 	= cE("span");
	var spanCover 	= cE("span");
	var spanZoom 		= cE("span");
	var figure 			= cE("iframe");
	

	var divLabel 			= cE("h3");
	
	spanDelete.setAttribute('class','icon-bin');
	spanCover.appendChild(textCover);
	spanZoom.setAttribute('class','icon-search');
	divOptions.appendChild(spanDelete);
		divOptions.appendChild(spanZoom);
	figure.appendChild(divLabel);
	div.appendChild(figure);
			div.appendChild(divOptions);

	if(goiFind(filename)){

		goi(filename).appendChild(divOptions);
		goi(filename).appendChild(figure);

	}else{

		local.insertBefore(div, local.childNodes[0]);
		div.appendChild(figure);
	}
	

	var split= filename.split(".");
	
	sA(figure,"src",localStorage.getItem("pdf")+split[0]+".pdf");

	sA(spanDelete,"onclick","if(confirm('Deseja remover este arquivo?')){removeAnexos(this.parentNode.parentNode,'"+filename+"')}");
	
	sA(spanZoom,"onclick","window.open('"+localStorage.getItem("pdf")+filename+"','_blank');");
	//console.log(filename);
	
	div.setAttribute("id",filename);
	
}

function addUploadFilesPDF(local,filename){

	var div 				= cE("div");
	var divOptions 	= cE("options");

	var textCover 	= cT("Destaque");
	
	var spanDelete 	= cE("span");
	var spanCover 	= cE("span");
	var spanZoom 		= cE("span");
	var figure 			= cE("figure");
	

	var divLabel 			= cE("h3");
	
	spanDelete.setAttribute('class','icon-bin');
	spanCover.appendChild(textCover);
	spanZoom.setAttribute('class','icon-search');
	divOptions.appendChild(spanDelete);
		divOptions.appendChild(spanZoom);
	figure.appendChild(divLabel);
	div.appendChild(figure);
			div.appendChild(divOptions);

	if(goiFind(filename)){

		goi(filename).appendChild(divOptions);
		goi(filename).appendChild(figure);

	}else{

		local.insertBefore(div, local.childNodes[0]);
		div.appendChild(figure);
	}
	

	var split= filename.split(".");
	
	sA(figure,"style","background-image:url('"+localStorage.getItem("imgp")+split[0]+".jpg');");

	sA(spanDelete,"onclick","if(confirm('Deseja remover este arquivo?')){removeAnexos(this.parentNode.parentNode,'"+filename+"')}");
	
	sA(spanZoom,"onclick","window.open('"+localStorage.getItem("pdf")+filename+"','_blank');");
	//console.log(filename);
	
	div.setAttribute("id",filename);
	
}

function insertAnexos(anexos,filename){
	
	var url = localStorage.getItem("url")+'/admin/json/jsonAnexos.php?action=insert&anexos='+anexos+'&filename='+filename;
	
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();
 
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			var authentic=xmlhttp.responseText;

			
			if(authentic==="1"){
				//success
				return true;
				
			}else{
				
				return false;
				
			}
		}
	};
	
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
}

function removeAnexos(e,filename){
	
	var url 	= localStorage.getItem("url")+'/admin/json/jsonAnexosDelete.php?filename='+filename;

	var xmlhttp;

	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			var json = JSON.parse(xmlhttp.responseText);
			
			if(xmlhttp.responseText==1){
				
				rE(e);
				console.log(e);
			}
			
		}
		
	};
	
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
			
}

function sendFile(file,anexos,url,cb){

	var formData 	= new FormData();

	formData.append('fileupload', file);

	var xhr = new XMLHttpRequest();
	
	//var anexos = gon('files')[0].value;
	
	var form = got(document,"form")[0];
	var uploadedstatus = got(form,"uploadedfiles")[0];
	
	var divLoading=cE("div");
	var labelLoading=cE("label");
	divLoading.appendChild(labelLoading);
	uploadedstatus.insertBefore(divLoading, uploadedstatus.childNodes[0]);
	

	
	xhr.upload.addEventListener("progress", function(e) {
		
		var pc = parseInt((e.loaded / e.total * 100));

			labelLoading.innerHTML=pc+"%";
		
	}, false);
	
	xhr.onreadystatechange = function() {

		if (xhr.readyState == 4 && xhr.status == 200) {
			
			var object = JSON.parse(xhr.responseText);
			
			if(object.ext=='jpg'){

				var div = cE('div');
				
				//sA(div,"style","background-image:url('/client/"+object.url+"');");
				//sA(div,"onclick","window.open('/client/"+object.url+"','_blank');");
				
				insertAnexos(anexos,object.filename);
				divLoading.setAttribute("id",object.filename);
				divLoading.innerHTML="";
				cb(object.filename);
			
				//got('fileuploadresult').appendChild(div);

			}else if(object.ext=='png'){

				var div = cE('div');
				
				//sA(div,"style","background-image:url('/client/"+object.url+"');");
				//sA(div,"onclick","window.open('/client/"+object.url+"','_blank');");
				
				insertAnexos(anexos,object.filename);
				cb(object.filename);
				console.log(object);
				//got('fileuploadresult').appendChild(div);

			}else if(object.ext=='pdf'){
				
				//var uploadedfiles = got(object.parentNode.parentNode,"uploadedfiles")[0];
				
				//addUploadFiles(uploadedfiles,object.filename);
				insertAnexos(anexos,object.filename);
				divLoading.setAttribute("id",object.filename);
				divLoading.innerHTML="";
				cb(object.filename);
				
			}
			
		}

	};

	xhr.open('POST', url, true);
	xhr.send(formData);

}

function pdftothumb(file){
      
        pdfjsLib.disableWorker = true;
   
        fileReader = new FileReader();
      
        fileReader.onload = function(ev) {
  
          pdfjsLib.getDocument(fileReader.result).then(function getPdfHelloWorld(pdf) {
     
            pdf.getPage(1).then(function getPageHelloWorld(page) {
              
              var scale = 1;
              var viewport = page.getViewport(scale);
              // var canvas = document.getElementById('the-canvas');
              
              var canvas = document.createElement("canvas");
              var random = Math.floor(Math.random() * 999999);
              canvas.id=(random);
              document.body.appendChild(canvas);
              
              
              var context = canvas.getContext('2d');
              canvas.height = viewport.height;
              canvas.width = viewport.width;

              var task = page.render({
                canvasContext: context,
                viewport: viewport
              })
              
              task.promise.then(function() {
                console.log(canvas.toDataURL('image/jpeg'));
                
                var getCanvas = document.getElementById(random); 
           
                getCanvas.parentNode.removeChild(getCanvas);
                
              });
            });
          }, function(error) {
            console.log(error);
          });
        };
      
        fileReader.readAsArrayBuffer(file.files[0]);
      
      }

function mountPS(){
	
	var pswp = cE("div");
	
			pswp.setAttribute("class","pswp");
			pswp.setAttribute("tabindex","-1");
			pswp.setAttribute("role","dialog");
			pswp.setAttribute("aria-hidden","true");
	
	var bg = cE("div");
			bg.setAttribute("class","pswp__bg");
	
	var scroll = cE("div");
			scroll.setAttribute("class","pswp__scroll-wrap");
	
	var container = cE("div");
			container.setAttribute("class","pswp__container");
	
	var item1 = cE("div");
			item1.setAttribute("class","pswp__item");
	
	var item2 = cE("div");
			item2.setAttribute("class","pswp__item");
	var item3 = cE("div");
			item3.setAttribute("class","pswp__item");
	

	
	
	var ui = cE("div");
			ui.setAttribute("class","pswp__ui pswp__ui--hidden");
	
	var bar =cE("div");
			bar.setAttribute("class","pswp__top-bar");
	
	var counter =cE("div");
			counter.setAttribute("class","pswp__counter");
	
	var close =cE("button");
			close.setAttribute("class","pswp__button pswp__button--close");
			close.setAttribute("title","Close (Esc)");
	
	var share =cE("button");
			share.setAttribute("class","pswp__button pswp__button--share");
			share.setAttribute("title","Share");
	
	var fs =cE("button");
				fs.setAttribute("class","pswp__button pswp__button--fs");
				fs.setAttribute("title","Toggle fullscreen");
	
	var zoom =cE("button");
				zoom.setAttribute("class","pswp__button pswp__button--zoom");
				zoom.setAttribute("title","Zoom in/out");
	
	var preloader =cE("div");
				preloader.setAttribute("class","pswp__preloader");
	
	var icn =cE("div");
			icn.setAttribute("class","pswp__preloader__icn");
	
	var cut =cE("div");
			cut.setAttribute("class","pswp__preloader__cut");
	
	var donut =cE("div");
			donut.setAttribute("class","pswp__preloader__donut");

		var modal =cE("div");
				modal.setAttribute("class","pswp__share-modal pswp__share-modal--hidden pswp__single-tap");
	
		var tooltip =cE("div");
				tooltip.setAttribute("class","swp__share-tooltip");	
	
		var left =cE("button");
				left.setAttribute("class","pswp__button pswp__button--arrow--left");	
				left.setAttribute("title","Previous (arrow left)");
	
		var right =cE("button");
				right.setAttribute("class","pswp__button pswp__button--arrow--right");	
				right.setAttribute("title","Next (arrow right)");
	
		var caption =cE("div");
				caption.setAttribute("class","pswp__caption");	
	
		var center =cE("div");
				center.setAttribute("class","pswp__caption__center");	
	
	  
	container.appendChild(item1);
	container.appendChild(item2);
	container.appendChild(item3);	
	
	cut.appendChild(donut);
	icn.appendChild(cut);
	preloader.appendChild(icn);
	
	bar.appendChild(counter);
	bar.appendChild(close);
	bar.appendChild(share);
	bar.appendChild(fs);
	bar.appendChild(zoom);
	bar.appendChild(preloader);

	modal.appendChild(tooltip);
	
	caption.appendChild(center);
	
	ui.appendChild(bar);
	ui.appendChild(modal);
	ui.appendChild(left);	
	ui.appendChild(right);		
	ui.appendChild(caption);
	
	scroll.appendChild(container);
	scroll.appendChild(ui);
	
	pswp.appendChild(bg);
	pswp.appendChild(scroll);
	
	got(document,"body")[0].appendChild(pswp);

}


/* ######## formFieldYoutube.js ######## */


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


/* ######## formOptions.js ######## */


function formSave(codigo){

	var form = got(document,"form");
	
	var input    = got(form[0],"input");
	var textarea = got(form[0],"textarea");
	var select	 = got(form[0],"select");	
	var error = "";
	
	var data = new FormData();
	
	for (var x = 0; x < input.length;x++){
		
		var n = input[x].getAttribute("name");
		var v = input[x].value;
		v = (v!==null)?v:"";
		
		if(input[x].parentElement.getAttribute("type")=='data' && v!==""){
			
			var dataNew="";
			
			//v=v.substr(6,4)+"-"+v.substr(3,2)+"-"+v.substr(0,2);
			//v=v.substr(8,2)+"/"+v.substr(5,2)+"/"+v.substr(0,4); //dd/mm/aaaa
		}
		
		if(input[x].type!='file' && input[x].type!='search' && n!='findernew' && n!='finder' && n!='ignore'){
			
			data.append(n,v);
			
		}
		
		if(input[x].getAttribute("required")=="1" && v===""){
			error+=input[x].getAttribute("name")+"\n" ;
		}

	}

	for (var x = 0; x < textarea.length;x++){
				
		var n = textarea[x].getAttribute("name");
		var v = textarea[x].value;
		v = (v!==null)?v:"";
		
		data.append(n,v);
		
		if(textarea[x].getAttribute("required")=="1" && v===""){
			error+=textarea[x].getAttribute("name")+"\n" ;
		}
		
	}
	
	for (var x = 0; x < select.length;x++){
			
		var n = select[x].getAttribute("name");
		var v = select[x].value;
		v = (v!==null)?v:"";
		
		data.append(n,v);
		
		if(select[x].getAttribute("required")=="1" && v===""){
			error+=select[x].getAttribute("name")+"\n" ;
		}
		
	}	
	
	var url = localStorage.getItem("url")+'/jsonUpdate/'+got(document,"window")[0].getAttribute("modules")+'/update/'+codigo;

	var xmlhttp;

	xmlhttp = new XMLHttpRequest();
 
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			
				if(codigo!==null){

					loadItemJson(codigo,function(json){

						var item = gibc(codigo);
						race(item);
						loadItem(item,json);
						document.body.setAttribute("loading","0");
						
					});

				}else{

					tabelaLoad(gA(),function(tabela){
						document.body.setAttribute("loading","0");
            rE(got(document,'tabela'));
            document.getElementsByTagName("view")[0].appendChild(tabela);
					});
					
				}
			
			if(got(document,"window")[0].getAttribute("modules")=="users"){
			
					getLoginStatus();

			}
			
			formClose();
			
		}
		
	};
	
	if(error===""){
		
		document.body.setAttribute("loading","1");
		xmlhttp.open("POST", url, true);
		xmlhttp.send(data);
		
	}else{
		alert("Os seguintes campos nào podem ficar vazios: \n\n"+error);
	}

	
	
}

function formClose(){
	
	
	rE(got(document,"window"));
	got(document,"body")[0].setAttribute("open","0");

	gridHide();

	if(localStorage.openedformcodigo){
    
    var item  = gibc(localStorage.openedformcodigo);
    
    if(item!=undefined){
      
       	item.setAttribute("open","0");
      
    }

		localStorage.openedformcodigo="";
		
	}
	
}

function formDelete(codigo){
	
	var url = localStorage.getItem("url")+'/jsonUpdate/'+gA()+'/delete/'+codigo;

	var xmlhttp;

	xmlhttp = new XMLHttpRequest();
 
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	

						
		}
		
	};

	if (confirm("Tem certeza que deseja excluir?") === true) {

		xmlhttp.open("POST", url, true);
		xmlhttp.send();
		
			rE(gibc(codigo));
			formClose();
		
	} else {

	

	}

}

function formEdit(areas,codigo){

	//window.open("/#form","_self");
	
		formMount(areas,codigo,function(){
			
			document.body.setAttribute("loading","0");
			
			var item  = gibc(codigo);
			
			item.setAttribute("open","1");
			
			localStorage.openedformcodigo=codigo;
			
			gridShow();
			
		});

}

function formNew(){
	window.open("#form","_self");
		formMount(gA(),null,function(){
			
			gridShow();
			
		});

	
}

function gridShow(){
	
		var grade= got(document,"grade")[0];

		grade.setAttribute("class","show");

	
}

function gridHide(){
	
		var grade= got(document,"grade")[0];
	
		grade.setAttribute("class","hide");

}

function btClose(codigo){

	var btClose = cE("icon");
			btClose.setAttribute("class","icon-cross");
	//btClose.appendChild(cT("×"));
			btClose.setAttribute("action","close");
			btClose.onclick=(function(){

				formClose(codigo);

			});

	return btClose;
	
}

function btBack(codigo){

	var bt = cE("icon");
			//btClose.setAttribute("class","icon-cross");
	//bt.appendChild(cT("<"));
			bt.setAttribute("action","back");
			bt.setAttribute("class","icon-arrow-left2");
			bt.onclick=(function(){

				formClose(codigo);

			});

	return bt;
	
}

function btHeaderPrint(){

	var bt = cE("icon");
			
			bt.setAttribute("action","print");
			bt.setAttribute("class","icon-printer");
			bt.onclick=(function(){

					print();

			});

	return bt;
	
}

function btHeaderAttach(){
	
var attribute = [];
		attribute.tag 		= "input";
		attribute.type 		= "file";
		attribute.name 		= "fileupload";
		attribute.multiple	= "";
		attribute.onchange	= "formUpload(this);";
	
var fileupload = cEA(attribute);
	
	var bt = cE("icon");
		
			bt.setAttribute("action","attach");
			bt.setAttribute("class","icon-attachment");
			bt.onclick=(function(){

				

			});

	bt.appendChild(fileupload);
	
	return bt;
	
}

function btHeaderSeeAttach(){

	var bt = cE("icon");
			
			bt.setAttribute("action","seeattach");
			bt.setAttribute("class","icon-images");
			bt.onclick=(function(){
					var anexos=document.getElementsByName('files')[0].value;
					window.open("/admin/json/jsonAnexosView.php?anexos="+anexos,"_blank");

			});

	return bt;
	
}

function btHeaderSave(codigo){

	var bt = cE("icon");
			
			bt.setAttribute("action","save");
			bt.setAttribute("class","icon-checkmark");
			bt.onclick=(function(){
					formSave(codigo);


			});

	return bt;
	
}

function btHeaderDelete(codigo){

	var bt = cE("icon");
			
			bt.setAttribute("action","delete");
			bt.setAttribute("class","icon-bin");
			bt.onclick=(function(){
					formDelete(codigo);

			});

	return bt;
	
}

function btPrint(){
	
		var btDelete = cB("imprimir");
	
				btDelete.setAttribute("action","print");
				btDelete.onclick=(function(){

					print();

				});
	
	return btDelete;
}

function btDelete(codigo){
	
		var btDelete = cB("excluir");
	
				btDelete.setAttribute("action","delete");
				btDelete.onclick=(function(){

					formDelete(codigo);

				});
	
	return btDelete;
}

function btSave(codigo){
	
		var button = cB("salvar");
				button.setAttribute("action","save");
				button.onclick=(function(){

					formSave(codigo);

				});
	
	return button;
		
}

function btNew(){
	
	var button = cB("+");
	
			button.setAttribute('action','new');
			button.onclick=(function(){

				formNew();

			});
	
	return button;
	
}

function btPrint(){
	
	var button = cB("imprimir");
	
			button.setAttribute('action','print');
			button.onclick=(function(){

				print();

			});
	
	return button;
	
}

function btAttach(){
	
	var attribute = [];

		attribute.tag 		= "input";
		attribute.type 		= "file";
		attribute.name 		= "fileupload";
		//attribute.anexos 	= object.getAttribute('value');
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
		attribute.class 		= "icon-attachment";
	
	var icon = cEA(attribute);
	
	var attribute = [];

		attribute.tag 		= "button";
		attribute.text 		= "";
		attribute.action 	= "attach";
	
	var divFileUploadEnviar = cEA(attribute);
	
	divFileUploadEnviar.appendChild(icon);
	
	divFileUpload.appendChild(divFileUploadEnviar);
	divFileUpload.appendChild(fileupload);
	
	return divFileUpload;
	
}

function btSeeAttach(){

				var anexos=document.getElementsByName('files')[0].value;
	
			var attribute = [];

			attribute.tag 		= "button";
			attribute.text 		= "Visualizar anexos";
			attribute.onclick	= "window.open('/admin/json/jsonAnexosView.php?anexos="+anexos+"','_blank')";
			attribute.type		= "button";
			attribute.action	= "seeattach";
	
		var bt = cEA(attribute);
			return bt;


	
	

}


/* ######## header.js ######## */


function mountHeader(array){

	if(!got(document,"header").length){

		var header = cE("header");

		var icon = cE("icon");
				icon.setAttribute("id","navmenu");
		    icon.setAttribute("class","icon-menu");
    
    var iconSuite= cE("icon");
        iconSuite.setAttribute("class","icon-infinite");
    
		header.appendChild(icon);
   
		var a 			= cE("a");
		var logo    = cE("logo");
		var span    = cE("span");	
		var text    = cT(array.suites);

		span.appendChild(text);
		logo.appendChild(span);
		a.appendChild(logo);

		header.appendChild(a);


		icon.onclick=(function(){

			var nav = goi("nav"); 
			nav.setAttribute('class','show');

			gridShow();

		});    

		got(document,"body")[0].appendChild(header);
    
		if(localStorage.userareas==1){
      
      header.appendChild(iconSuite);
      header.appendChild(mountMobileVersion());
      
    }
    
    var options = document.createElement("options");
        options.appendChild(iconNotification());
    
        var userinfo = JSON.parse(localStorage.userinfo);
    

    options.appendChild(iconFilter());
      

        if(userinfo.whereby!==null){

    options.appendChild(iconVideo());  
        }      
    header.appendChild(options);
       
    //header.appendChild(iconSuite);
    
    
	}
	
}

function resetHeaderOptions(){
  
document.body.setAttribute("notification","0")
document.body.setAttribute("filter","0")
}

function navSuiteMount(){
  
  var div = cE("navsuite");
  
  return div;
  
}

function mountMobileVersion(){
  
  var icon = cE("mobileversion");
  
  icon.onclick=(function(){
    
    var mobile=got(document,"body")[0].getAttribute('mobile');
    
    if(mobile==1){
      got(document,"body")[0].setAttribute('mobile','0');
    }else{
      
      got(document,"body")[0].setAttribute('mobile','1');
    }
    
    
  });
  
  return icon;
  
}


/* ######## headerVideo.js ######## */


function iconVideo(){
  
    var icon = cE("icon")
        icon.setAttribute("class","icon-users");
  
    var userinfo = JSON.parse(localStorage.userinfo);

        icon.onclick=(function(){
          
          window.open("https://whereby.com/"+userinfo.whereby,"_blank");
          
        });

  return icon;
  
}



/* ######## header_filter.js ######## */


function iconFilter(){
  
    var icon = cE("icon")
        icon.setAttribute("class","icon-search");
    
        icon.onclick=(function(){
          
         document.body.setAttribute("notification","0");
          
          if(document.body.getAttribute("filter")=="1"){
             
           
             document.body.setAttribute("filter","0");
            
          }else{
            
            document.body.setAttribute("filter","1");
       
          
          }
          
        });

  return icon;
  
}

function boxFilter(){
  
  if(document.getElementsByTagName("boxfilter").length==0){
    
    var box           = document.createElement("boxfilter");
    var filter        = document.createElement("filter");
    var header        = document.createElement("header");
    
        box.appendChild(header);
        box.appendChild(filter);
    
        document.body.appendChild(box);
      
  }else{
    
    var box    = document.getElementsByTagName("boxfilter")[0];
    

    var filter = box.getElementsByTagName("filter")[0];
    
    race(filter);
    
    var header = box.getElementsByTagName("header")[0];
    
  }

  var modules = document.body.getAttribute("modules");

  if(modules=="prontuariosmedicos"){

    filter.appendChild(mountFilterCustom("pacientes"));
    

//    var attribute = [];
    
 //  attribute.label="Meus Paciente";
  // attribute.name="pacientes";
 //  attribute.value="";

   //filter.appendChild(formMountSelectAjax(attribute));
    
  }else if(modules=="eventos"){

    filter.appendChild(mountFilterCustom("category"));

  }else{
     filter.appendChild(mountFilterStandard());
  }
  
}

function mountFilterStandard(){
	
	
	var filter 	= cE("filter");
	var input   = cE("input");	
	var btSearch= cE("icon");
	    btSearch.setAttribute("class","icon-search");
	//sA(input,"class","hide");
	
	input.setAttribute("placeholder","Digite aqui para filtrar o resultados");
	
	btSearch.onclick = function() {input.focus();};
	
	input.onblur = function() {};
	
	input.onkeyup = function() {
		
		var item = got(got(document,"view")[0],"item");
			
		if(item.length){
			
			var string1 = removeAcento(this.value.toLowerCase());
			
			for(var x=0;x<item.length;x++){

				var nohtml =item[x].innerHTML.replace(/<(?:.|\n)*?>/gm, '');

				var f=removeAcento(nohtml.toLowerCase());

				if(f.indexOf(string1) >= 0){

					item[x].style.display="block";

				}else{

					item[x].style.display="none";

				}		

			}
		
		}
			
	};		
	
	filter.appendChild(input);
	filter.appendChild(btSearch);
	
	var header = got(document,"header")[0];
	
	//header.appendChild(filter);
	
	return filter;
}

function mountFilterCustom(modules){
  
    var div         = cE("selectsearch");
		var label       = cE("input");
	
				label.setAttribute("id","filterlabel"+modules);
	      label.setAttribute("name","finder");
  
		var labelfigure = cE("labelfigure");

		var icon				= cE("icon");
	
			  icon.setAttribute("class","icon-cross");

		var input = cE("input");
  
				input.setAttribute("id","filtercodigo"+modules);
				input.setAttribute("type","hidden");
				input.setAttribute("filters","1");
        input.setAttribute("filternamemodules",modules);
  
		label.placeholder="Procure ...";
		label.setAttribute("class","default");
		label.setAttribute("autocomplete","off");
	
		div.appendChild(labelfigure);
		div.appendChild(label);
		div.appendChild(icon);
  
		var select = cE("div");
				
	  select.setAttribute("mouse","0");


  var url 	= localStorage.getItem("url")+'/admin/json/jsonSelect.php?modules='+modules;

	var xmlhttp;
  
	xmlhttp = new XMLHttpRequest();
 
	xmlhttp.onreadystatechange = function() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

          var json = JSON.parse(xmlhttp.responseText);

          for(var x=0;x<json.length;x++){

              var codigo  = json[x].codigo;
              var alabel  = json[x].label;

              var bt 			= cE("opt");

              var optlabel		= cE("label");
                  optlabel.appendChild(cT(alabel));

              var optfigure 	= cE("figure");

              if(json[x].filename!==null){

                  optfigure.setAttribute("style","background-image:url("+localStorage.getItem("imgm")+json[x].filename+"?key="+json[x].key+");");

              }

              bt.appendChild(optfigure);
              bt.appendChild(optlabel);

              bt.setAttribute("value",codigo);

              bt.onclick=(function(){

                input.value=this.getAttribute("value");
                label.value=got(this,"label")[0].innerHTML;
                label.setAttribute("placeholder",got(this,"label")[0].innerHTML);

                var style=got(this,"figure")[0].getAttribute("style");

                labelfigure.setAttribute("style",style);

                var selectsearch=this.parentElement;

                var opt = got(selectsearch,"opt");

                for (var x=0;x<opt.length;x++){

                  opt[x].setAttribute("selected",false);
                  opt[x].style.display="none";
                  
                }

                this.setAttribute('selected',true);

                localStorage.filtropacientes=this.getAttribute("value");

                if(bt.value!==''){
                  
                  window.onscroll=null;
                  
                }else{

                 window.onscroll=lazyload;
                  
                }
                
          
                
                tabelaLoad(gA(),function(tabela){
                  
                  rE(got(document,'tabela'));
                  document.getElementsByTagName("view")[0].appendChild(tabela);
                  
                });

                
              });

            select.appendChild(bt);

          }

        }
    
  };
    
  xmlhttp.open("GET", url, true);
	xmlhttp.send();
    
	select.onmouseover = function(){
		
		this.setAttribute("mouse","1");
		
	}
	
	select.onmouseout = function(){
		
		this.setAttribute("mouse","0");
			
	}
	
	label.onblur = function() {
		
		if(select.getAttribute("mouse")==0){
			
			var item = got(select,"opt");

			for(var x=0;x<item.length;x++){

				item[x].style.display="none";

			}
			label.value="";
		}
		
	};
  
	icon.onclick=(function(){
    
    var selectsearch=this.parentElement;

    document.getElementById("filterlabel"+modules).setAttribute("placeholder","Procure ...");
    document.getElementById("filterlabel"+modules).value="";
    document.getElementById("filtercodigo"+modules).value="";
    
    selectsearch.getElementsByTagName("labelfigure")[0].style="";
    
    tabelaLoad("",function(tabela){
      
      rE(got(document,'tabela'));
      document.getElementsByTagName("view")[0].appendChild(tabela);
      
    });
    
  });
  
	label.onfocus = function() {
		
		//if(attribute.value.length<50){
				var item = got(select,"opt");

					for(var x=0;x<item.length;x++){

								item[x].style.display="block";

				}
		//}
		
	};
	
  label.onkeyup = function() {

    var item = got(select,"opt");

    if(item.length && this.value.length>3){

      var string1 = removeAcento(this.value.toLowerCase());
      
console.log("digitado="+string1);
            
      for(var x=0;x<item.length;x++){

        var ohtml=removeAcento(item[x].getElementsByTagName("label")[0].innerHTML.toLowerCase());

          if(ohtml.indexOf(string1) >= 0){			

            item[x].style.display="block";
            
            
          }else{

            item[x].style.display="none";

          }

      }

    }else{

      for(var x=0;x<item.length;x++){

        item[x].style.display="none";

      }

    }

  };
	
	div.appendChild(select);

	div.appendChild(input);

  return div;
  
}


/* ######## header_notifications.js ######## */


function iconNotification(){
  
    var iconNotifications= cE("icon");
  
        iconNotifications.setAttribute("class","icon-bell");

    var divNotification=cE("counternotification");
    
        iconNotifications.appendChild(divNotification);
 
        iconNotifications.onclick=(function(){
            setAllRead();
          document.body.setAttribute("filter","0");
      
          if(document.body.getAttribute("notification")=="1"){
            document.body.setAttribute("notification","0");
          }else{
            document.body.setAttribute("notification","1");
          }
        
        });
  
     return iconNotifications;

}

function loadNotifications(){
 
  fetch(localStorage.getItem("urljson")+"jsonNotifications.php", {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded'}, 
    body:  'wasread='+getNotification()
  })
  
  .then(response => response.json())
  .then(data => mountNotifications(data.notifications))
  .catch(erro => console.error(erro));
  
}

function setAllRead(){
    
  var notifications = document.getElementsByTagName("notifications")[0];
  var div = notifications.getElementsByTagName("div");
  
  if(div!==undefined){

    for(var x=0;x<div.length;x++){

      div[x].setAttribute("r","1");

    }
    
  }
  
}

function getNotification(){
  
  var notifications = document.getElementsByTagName("notifications")[0];
  
  if(notifications!==undefined){
    
    var wasread = goap(notifications,"r","0");

    var param = "";
    
    for(var x=0;x<wasread.length;x++){
      
      param+=wasread[x].getAttribute("codigo");
      
      if(x!=wasread.length-1){
         
            param+=",";
        
         }
      
    }
    
   
    return param;
    
  }

}

function mountNotifications(data){

  var counternotification=document.getElementsByTagName("counternotification")[0];

      var notifications = document.getElementsByTagName("notifications")[0];
  
    if(notifications!==undefined){
      
      counternotification.innerHTML=goap(notifications,"r","0").length;
   
      
    }else{
      counternotification.innerHTML="0";
    }

      if(data.length>0){
        
          counternotification.style.display='block';
        
      }else{
        
          counternotification.style.display='none';
        
      }

      mountBoxNotification(data);

}

function mountBoxNotification(array){
  
  if(document.getElementsByTagName("boxnotification").length==0){
    
    var box           = document.createElement("boxnotification");
    var notifications = document.createElement("notifications");
    var header        = document.createElement("header");
    
        box.appendChild(header);
        box.appendChild(notifications);
    
        document.body.appendChild(box);
    
  }else{
    
    var box = document.getElementsByTagName("boxnotification")[0];
    var notifications = box.getElementsByTagName("notifications")[0];
    var header = box.getElementsByTagName("header")[0];
    
  }

  for (var x=0;x<array.length;x++){
   
    var data = datePTBR(array[x].data);
    
    var div = document.createElement("div");
        div.setAttribute('codigo',array[x].codigo);
        div.setAttribute('r',array[x].wasread);
    var figure = document.createElement("figure");
    
        var url="url('"+localStorage.getItem("imgp")+array[x].filename+"');";
    
        figure.setAttribute("style","background-image:"+url+";");
    
    var user = document.createElement("user");
        user.innerHTML=array[x].label;
    
    var action = document.createElement("action");
        action.innerHTML=language("ptbr","shared");
    
    var modules = document.createElement("modules");
        modules.innerHTML=array[x].modules;
    
    var date = document.createElement("date");
        date.innerHTML=data.toLocaleString();
 
    div.appendChild(figure);
    div.appendChild(user);
    div.appendChild(action);
    div.appendChild(modules);  
    div.appendChild(date);
    
    if(checkNotificationsRepeat(array[x].codigo)){
      
      notifications.appendChild(div);
      
    }
    
  }
  
}

function datePTBR(string){
  
    var year = string.substring(0,4);
    var month = string.substring(5,7)-1;
    var day = string.substring(8,10);

    var hour = string.substring(11,13);
    var min = string.substring(14,16);
    var sec = string.substring(17,19);  
    var mil = 0;

    var data = new Date(year, month, day, hour, min, sec, mil);
  
  return data;
  
}

function checkNotificationsRepeat(codigo){
  
  var div = document.getElementsByTagName("boxnotification")[0].getElementsByTagName("notifications")[0].getElementsByTagName("div");
  
  if(div!==undefined){
    //console.log(div.length);
    for(var x=0;x<div.length;x++){
      
      if(div[x].getAttribute("codigo")==codigo){
        return false
      }
      
    }
    
  }
  
  return true;
  
}

function language(c,word){
  
  var ptbr = [];
  var en = [];
  
      ptbr.shared="compartilhou com você";
      en.shared="";
  
  return eval(c+"."+word);
  
}


/* ######## load.js ######## */


function load(){
  
  if(window.innerWidth <= 480) {

    document.body.setAttribute('mobile','1');

  }else{

   document.body.setAttribute('mobile','0');

  }

  document.body.appendChild(loadingMount());

  getLoginStatus();


}

function loopCheck(){
  
  setTimeout(function(){

    if(document.body.getAttribute('open')=='1'){
      
      if (navigator.onLine) {loadNotifications();} else {console.log('offline');}
      
    }
   
   
    loopCheck();
    
  }, 5000);  
    
}

window.onblur = function() {
  document.body.setAttribute('open','0');
}

window.onfocus = function() {
  document.body.setAttribute('open','1');
}

window.onhashchange = function() {
  
  formClose();
	navClose();
  
}

document.onkeydown = function(evt) {
	
	var teste=evt.keyCode;
   
	if(teste==27){
		 formClose();
		navClose();
	}
	
}
window.onload=load;



/* ######## loadLogged.js ######## */


function loadLogged(authentic){
	
  localStorage.suites=authentic.suites;
  localStorage.userinfo=JSON.stringify(authentic.userinfo);
 
	mountHeader(authentic);
	mountPrint(authentic);
	mountSection();

	navMount(authentic);
	
  loadNavSuite();

	var autoload=document.getElementsByTagName("body")[0].getAttribute("autoload");

      setTimeout(function(){

         loginSetStep1(authentic);

         setTimeout(function () {
                   rE(got(document,"login"));
                   rE(got(document,"pages"));
                }, 1000);
          }, 1000);

	
}


/* ######## loadingMount.js ######## */


function loadingMount(){
  
  var loading = cE("loading");
  
  var icon = cE("icon")
      icon.setAttribute("class","icon-spinner9")

  var label = cE("label");
  
  label.appendChild(cT("Aguarde"));
  
  loading.appendChild(icon);
  loading.appendChild(label);
  
  return loading;
  
}


/* ######## loginForm.js ######## */



function mountLogin(array){
	
var btclose     = createObject('{"tag":"btclose","innerhtml":"x","onclick":"document.body.setAttribute(\'openlogin\',\'0\');"}');  
  
var h1          = createObject('{"tag":"h1","innerhtml":"'+array.suites+'"}');  
  
var plogin      = createObject('{"tag":"p","innerhtml":"Login","class":"plogin"}'); 

var pinsert     = createObject('{"tag":"p","innerhtml":"Criar conta","class":"pinsert"}');
  
var pinsertm    = createObject('{"tag":"p","innerhtml":"Cadastro de Médico","class":"pinsertm"}');
  
var precovery   = createObject('{"tag":"p","innerhtml":"Recuperar senha","class":"precovery"}');  
  
var login 	    = createObject('{"tag":"login","class":"login","name":"login"}');

var formLogin   = createObject('{"tag":"form","onsubmit":"login();return false;"}');
  
var pattern     = encodeURI("\\d{11}");
  
var inputCPF    = createObject('{"tag":"input","id":"cpf","placeholder":"CPF","type":"number","title":"'+message("620")+'","pattern":"'+pattern+'"}');

var inputRG    = createObject('{"tag":"input","id":"identidade","placeholder":"RG Identidade"}');  

var inputTelefone    = createObject('{"tag":"input","id":"telefone","placeholder":"Telefone","type":"number"}');
  
var inputCEP    = createObject('{"tag":"input","id":"cep","placeholder":"CEP"}');    
  
var inputEndereco    = createObject('{"tag":"input","id":"endereco","placeholder":" (Rua, número e Bairro)"}');    
  
 
  
var inputCRM    = createObject('{"tag":"input","id":"crm","placeholder":"CRM","type":"number"}');
    
var inputName   = createObject('{"tag":"input","id":"name","placeholder":"Nome completo"}');
  
var pattern     = encodeURI("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$");  
  
var inputEmail  = createObject('{"tag":"input","id":"email","required":"required","placeholder":"seu@email.com","pattern":"'+pattern+'"}');
var inputPass   = createObject('{"tag":"input","id":"password","required":"required","type":"password","placeholder":"Senha"}');
var inputUsersTipos  = createObject('{"tag":"input","id":"userstipos","type":"hidden"}');
  
var div         = createObject('{"tag":"div","id":"status","class":"status"}');
  
var button      = createObject('{"tag":"button","id":"status","innerhtml":"Entrar"}');
var bLogin      = createObject('{"tag":"button","id":"btLogin","type":"button","textnode":"Fazer login"}');
var bInsert     = createObject('{"tag":"button","id":"btInsert","type":"button","textnode":"Criar conta"}');
  
var bInsertPaciente    = createObject('{"tag":"button","id":"btInsertPaciente","type":"button","textnode":"Sou paciente"}');
var bInsertMedico     = createObject('{"tag":"button","id":"btInsertMedico","type":"button","textnode":"Sou médico"}');
  
var bRecovery       = createObject('{"tag":"button","id":"btRecovery","type":"button","textnode":"Esqueci minha senha"}');
  
//var menu        = createObject('{"tag":"options"}');
  
bLogin.onclick=(function(){

  sA(login,'class','login');
  goi('name').removeAttribute('required');
  sA(formLogin,'onsubmit','login();return false;');
  
})

bInsert.onclick=(function(){

  sA(login,'class','insert');
  sA(goi('name'),'required','required');
  sA(formLogin,'onsubmit','insert();return false;');
  goi('userstipos').value="100";
  
})
  
bInsertPaciente.onclick=(function(){

  sA(login,'class','insertpaciente');
  sA(goi('name'),'required','required');
  sA(formLogin,'onsubmit','insert();return false;');
  goi('userstipos').value="100";
  
})  
  
bInsertMedico.onclick=(function(){

  sA(login,'class','insertmedico');
  sA(goi('name'),'required','required');
  sA(formLogin,'onsubmit','insert();return false;');
  goi('userstipos').value="50";
  
})  
  
bRecovery.onclick=(function(){

  sA(login,'class','recovery');
  goi('name').removeAttribute('required');
  goi('password').removeAttribute('required');
  sA(goi('email'),'required','required');
  sA(formLogin,'onsubmit','recovery();return false;');

})


  
formLogin.append(btclose,h1,plogin,pinsert,pinsertm,precovery,inputName,inputEmail,inputPass,inputCPF,inputRG,inputTelefone,inputCEP,inputEndereco);
  

formLogin.appendChild(bInsertPaciente);
formLogin.appendChild(bInsertMedico);

formLogin.append(inputCRM,inputUsersTipos,button);

if(localStorage.newusers==1){

    formLogin.appendChild(bInsert);

}
  
formLogin.append(bLogin,bRecovery);
  
login.append(formLogin);
  
document.body.appendChild(login);
  
  	/*
  	login.appendChild(adsense());
	(adsbygoogle = window.adsbygoogle || []).push({});
*/
	
}



/* ######## loginInsert.js ######## */


function insert(){
		
	var name 	     = goi('name');
	var email 	   = goi('email');
	var cpf 	     = goi('cpf');
	var crm 	     = goi('crm');
  
	var identidade = goi('identidade');
	var telefone 	 = goi('telefone');
	var cep 	     = goi('cep');
	var endereco 	 = goi('endereco'); 
  
	var password   = goi('password');
	var userstipos = goi('userstipos');
	var status     = goi('status');
		
	name.setAttribute('class','');
	email.setAttribute('class','');
	password.setAttribute('class','');
	cpf.setAttribute('class','');
	
	status.innerHTML="";
	status.innerHTML="<p>Verificando...</p>";
  
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();
 
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

	    var authentic=JSON.parse(xmlhttp.responseText);

      switch (authentic.status) {
          
      case '1':loginInsertSuccess(authentic);break;
      case '602':name.setAttribute('class','error');status.innerHTML=message(authentic.status);break;
      case '603':password.setAttribute('class','error');status.innerHTML=message(authentic.status);break;
      case '605':cpf.setAttribute('class','error');status.innerHTML=message(authentic.status);break;   
      case '606':cpf.setAttribute('class','error');status.innerHTML=message(authentic.status);break;  
      case '607':email.setAttribute('class','error');status.innerHTML=message(authentic.status);break; 
          
      default:email.setAttribute('class','error');status.innerHTML=message("999");}        
      
		}
    
	};

	setTimeout(function () {
    
    var url = localStorage.getItem("url")+'/admin/json/jsonLoginInsert.php';
    var params = "";
    
    params+="userstipos="+userstipos.value+"&";
    params+="crm="+crm.value+"&";    
    params+="cpf="+cpf.value+"&";
    params+="email="+email.value+"&";
    params+="password="+password.value+"&";
    params+="name="+name.value+"&";
    params+="identidade="+identidade.value+"&";
    params+="telefone="+telefone.value+"&";
    params+="cep="+cep.value+"&";
    params+="endereco="+endereco.value+"&";
  
    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send(params);    
    
	}, 1000);
	
	
	
}


/* ######## loginInsertSucess.js ######## */


function loginInsertSuccess(authentic){
  
	var status   = goi('status');
  sA(status,"class","sucess");
  
  status.innerHTML=message(authentic.status);
  
  setTimeout(function () {
    rE(got(document,"login"));
    loadLogged(authentic);
  }, 2000);
  
}



/* ######## loginLogin.js ######## */


function login(){
	
	//var form  	 = got(document,'form');

	var email 	 = goi('email');
	var password = goi('password');
	var status   = goi('status');
	
	email.setAttribute('class','');
	password.setAttribute('class','');
	
	sA(status,"class","loading");
	status.innerHTML="";
	status.innerHTML="Autenticando...";
 
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();
  
	xmlhttp.onreadystatechange = function() {
		
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			var authentic=JSON.parse(xmlhttp.responseText);

			if(authentic.status==="1"){
				
				//success

				status.innerHTML=message("501");	
				sA(status,"class","sucess");
				setTimeout(function () {loadLogged(authentic);}, 500);
			
			}else{
				
				sA(status,"class","error");
				
        status.innerHTML=message(authentic.status);
        
        switch (authentic.status) {

          case '502':sA(password,"class","error");break;  
          case '504':sA(email,"class","error");break; 
          case '505':sA(password,"class","error");break;
          case '508':sA(email,"class","error");break;            
  
        }  
  
				setTimeout(function () {status.innerHTML="Entrar";sA(status,"class","");}, 2000);
				
			}
		}
	};

	setTimeout(function () {

    var url    = localStorage.getItem("url")+'/admin/json/jsonLogin.php';
    var params = 'email='+email.value+'&password='+password.value;

    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send(params);
		
	}, 1000);

	
}

function loginSetStep1(authentic){
  
  document.body.setAttribute('logged',authentic.status);
  document.body.setAttribute('areas',authentic.areas);
  document.body.setAttribute('open',"1");

}

function logoutResetStep1(){
  
   document.body.setAttribute('logged','0');
   document.body.setAttribute('notification','0');
   document.body.setAttribute('filter','0');
  
}

function logoutResetStep2(){
  
    rE(got(document,'nav'));
    rE(got(document,'grade'));
    rE(got(document,'section'));
    rE(got(document,'boxfilter'));
    rE(got(document,'header'));
    rE(got(document,'boxnotification'));
    rE(got(document,'navsuite'));
    rE(got(document,'printheader'));
    document.body.setAttribute('modules',"");

  }


/* ######## loginLogout.js ######## */



function logout(){
	
	var url = localStorage.getItem("url")+'/admin/json/jsonLogout.php';
		
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			var authentic=JSON.parse(xmlhttp.responseText);

         mountLogin(authentic);
      
         
      
         setTimeout(function () {
           
            logoutResetStep1();
           
            setTimeout(function () {
              logoutResetStep2();
              pagesLoad();
            }, 1000);
      
          }, 500);

		}
		
	};
  
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
			
}



/* ######## loginRecovery.js ######## */



function recovery(){
	
	var email 	 = goi('email');
	var status   = goi('status');
  var suites = document.body.getAttribute("suites");
	
	email.setAttribute('class','');
	
	sA(status,"class","loading");
	status.innerHTML="";
	status.innerHTML="Localizando conta...";
	
	var url = localStorage.getItem("url")+'/admin/json/jsonLoginRecovery.php?email='+email.value+'&suite='+suites;
		
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			var authentic=xmlhttp.responseText;

		
			if(authentic==1){
				
				//success

				status.innerHTML="A senha enviada por email";				
				sA(status,"class","sucess");
			
			
			}else{
				
				sA(status,"class","error");
				
				if(authentic==="2"){

					//blank username
					sA(email,"class","error");
					status.innerHTML="Campo vazio";

				}else if(authentic==="3"){

					//blank password
					sA(password,"class","error");
					status.innerHTML="Campo vazio";
					
				}else if(authentic==="501"){

					//wrong usernme
					status.innerHTML="Usuário não encontrado";
					email.setAttribute('class','error');

				}else if(authentic==="502"){	

					//wrong password
					status.innerHTML="Senha inválida";
					password.setAttribute('class','error');

				}else if(authentic==="503"){

					//deactivated account
					status.innerHTML="Conta desativada";

				}else{
					
					status.innerHTML="Erro desconhecido";
					
				}
				
				setTimeout(function () {status.innerHTML="Entrar";sA(status,"class","");}, 2000);
				
			}
		}
	};

	setTimeout(function () {
		
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
		
	}, 1000);

	
}



/* ######## loginStatus.js ######## */


function getLoginStatus(){
	
	var url = localStorage.getItem("url")+'/admin/json/jsonLogin.php';
		
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			var authentic=JSON.parse(xmlhttp.responseText);
			
				if(authentic.status==="1"){
				
					//success
					loadLogged(authentic);
          //console.log(authentic);
          document.body.setAttribute('logged','1');
          
          document.body.setAttribute('open','1');
          loopCheck();
      
				}else{
          
          document.body.setAttribute('open','0');
					document.body.setAttribute('logged','0');
					//fail
		      pagesLoad();
					mountLogin(authentic);

				}
			
		}
    
	};
	
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
}


/* ######## loginUsersTipos.js ######## */


function mountLoginUserstipos(array){

  if(array.userstipos!==undefined && array.userstipos!==null ){

    var select  = createObject('{"tag":"select","id":"userstipos"}');

    for(var x=0;x<array.userstipos.length;x++){

      var label  = array.userstipos[x].label;
      var codigo = array.userstipos[x].codigo;

      var option = createObject('{"tag":"option","id":"userstipos","textnode":"'+label+'","value":'+codigo+'}');
      select.appendChild(option);

    }

    return select;
       
  }else{
    
    var input = createObject('{"tag":"input","id":"userstipos","type":"hidden","value":100}');
    
    return input;
    
  }
 
}


/* ######## message.js ######## */


function message(code){
 
  var a=[];
  
      a["1"]="Cadastro realizado com sucesso";

      a["501"]="Logado com sucesso";
      a["502"]="Senha inválida";
      a["503"]="Conta desativada";
      a["504"]="Usuário não encontrado";
      a["505"]="Campo password vazio";
      a["506"]="Erro deconhecido";
      a["507"]="Sistema em atualização";
      a["508"]="Campo usuário está vazio";

      a["602"]="Campo nome completo está vazio";
      a["603"]="Campo email está vazio";
      a["605"]="O campo cpf está vazio";
      a["606"]="Este cpf já foi cadastrado por outro usuário";
      a["607"]="Este email já foi cadastrado por outro usuário";
      
      a["620"]="Digite apenas números, 11 dígitos";
      
  
      a["999"]="Erro no sistema";  
  
  return a[code];       

}


/* ######## modulesLoad.js ######## */


function modulesOpen(e){
	
	var body 		= got(document,'body')[0];
	var codigo 	= e.getAttribute('c');
	var modules = e.getAttribute('modules');

	e.appendChild(boxLoad());

	race(got(document,"view")[0]);

	changeTitle(modules);
  
	var menu    = cE("menu");

	var view    = got(document,'view')[0];
  
  //document.body.setAttribute("filter",gMI(modules,"filter"));
  
  menu.appendChild(btNew());
  view.appendChild(menu); 
  
 // if(gMI(modules,"filter")==0){

 //   window.onscroll=null;
  //  console.log("Lazyload off");
    
 // }else{

   window.onscroll=lazyload;
 //   console.log("Lazyload on");
    
    
 // }

  
  sA(body,'modules',modules);

  
	tabelaLoad(modules,function(list){
   rE(got(document,"box"));
    boxFilter();
		
    document.body.setAttribute("loading","0");

    view.appendChild(list); 
    
	});


 
}

function loadItem(item,array){
  
  var header = cE("header");
  var footer = cE("footer");
  
	if(array.me==1){
    
	    item.onclick=(function(){ 

			  document.body.setAttribute("loading","1");
        formEdit(gA(),array.codigo)
      
      });
    
  }else{
    
      var iconshare = document.createElement("icon");
          iconshare.setAttribute("class","icon-share2");
    
      header.appendChild(iconshare);
    
  }

	item.setAttribute("a",array.activated);
  
  header.appendChild(loadInfo(array));
	
  loadPacientes(header,array)

	if(array.category!==undefined && array.category!==null){
		
		var icon = cE("category");
		icon.appendChild(cT(array.categorylabel));
		//icon.setAttribute("style","color:"+array.categorycolors+";");
		header.appendChild(icon);

		item.setAttribute("category",array.category);
		//item.setAttribute("style","background-color:"+array.categorycolors+"20;border:1px solid "+array.categorycolors+"40;");
		header.setAttribute("style","background-color:"+array.categorycolors+"20;");
    //item.style.border="1px solid "+array.categorycolors+"40";
    item.style.backgroundColor=array.categorycolors+"20";
    
    item.appendChild(header);
    
	}	
		
	var p 	 = cE('p');

	p.appendChild(cT(array.label));

	item.setAttribute('me',array.me);
	item.appendChild(p);
	
  loadItemDetail(item,array);
  
  //loadUser(footer,array);
 
  loadMedicos(footer,array);
  
  loadShare(footer,array);

	//if(array.share!==undefined || array.medicoslabel!==undefined){ 
   
  if(footer.innerHTML!=""){
       item.appendChild(footer);
     }
    
    
  //}
 
}

function loadUser(elements,array){
  
  if(array.userslabel!==undefined){

    var div = cE("div");
    
    var user = cE('user');
    
    var icon = cE("icon");
        icon.setAttribute("class","icon-user");

    var label = cE("label");
        label.appendChild(cT("Criado por: "));
    div.appendChild(label);
    var label2 = cE("label");
        label2.appendChild(cT(array.userslabel));

    //div.appendChild(icon);
    div.appendChild(label);    
    div.appendChild(label2);
    
    user.appendChild(div);
    
    elements.appendChild(user);
    
  }
  
}

function loadShare(element,array){
  


  if(array.share!==undefined ){
  var share = cE("share");
        var icon = cE("icon");
            icon.setAttribute("class","icon-share2");

            
            var div = cE("div");
            //div.appendChild(icon);
             share.appendChild(div);
       
            for(var s=0;s<array.share.length;s++){
              
              var div = cE("div");

              var figure = cE("figure");

                  div.appendChild(figure);

              var label = cE("label");

                  label.appendChild(cT(array.share[s].label));

                  div.appendChild(label);

                 // div.setAttribute("style","background-color:"+array.categorycolors+";color:#fff;");
              
              share.appendChild(div);

            }
    
    element.appendChild(share);
      }
  

}

function loadPacientes(element,array){
  
   if(array.pacienteslabel!==undefined && array.pacienteslabel!==null){
     
      var pacientes = cE("pacientes");

      if(array.pacienteslabel!==undefined && array.pacienteslabel!==null){

        var div = cE("div");

        var icon = cE("icon");
            icon.setAttribute("class","icon-aid-kit");

        var label = cE("label");
            label.appendChild(cT("Paciente: "));

        var pacientesnome = array.pacienteslabel.split(" ");
        
        var label2 = cE("label");
            label2.appendChild(cT(pacientesnome[0]+" "+pacientesnome[1]));

        var nome = array.pacienteslabel;

        div.appendChild(label2);
        pacientes.appendChild(div);

      }
     
      element.appendChild(pacientes);
     
     pacientes.onmouseover=(function(){
            
      var url = localStorage.getItem("url")+'/admin/json/jsonGetTableView.php?p=users|label|email|telefone|cpf|endereco&w=codigo|'+array.pacientescodigo;

      var xmlhttp;

      xmlhttp = new XMLHttpRequest();

      xmlhttp.onreadystatechange = function() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

          var json = JSON.parse(xmlhttp.responseText);

          pacientes.setAttribute('title',json[0].label+"\nTelefone: "+json[0].telefone+"\nEmail: "+json[0].email+"\nCPF: "+json[0].cpf+"\nEndereço: "+json[0].endereco);

        }

      };

      xmlhttp.open("GET", url, true);
      xmlhttp.send();  
       
       
    });

   }
  
}

function loadMedicos(elements,array){
  
   if(array.medicoslabel!==undefined && array.medicoslabel!==null){
     
        var medico = cE("medicos");

        var div = cE("div");

        var icon = cE("icon");
            icon.setAttribute("class","icon-reddit");

        var label = cE("label");
            label.appendChild(cT("Médico: "));

        var label2 = cE("label");
         

            if(array.medicoswhereby!==undefined && array.medicoswhereby!==null){
              
              var a = document.createElement("a");
              var text = cT(array.medicoslabel);
              
              a.appendChild(text);
              a.setAttribute("href","https://whereby.com/"+array.medicoswhereby);
              a.setAttribute("target","_blank");
              
                label2.appendChild(a);
              
            }else{
              
               label2.appendChild(cT(array.medicoslabel));
              
            }
     
        var nome = array.medicoslabel;


        div.appendChild(label);
        div.appendChild(label2);

        medico.appendChild(div);

        elements.appendChild(medico);
     
   }

}

function loadItemDetail(elements,array){

	
	if(array.files!==undefined ){
    
		var detalhes = cE("detalhes");
    
		for(var y=0;((y<array.files.length));y++){
			
			var figure = cE("figure");
			
      		figure.style['border']="2px solid "+array.categorycolors+"40";
      
			var filename=array.files[y].filename.split(".");
			var key=array.files[y].key;
      
      if(array.me!=="1"){
        
          if(filename[1]=="jpg"){

            figure.setAttribute("onclick","window.open('"+localStorage.getItem("url")+"/admin/json/jsonAnexosView.php?anexos="+array.anexos+"','_blank');");
            
          }else if(filename[1]=="pdf"){
    
            var label = cE("label");
            label.appendChild(cT("pdf"));
            figure.appendChild(label);
            figure.setAttribute("onclick","window.open('"+localStorage.getItem("pdf")+""+filename[0]+".pdf','_blank');");
            
            //var iframe = cE("iframe");
            //    figure.appendChild(iframe);
            //    iframe.setAttribute("src",localStorage.getItem("pdf")+""+filename[0]+".pdf");
            
          }    
        
      }else{

          if(filename[1]=="jpg"){

          }else if(filename[1]=="pdf"){

            var label = cE("label");
            
            label.appendChild(cT("pdf"));
            figure.appendChild(label);
            
              // var iframe = cE("iframe");
            //   figure.appendChild(iframe);
             //  iframe.setAttribute("src",localStorage.getItem("pdf")+""+filename[0]+".pdf");
            
          }          
        
      }
               
			figure.style.backgroundImage="url("+localStorage.getItem("imgp")+filename[0]+".jpg?key="+key;
			detalhes.appendChild(figure);	
				
		}
    
    elements.appendChild(detalhes);
	}		


	
}

function loadItemJson(codigo,cb){
	
	var area=gA();

	var url = localStorage.getItem("url")+'/admin/json/jsonView.php?area='+area+'&codigo='+codigo;
		
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function() {
		
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			
			var json = JSON.parse(xmlhttp.responseText);
						
			cb(json[0]);
			
		}
		
	};
	
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
}

function loadInfo(array){
  
  var icon = document.createElement("icon");
      icon.setAttribute("class","icon-info");
  
  var formatter = new Intl.DateTimeFormat("pt", { month: "short" });
	
	var mes       = formatter.format(new Date(array.dataextenso));
	
	var date      = new Date(array.dataextenso);
  
	var dia       =  date.getDate()
  
	var text = cT(array.data);
	var postdata = document.createElement("data");
			//postdata.appendChild(text);
			postdata.setAttribute("title","Codigo\n"+array.codigo+"\n\nData\n"+array.data+"\n\nCriado por\n"+array.userslabel+"\n\nQtd de registros\n"+array.contador);
  
      postdata.appendChild(icon);
  
  return postdata;
  
}


/* ######## mountPrint.js ######## */



function mountPrint(array){
	
		var header = cE("printheader");
			
		var a 			= cE("a");
		var logo    = cE("logo");
		var span    = cE("span");	
		var text    = cT(array.suites);

		span.appendChild(text);
		logo.appendChild(span);
		a.appendChild(logo);
header.appendChild(logo);

		got(document,"body")[0].appendChild(header);
		
		
}


/* ######## pagesLoad.js ######## */



function pagesLoad(){
  
  var url = localStorage.getItem("urljsonpages")+"getSections.php";
  
  fetch(url, {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded'}
  })
  
  .then(response => response.json())
  .then(data => pagesMount(data))
  .catch(erro => console.error(erro));
    
}

function pagesMount(json){
  
  var pages = document.createElement("pages");
  
  var header = pagesMountHeader(json);
  
      pages.appendChild(header);
  
    for(var x=0;x<json.length;x++){

        pages.appendChild(pagesMountSection(json[(json.length-1)-x]));

    }
  
  document.body.appendChild(pages);
 
}


/* ######## pagesMountHeader.js ######## */


function pagesMountHeader(json){
  
  var header  = document.createElement("top");
  
  var nav     = document.createElement("nav");
  
  var logo    = document.createElement("logo");

  var content = document.createElement("content");
  
      content.appendChild(logo);  
      content.appendChild(nav); 
  
  
      header.appendChild(content);  
  
  for (var x=0;x<json.length;x++){

    var a = document.createElement("a");

    a.innerHTML=json[x].label;

    a.setAttribute("href","#section-"+json[x].url);

    nav.appendChild(a);

  }
  

  
  return header;
  
}


/* ######## pagesMountOutrosProjetos.js ######## */


function pagesMountOutrosProjetos(json){
  
  var box    = document.createElement("box2");
  var image = localStorage.getItem("img")+json.files[0].filename+"?key="+json.files[0].key;

  
  var figure = document.createElement("figure");
    figure.setAttribute("style","background-image:url('"+image+"');");
  var h2     = document.createElement("h2");
      h2.innerHTML=json.label;
  
  var p      = document.createElement("p"); 
  
      p.innerHTML=json.content;
  
  var bt1 = document.createElement("bt1"); 
  
      bt1.setAttribute('onclick','window.open("/'+json.url+'/","_self");')
      bt1.innerHTML="Acessar";

      box.append(figure,h2,p,bt1);
  
  return box;
}


/* ######## pagesMountSections.js ######## */


function pagesMountSection(json){
  
  var section = document.createElement("section");
      section.setAttribute("id","section-"+json.url);
  
  var content = document.createElement("content");
      section.appendChild(content);
  
  var h1 = document.createElement("h1");
      h1.innerHTML=json.label;
      content.appendChild(h1);
  
  if(json.files.length){

    var image = localStorage.getItem("img")+json.files[0].filename+"?key="+json.files[0].key;
        section.setAttribute("style","background-image:url('"+image+"');");

  }
  
  if(json.url=='outros-projetos'){
    
      for(var y=0;y<json.outrosprojetos.length;y++){
        
        content.appendChild(pagesMountOutrosProjetos(json.outrosprojetos[y]));
        
      }
    
     

  }else{
    
    content.innerHTML+=json.content;
    
  }
  
  
  section.appendChild(content);

  return section;

}