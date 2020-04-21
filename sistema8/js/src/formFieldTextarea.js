
function formMountTextarea(attribute){
  
 var label       = cE("label");
  var div         = cE("div");

  label.appendChild(cT(attribute.label));

  div.appendChild(label);

  var object = cE("textarea");
	
	for (var key in attribute){
		
		if(attribute[key]!=="0" && attribute[key]!==""){
			
			if(key=='value'){
				object.appendChild(cT(attribute[key]));
	
			}else{
				object.setAttribute(key,attribute[key]);
			}
			
		}
		
	}
	object.setAttribute('id','editor');
	object.setAttribute("class","default");
  object.setAttribute("placeholder",attribute.label);
	object.setAttribute("required",attribute.required);
	
  div.appendChild(object);
  /*
	var editor = CKEDITOR.replace(object, {
toolbar: [
    { name: 'document', items: [  'Bold', 'Italic', 'NumberedList', 'BulletedList','-','Source','CreateDiv'] }
]});

// The "change" event is fired whenever a change is made in the editor.
editor.on( 'change', function( evt ) {
	object.innerHTML=this.getData();

});
	*/
  counter(div);	  
  
  return div;
  
}
