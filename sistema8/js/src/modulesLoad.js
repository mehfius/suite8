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