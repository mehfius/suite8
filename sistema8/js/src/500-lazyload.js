
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