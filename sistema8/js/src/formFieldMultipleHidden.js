
function formMountMultipleHidden(attribute){
                      
  var label       = cE("label");
	var div         = cE("div");
  var view        = cE("multipleview");
 
      view.appendChild(multipleAdd(attribute));
  
      label.appendChild(cT(attribute.label));

      div.appendChild(label);
      div.setAttribute("class","multiplehidden");

  var select = cE("multiplehidden");
 
      select.appendChild(multipleHiddenClose());
  
  var input  = cE("input");
  
  var valor  = (attribute.value[0].value[0]==",")?attribute.value[0].value:","+attribute.value[0].value;
	
      input.setAttribute("name",attribute.name);
      input.setAttribute("title",attribute.title);
      input.setAttribute("value",valor);
      input.setAttribute("autocomplete","off");
      input.setAttribute("required","");
      input.setAttribute("type","hidden");
      input.setAttribute("tipo","select");
  
      multipleHiddenFinder(select);
  
		  select.appendChild(input);
		
	var arrayS = attribute.value;

		for (var keyS in arrayS){
			
			var codigo = arrayS[keyS].codigo;
			var label  = arrayS[keyS].label;
			
			var bt = cE("opt");
      
			    bt.appendChild(cT(label));
			    bt.setAttribute("value",codigo);
			
			var selected = valor.indexOf(","+codigo+","); 
			
			if(selected>=0){
		
				bt.setAttribute('selected','1');

          var list = [];

          list.label=label;
          list.codigo=codigo;

          view.appendChild(coolbutton(list));        
        
			}else{
				
				bt.setAttribute('selected','0');
				
			}
			
			bt.onclick=(function(){
				
				var attr = this.getAttribute("selected");
				
				if(attr==1){
					
					this.setAttribute("selected","0");
					var valor = ","+this.getAttribute('value')+",";
					var text = input.value;
					var x = text.replace(valor,","); 
					input.value=x;
					
          var multipleview = got(this.parentElement.parentElement,"multipleview")[0];
          
          rE(goap(multipleview,"c",this.getAttribute('value'))[0]);
        
          
				}else{
					
					this.setAttribute("selected","1");
					var valor = this.getAttribute('value')+",";
					input.value=input.value+valor;
          
          var list = [];
          
          list.label=this.innerHTML;
          list.codigo=this.getAttribute('value');
          
          var multiple = this.parentElement.parentElement;
          var multipleview = got(multiple,"multipleview")[0];
          multipleview.appendChild(coolbutton(list));
					
				}

			});

			select.appendChild(bt);

		}
	
	  div.appendChild(select);
    div.appendChild(view);
  
  return div;
	
}

function multipleHiddenClose(){
  
  var icon  = cE("icon");
      icon.setAttribute("class","icon-cross");
  
 
      icon.onclick=(function(){this.parentElement.parentElement.setAttribute("search","0");});
  
  return icon;
  
}

function multipleAdd(attribute){
  
  var icon  = cE("icon");
      icon.setAttribute("class","icon-plus");
  
  var label = cE("label");
      label.appendChild(cT(attribute.title));
  
  var btadd = cE("add");
      btadd.onclick=(function(){this.parentElement.parentElement.setAttribute("search","1");});
  
  
      btadd.appendChild(icon);
      btadd.appendChild(label);
    
  return btadd;
  
}
function coolbutton(list){
  
  var div     = cE("div");
  var label   = cE("label");
  var figure  = cE("figure");
  var close   = cE("icon"); 
  
      close.setAttribute("class","icon-cross");
  
  var text = cT(list.label);
  
  	close.onclick=(function(){
      
				if(confirm("Tem certeza que deseja remover ?")){
          
          var multiplehidden=got(this.parentElement.parentElement.parentElement,"multiplehidden")[0];

          var input = got(multiplehidden,"input")[1];

          var valor = ","+this.parentElement.getAttribute("c")+",";
          var text = input.value;
          var x = text.replace(valor,","); 

              input.value=x;
              rE(this.parentElement);

        }
			
        
    });
      
      label.appendChild(text);
      div.appendChild(figure);
      div.appendChild(label);
      div.appendChild(close);
  
      div.setAttribute('c',list.codigo);
  
  return div;
  
}

function multipleHiddenFinder(object){
	
	var finder = cE("input");
	//var label = got(object,"label");
	
      //finder.setAttribute("type","text");
      finder.setAttribute("placeholder","Digite para procurar");
      finder.setAttribute("name","finder"); 
  
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