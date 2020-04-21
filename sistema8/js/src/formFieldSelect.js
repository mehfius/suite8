function formMountSelect(attribute){
	 
    var div         = cE("div");
  
    var label       = cE("label");
  
		var placeholder = cE("placeholder");
 
		var icon				= cE("icon");
				icon.setAttribute("class","icon-arrow-down");
 
	
    label.appendChild(cT(attribute.label));
  
		placeholder.appendChild(cT("Selecione"));
		placeholder.setAttribute("class","default");

    div.appendChild(label);
		div.appendChild(placeholder);
		div.appendChild(icon);
		//div.appendChild(iconconfig);
	
		var select = cE("select");
				select.setAttribute("name",attribute.name);
	
	if(attribute.value!==undefined){
		var valor  = (attribute.value[0].value!=="")?attribute.value[0].value:"1";

		var arrayS = attribute.value;

		var bt = cE("option");
		select.appendChild(bt);

		bt.appendChild(cT("Selecione"));
    
   
    
		for (var keyS in arrayS){

			var codigo = arrayS[keyS].codigo;
			var alabel  = arrayS[keyS].label;

			var bt = cE("option");

			bt.appendChild(cT(alabel));

			bt.setAttribute("value",codigo);

			if(attribute.name=="colors"){
				bt.setAttribute("style","background-color:"+alabel+";");
			
			}

			if(codigo==arrayS[keyS].value){
				

				placeholder.innerHTML=alabel;
		
				bt.setAttribute('selected',true);
				

			}else{

				//bt.setAttribute('selected','0');

			}

			select.appendChild(bt);

		}
	}
	
		
	
		select.onchange=(function(){
			placeholder.innerHTML=this.options[this.selectedIndex].innerHTML;
		});
	
	  div.appendChild(select);
  
  return div;
	
}

function formMountSelectCustom(attribute){

    var div           = cE("div");
  
    var label         = cE("label");

        label.appendChild(cT(attribute.label));
  
        div.appendChild(label);  
  
		var finder        = cE("input");
	
				finder.setAttribute("name","findernew");
        finder.setAttribute("title",attribute.label);
	
		var labelfigure   = cE("labelfigure");

		var icon				  = cE("icon");
	
		if(attribute.value.length<50){
				icon.setAttribute("class","icon-arrow-down");
		}
	
		var iconconfig				= cE("icon");
				iconconfig.setAttribute("class","icon-cog");
				iconconfig.setAttribute("modules",attribute.name);
				//ipconfig.setAttribute("");
	
				iconconfig.onclick=(function(){
					
					if(confirm("Tem certeza que deseja mudar de página?")){
						
						modulesOpen(this);
						formClose();
						
					}else{
						
					};
					
				});
	
		var input = cE("input");
				input.setAttribute("name",attribute.name);
				input.setAttribute("type","hidden");
				input.setAttribute("codigo",attribute.codigo);
				input.setAttribute("required",attribute.required);
	
		finder.placeholder="Escolha "+attribute.label;
		finder.setAttribute("class","default");
		finder.setAttribute("autocomplete","new-password");
	
  
  
		div.appendChild(labelfigure);
  
		div.appendChild(finder);
		div.appendChild(icon);
		//div.appendChild(iconconfig);
	
		var select = cE("select3");
				
	      select.setAttribute("mouse","0");
  
	//console.log("name"+attribute.name+" - valor:"+attribute.value);
  
	if(attribute.value!==undefined){
		
		var valor  = (attribute.value[0].value!=="")?attribute.value[0].value:"1";

		var arrayS = attribute.value;

		for (var keyS in arrayS){

			var codigo  = arrayS[keyS].codigo;
			var alabel  = arrayS[keyS].label;

			var bt 			= cE("opt");
			
			var optlabel		= cE("label");
					optlabel.appendChild(cT(alabel));
			
			var optfigure 	= cE("figure");
			
			if(arrayS[keyS].filename!==undefined){
				
					optfigure.setAttribute("style","background-image:url("+localStorage.getItem("imgm")+arrayS[keyS].filename+"?key="+arrayS[keyS].key+");");
				
			}

			if(arrayS[keyS].colors!==undefined){
				
					optfigure.setAttribute("style","background-color:"+arrayS[keyS].colors+";");
				
			}
			
      if(arrayS[keyS].filename!==undefined || arrayS[keyS].colors!==undefined){
        
			  bt.appendChild(optfigure);
        
      }
      
      
			bt.appendChild(optlabel);
			
			bt.setAttribute("value",codigo);

			if(attribute.name=="colors"){
				
				optfigure.setAttribute("style","background-color:"+alabel+";");
			}
				
			bt.onclick=(function(){
				
				input.value=this.getAttribute("value");
				finder.value=got(this,"label")[0].innerHTML;
				finder.placeholder=got(this,"label")[0].innerHTML;
				//var select3 = document.getElementsByName(attribute.name);
				var style=got(this,"figure")[0].getAttribute("style");
				
				labelfigure.setAttribute("style",style);
				
				var select3=this.parentElement;
				
				var opt = got(select3,"opt");
				
				for (var x=0;x<opt.length;x++){
					
					opt[x].setAttribute("selected",false);
					opt[x].style.display="none";
				}
				
				this.setAttribute('selected',true);
				select3.style.display="none";
        
			});
			
			if(codigo==arrayS[keyS].value){
				
				finder.value=alabel;
				input.value=codigo;
        
				bt.setAttribute('selected',true);
        
        if(got(bt,"figure").length){
          
				  var style=got(bt,"figure")[0].getAttribute("style");
          labelfigure.setAttribute("style",style);
          
        }
				
			}else{

			}
			//bt.setAttribute('selected',false);
			select.appendChild(bt);

		}
    
	}
	
	select.onmouseover = function(){
		
		this.setAttribute("mouse","1");
		
	}
	
	select.onmouseout = function(){
		
		this.setAttribute("mouse","0");
			
	}
	
	finder.onblur = function() {
		
		if(select.getAttribute("mouse")==0){
			
			var item = got(select,"opt");

			for(var x=0;x<item.length;x++){

				item[x].style.display="none";

			}
			//label.value="";
       select.style.display="none";
 
		}
		
	};
  
	icon.onclick=(function(){
    label.focus();
  });
  
	finder.onfocus = function() {
		
		if(attribute.value.length<50){
      
				var item = got(select,"opt");

				for(var x=0;x<item.length;x++){

						item[x].style.display="block";

				}
      
		}
    
    select.style.display="block";
		
	};
  
	
	finder.onkeyup = function() {

	  var item = got(select,"opt");

		if(item.length && this.value.length>3){

			var string1 = removeAcento(this.value.toLowerCase());

			for(var x=0;x<item.length;x++){

				var ohtml=removeAcento(item[x].innerHTML.toLowerCase());

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
	//var selectgrid	= cE("selectgrid");
	//div.appendChild(selectgrid);
	div.appendChild(input);

  return div;
	
}