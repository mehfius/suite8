
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