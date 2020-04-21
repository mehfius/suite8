function formMountData(attribute){
  
  var label       = cE("label");
	var div         = cE("div");
  
  label.appendChild(cT(attribute.label));

  div.appendChild(label);

	var object = cE("input");
	
	for (var key in attribute){
				
		if(attribute[key]!=="0" && attribute[key]!==""){
			object.setAttribute(key,attribute[key]);
		}

	}
	
	//object.setAttribute("data-mask","__/__/____");
	
	//object.setAttribute("onkeypress","maskDate(this)");
	//object.setAttribute("onblur","verifyDate(this)");
	object.setAttribute("autocomplete","off");
	object.setAttribute("type","date");
	object.setAttribute("class","default");
	object.setAttribute("maxlength","10");

	
  div.appendChild(object);
  
  return div;
  
}

function verifyDate(e){
	

	
	if(e.value.match(/^\d{2}\/\d{2}\/\d{4}$/) == null){
		e.value="";
	}
	
}

function maskDate(e){
	
	var date = e.value;
	
  if (date.match(/^\d{2}$/) !== null) {
     e.value = date + '/';
  }else if (date.match(/^\d{2}\/\d{2}$/) !== null) {
     e.value = date + '/';
  }
	
	
}


function applyDataMask(field) {
    var mask = field.dataset.mask.split('');
    
    // For now, this just strips everything that's not a number
    function stripMask(maskedData) {
        function isDigit(char) {
            return /\d/.test(char);
        }
        return maskedData.split('').filter(isDigit);
    }
    
    // Replace `_` characters with characters from `data`
    function applyMask(data) {
        return mask.map(function(char) {
            if (char != '_') return char;
            if (data.length == 0) return char;
            return data.shift();
        }).join('')
    }
    
    function reapplyMask(data) {
        return applyMask(stripMask(data));
    }
    
    function changed() {   
        var oldStart = field.selectionStart;
        var oldEnd = field.selectionEnd;
        
        field.value = reapplyMask(field.value);
        
        field.selectionStart = oldStart;
        field.selectionEnd = oldEnd;
    }
    
    field.addEventListener('click', changed)
    field.addEventListener('keyup', changed)
}
