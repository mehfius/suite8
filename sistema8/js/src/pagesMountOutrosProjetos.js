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