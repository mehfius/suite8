function formMountTagGroup(attribute){
                      
  console.log(attribute);
  
  var label       = cE("label");
	var div         = cE("div");
  var tagview     = cE("tagview");

      label.appendChild(cT(attribute.label));

      div.appendChild(label);
      div.appendChild(btAdd(attribute));

      div.setAttribute("class","formtag");

  var tagsearchbox = cE("tagsearchbox");
      tagsearchbox.appendChild(iconClose());

  var taghidden = cE("taghidden");

  var input  = cE("input");

  var valor  = attribute.value;

      input.setAttribute("name",attribute.name);
      input.setAttribute("title",attribute.title);
      input.setAttribute("value",valor);
      input.setAttribute("autocomplete","off");
      input.setAttribute("required","");
      input.setAttribute("type","hidden");
      input.setAttribute("tipo","select");

      tagFinder(tagsearchbox);

      tagsearchbox.appendChild(input);
  
 
	var arrayS = attribute.list;

		for (var keyS in arrayS){
			
			var codigo = arrayS[keyS].codigo;
			var label  = arrayS[keyS].label;
      
			var opt = cE("opt");
      
			    opt.appendChild(cT(label));
			    opt.setAttribute("value",codigo);
     
			var found = valor.indexOf('"codigo":"'+codigo+'"'); 
			
			if(found>=0){
		
				opt.setAttribute('selected','1');
        
        var val = getObjectByCode(valor,codigo);
        
        var list = [];

            list.label=label;
            list.codigo=codigo;
            list.valor=val.valor;
           // list.valor=codigo;
        
        tagview.appendChild(tag(list));        
        
			}else{
				
				opt.setAttribute('selected','0');
				
			}
			
			opt.onclick=(function(){
				
				var attr = this.getAttribute("selected");
				
				if(attr==1){
					
					this.setAttribute("selected","0");
				
					var text = input.value;
          
					var div = this.parentElement.parentElement.parentElement;
          
          var tagview = got(div,"tagview")[0];
          
          rE(goap(tagview,"c",this.getAttribute('value'))[0]);
          
          input.value=getSelectedValues(tagview);
          
				}else{
					
					this.setAttribute("selected","1");
			
          var list = [];
          
              list.label=this.innerHTML;
              list.codigo=this.getAttribute('value');
          
          var div = this.parentElement.parentElement.parentElement;
          
          var tagview = got(div,"tagview")[0];
              tagview.appendChild(tag(list));
					    
          input.value=getSelectedValues(tagview);
          
				}

			});

			taghidden.appendChild(opt);

		}
  
	  tagsearchbox.appendChild(taghidden);    
  
	  div.appendChild(tagsearchbox);
    div.appendChild(tagview);
  
  
  return div;
  
}