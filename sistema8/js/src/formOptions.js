function formSave(codigo){

	var form = got(document,"form");
	
	var input    = got(form[0],"input");
	var textarea = got(form[0],"textarea");
	var select	 = got(form[0],"select");	
	var error = "";
	
	var data = new FormData();
	
	for (var x = 0; x < input.length;x++){
		
		var n = input[x].getAttribute("name");
		var v = input[x].value;
		v = (v!==null)?v:"";
		
		if(input[x].parentElement.getAttribute("type")=='data' && v!==""){
			
			var dataNew="";
			
			//v=v.substr(6,4)+"-"+v.substr(3,2)+"-"+v.substr(0,2);
			//v=v.substr(8,2)+"/"+v.substr(5,2)+"/"+v.substr(0,4); //dd/mm/aaaa
		}
		
		if(input[x].type!='file' && input[x].type!='search' && n!='findernew' && n!='finder' && n!='ignore'){
			
			data.append(n,v);
			
		}
		
		if(input[x].getAttribute("required")=="1" && v===""){
			error+=input[x].getAttribute("name")+"\n" ;
		}

	}

	for (var x = 0; x < textarea.length;x++){
				
		var n = textarea[x].getAttribute("name");
		var v = textarea[x].value;
		v = (v!==null)?v:"";
		
		data.append(n,v);
		
		if(textarea[x].getAttribute("required")=="1" && v===""){
			error+=textarea[x].getAttribute("name")+"\n" ;
		}
		
	}
	
	for (var x = 0; x < select.length;x++){
			
		var n = select[x].getAttribute("name");
		var v = select[x].value;
		v = (v!==null)?v:"";
		
		data.append(n,v);
		
		if(select[x].getAttribute("required")=="1" && v===""){
			error+=select[x].getAttribute("name")+"\n" ;
		}
		
	}	
	
	var url = localStorage.getItem("url")+'/jsonUpdate/'+got(document,"window")[0].getAttribute("modules")+'/update/'+codigo;

	var xmlhttp;

	xmlhttp = new XMLHttpRequest();
 
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			
				if(codigo!==null){

					loadItemJson(codigo,function(json){

						var item = gibc(codigo);
						race(item);
						loadItem(item,json);
						document.body.setAttribute("loading","0");
						
					});

				}else{

					tabelaLoad(gA(),function(tabela){
						document.body.setAttribute("loading","0");
            rE(got(document,'tabela'));
            document.getElementsByTagName("view")[0].appendChild(tabela);
					});
					
				}
			
			if(got(document,"window")[0].getAttribute("modules")=="users"){
			
					getLoginStatus();

			}
			
			formClose();
			
		}
		
	};
	
	if(error===""){
		
		document.body.setAttribute("loading","1");
		xmlhttp.open("POST", url, true);
		xmlhttp.send(data);
		
	}else{
		alert("Os seguintes campos nào podem ficar vazios: \n\n"+error);
	}

	
	
}

function formClose(){
	
	
	rE(got(document,"window"));
	got(document,"body")[0].setAttribute("open","0");

	gridHide();

	if(localStorage.openedformcodigo){
    
    var item  = gibc(localStorage.openedformcodigo);
    
    if(item!=undefined){
      
       	item.setAttribute("open","0");
      
    }

		localStorage.openedformcodigo="";
		
	}
	
}

function formDelete(codigo){
	
	var url = localStorage.getItem("url")+'/jsonUpdate/'+gA()+'/delete/'+codigo;

	var xmlhttp;

	xmlhttp = new XMLHttpRequest();
 
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	

						
		}
		
	};

	if (confirm("Tem certeza que deseja excluir?") === true) {

		xmlhttp.open("POST", url, true);
		xmlhttp.send();
		
			rE(gibc(codigo));
			formClose();
		
	} else {

	

	}

}

function formEdit(areas,codigo){

	//window.open("/#form","_self");
	
		formMount(areas,codigo,function(){
			
			document.body.setAttribute("loading","0");
			
			var item  = gibc(codigo);
			
			item.setAttribute("open","1");
			
			localStorage.openedformcodigo=codigo;
			
			gridShow();
			
		});

}

function formNew(){
	window.open("#form","_self");
		formMount(gA(),null,function(){
			
			gridShow();
			
		});

	
}

function gridShow(){
	
		var grade= got(document,"grade")[0];

		grade.setAttribute("class","show");

	
}

function gridHide(){
	
		var grade= got(document,"grade")[0];
	
		grade.setAttribute("class","hide");

}

