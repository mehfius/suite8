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