function formMountMultiple(attribute){
 
  var label       = cE("label");
	var div         = cE("div");
  
  label.appendChild(cT(attribute.label));
  div.appendChild(label);

  div.setAttribute("class","multiple");
  //finder(div);

		var select = cE("multiple");
		var input  = cE("input");
		var valor  = (attribute.value[0].value[0]==",")?attribute.value[0].value:","+attribute.value[0].value;
	
		input.setAttribute("name",attribute.name);
		input.setAttribute("title",attribute.title);
		input.setAttribute("value",valor);
		input.setAttribute("autocomplete","off");
		input.setAttribute("required","");
		input.setAttribute("type","hidden");
		input.setAttribute("tipo","select");	
		select.appendChild(input);
		
		var arrayS = attribute.value;

		for (var keyS in arrayS){
			
			var codigo = arrayS[keyS].codigo;
			var label  = arrayS[keyS].label+" ("+arrayS[keyS].codigo+")";
			
			var bt = cB(label);
			
			bt.setAttribute("value",codigo);
			
			var selected = valor.indexOf(","+codigo+","); 
			
			if(selected>=0){
		
				bt.setAttribute('selected','1');

			}else{
				
				bt.setAttribute('selected','0');
				
			}
			
			bt.onclick=(function(){
				
				//var bt 		= got(this.parentNode,"button");
				var attr = this.getAttribute("selected");
				
				if(attr==1){
					
					this.setAttribute("selected","0");
					var valor = ","+this.value+",";
					var text = input.value;
					var x = text.replace(valor,","); 
					input.value=x;
					
				}else{
					
					this.setAttribute("selected","1");
					var valor = this.value+",";
					input.value=input.value+valor;
					
				}

			});

			select.appendChild(bt);

		}
	

	
	  div.appendChild(select);

  return div;
	
}

