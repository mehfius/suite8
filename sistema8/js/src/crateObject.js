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