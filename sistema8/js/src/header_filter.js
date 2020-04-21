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