function btClose(codigo){

	var btClose = cE("icon");
			btClose.setAttribute("class","icon-cross");
	//btClose.appendChild(cT("×"));
			btClose.setAttribute("action","close");
			btClose.onclick=(function(){

				formClose(codigo);

			});

	return btClose;
	
}

function btBack(codigo){

	var bt = cE("icon");
			//btClose.setAttribute("class","icon-cross");
	//bt.appendChild(cT("<"));
			bt.setAttribute("action","back");
			bt.setAttribute("class","icon-arrow-left2");
			bt.onclick=(function(){

				formClose(codigo);

			});

	return bt;
	
}

function btHeaderPrint(){

	var bt = cE("icon");
			
			bt.setAttribute("action","print");
			bt.setAttribute("class","icon-printer");
			bt.onclick=(function(){

					print();

			});

	return bt;
	
}

function btHeaderAttach(){
	
var attribute = [];
		attribute.tag 		= "input";
		attribute.type 		= "file";
		attribute.name 		= "fileupload";
		attribute.multiple	= "";
		attribute.onchange	= "formUpload(this);";
	
var fileupload = cEA(attribute);
	
	var bt = cE("icon");
		
			bt.setAttribute("action","attach");
			bt.setAttribute("class","icon-attachment");
			bt.onclick=(function(){

				

			});

	bt.appendChild(fileupload);
	
	return bt;
	
}

function btHeaderSeeAttach(){

	var bt = cE("icon");
			
			bt.setAttribute("action","seeattach");
			bt.setAttribute("class","icon-images");
			bt.onclick=(function(){
					var anexos=document.getElementsByName('files')[0].value;
					window.open("/admin/json/jsonAnexosView.php?anexos="+anexos,"_blank");

			});

	return bt;
	
}

function btHeaderSave(codigo){

	var bt = cE("icon");
			
			bt.setAttribute("action","save");
			bt.setAttribute("class","icon-checkmark");
			bt.onclick=(function(){
					formSave(codigo);


			});

	return bt;
	
}

function btHeaderDelete(codigo){

	var bt = cE("icon");
			
			bt.setAttribute("action","delete");
			bt.setAttribute("class","icon-bin");
			bt.onclick=(function(){
					formDelete(codigo);

			});

	return bt;
	
}

function btPrint(){
	
		var btDelete = cB("imprimir");
	
				btDelete.setAttribute("action","print");
				btDelete.onclick=(function(){

					print();

				});
	
	return btDelete;
}

function btDelete(codigo){
	
		var btDelete = cB("excluir");
	
				btDelete.setAttribute("action","delete");
				btDelete.onclick=(function(){

					formDelete(codigo);

				});
	
	return btDelete;
}

function btSave(codigo){
	
		var button = cB("salvar");
				button.setAttribute("action","save");
				button.onclick=(function(){

					formSave(codigo);

				});
	
	return button;
		
}

function btNew(){
	
	var button = cB("+");
	
			button.setAttribute('action','new');
			button.onclick=(function(){

				formNew();

			});
	
	return button;
	
}

function btPrint(){
	
	var button = cB("imprimir");
	
			button.setAttribute('action','print');
			button.onclick=(function(){

				print();

			});
	
	return button;
	
}

function btAttach(){
	
	var attribute = [];

		attribute.tag 		= "input";
		attribute.type 		= "file";
		attribute.name 		= "fileupload";
		//attribute.anexos 	= object.getAttribute('value');
		attribute.gwidth 	= "900";
		attribute.multiple	= "";
		attribute.onchange	= "formUpload(this);";

	var fileupload = cEA(attribute);
	
	var attribute = [];

		attribute.tag 		= "div";
		attribute.class 	= "fileupload";

	
	var divFileUpload = cEA(attribute);
	
	var attribute = [];

		attribute.tag 		= "icon";
		attribute.class 		= "icon-attachment";
	
	var icon = cEA(attribute);
	
	var attribute = [];

		attribute.tag 		= "button";
		attribute.text 		= "";
		attribute.action 	= "attach";
	
	var divFileUploadEnviar = cEA(attribute);
	
	divFileUploadEnviar.appendChild(icon);
	
	divFileUpload.appendChild(divFileUploadEnviar);
	divFileUpload.appendChild(fileupload);
	
	return divFileUpload;
	
}

function btSeeAttach(){

				var anexos=document.getElementsByName('files')[0].value;
	
			var attribute = [];

			attribute.tag 		= "button";
			attribute.text 		= "Visualizar anexos";
			attribute.onclick	= "window.open('/admin/json/jsonAnexosView.php?anexos="+anexos+"','_blank')";
			attribute.type		= "button";
			attribute.action	= "seeattach";
	
		var bt = cEA(attribute);
			return bt;


	
	

}