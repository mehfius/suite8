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