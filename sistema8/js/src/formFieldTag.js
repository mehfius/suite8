function formMountTag(attribute){
                      
  var label       = cE("label");
	var div         = cE("div");
  var view        = cE("tagview");
  
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
        
        view.appendChild(tag(list));        
        
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
    div.appendChild(view);
  
  return div;
	
}

function getObjectByCode(json,code){
  
  var obj = JSON.parse(json);
  
  for (var i = 0; i < obj.length; i++){
  
    if (obj[i].codigo == code){
      return obj[i];
    }
    
  }
  
}

function iconClose(){
  
  var icon  = cE("icon");
      icon.setAttribute("class","icon-cross");
  
 
      icon.onclick=(function(){this.parentElement.parentElement.setAttribute("search","0");});
  
  return icon;
  
}

function btAdd(attribute){
  
  var icon  = cE("icon");
      icon.setAttribute("class","icon-plus");
  
  var label = cE("label");
      label.appendChild(cT("Adicionar"));
  
  var btadd = cE("add");
      btadd.onclick=(function(){this.parentElement.setAttribute("search","1");});
  
  
      btadd.appendChild(icon);
      btadd.appendChild(label);
    
  return btadd;
  
}

function tag(list){
  
  var div     = cE("div");
  var label   = cE("label");
  
  var valor   = cE("valor");  
  
      if(list.valor!==undefined){
        
        valor.appendChild(cT(list.valor));
        
      }
  
  valor.onblur=(function(){
    
    var tagview = this.parentElement.parentElement;
    var valor = this.parentElement.parentElement.parentElement.getElementsByTagName("tagsearchbox")[0].getElementsByTagName("input")[1];
    
    valor.value=getSelectedValues(tagview);
    
  });
  
  var figure  = cE("figure");
  
  var btRemove   = cE("icon"); 
  
      btRemove.setAttribute("class","icon-cross");
  
  var text = cT(list.label);
  
  	btRemove.onclick=(function(){
      
      if(confirm("Tem certeza que deseja remover ?")){

        var multiplehidden=got(this.parentElement.parentElement.parentElement,"taghidden")[0];

        var input = got(multiplehidden,"input")[1];

        var view=this.parentElement.parentElement;

        rE(this.parentElement);
        
        input.value=getSelectedValues(view);

      }
        
    });
      
      label.appendChild(text);
      div.appendChild(figure);
      div.appendChild(label);
      div.appendChild(btRemove);
      div.appendChild(valor);

  
      div.setAttribute('c',list.codigo);
  
  return div;
  
}

function tagFinder(object){
	
	var finder = cE("input");

      finder.setAttribute("placeholder","Digite para procurar");
      finder.setAttribute("name","findernew"); 
  
	finder.onkeyup = function() {
    
    var item = got(object,"opt");
    
    if(this.value.length>=3){
      
      if(item.length){

        var string1 = removeAcento(this.value.toLowerCase());

        for(var x=0;x<item.length;x++){

          var ohtml=removeAcento(item[x].innerHTML.toLowerCase());

          //if(item[x].getAttribute("selected")=="0"){

            if(ohtml.indexOf(string1) >= 0){			

              //item[x].style.display="block";
              item[x].setAttribute('found','1');


            }else{

              //item[x].style.display="none";
              item[x].setAttribute('found','0');
            }
          //}
        }
      }

    }else{
      
      for(var x=0;x<item.length;x++){

        item[x].setAttribute('found','0');

      }
    }
      
	};
	
	object.appendChild(finder);
	
}

function getSelectedValues(object){
  
  var item = object.getElementsByTagName("div");
  var array = [];
  
  //console.log(item);
  
  for (var x=0;x<item.length;x++){
    
    array[x] = {codigo:item[x].getAttribute("c"),valor:item[x].getElementsByTagName("valor")[0].innerHTML}
    
    
  }
  
  console.log(JSON.stringify(array));
  return JSON.stringify(array);
  
}