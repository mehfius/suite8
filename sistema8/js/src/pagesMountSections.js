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