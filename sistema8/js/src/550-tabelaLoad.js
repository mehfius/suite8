
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
