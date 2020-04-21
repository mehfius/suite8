function formUpload(object){
	
	var window = got(document,"window")[0];
	
	var uploadedfiles = got(window,"uploadedfiles")[0];
	
	for(var x=0;x<object.files.length;x++){
			
		var ext = object.files[x].type;
		var anexos=document.getElementsByName('files')[0].value;

		
		if(ext=='image/jpeg'){

			sendFile(object.files[x],anexos,localStorage.getItem("upload")+'?',

				function(filename){
				
					
					addUploadFiles(uploadedfiles,filename);
					

				}

			);
			
		}else if(ext=='application/pdf'){
			
			sendFile(object.files[x],anexos,localStorage.getItem("upload")+'?',

							 
				function(filename){
        
				  //pdftothumb(object);
	

					addUploadFilesPDF(uploadedfiles,filename);

				}
							 
			);

		}else if(ext=='image/png'){
			
			sendFile(object.files[x],anexos,localStorage.getItem("upload")+'?',

							 
				function(filename){
				

					addUploadFiles(uploadedfiles,filename);

				}
							 
			);
						
		}else{
			alert('Formato de arquivo não suportado');
		}

	}
		
}

function formMountFileupload(attribute){

      var label       = cE("label");
      var div         = cE("div");
  
			label.appendChild(cT(attribute.label));
				
			//div.appendChild(label);
				
			var object = cE("input");

			for (var key in attribute){

				if(attribute[key]!=="0" && attribute[key]!==""){
					object.setAttribute(key,attribute[key]);
				}

			}

			object.setAttribute("type","hidden");
			
			if(object.getAttribute("value")=="" || object.getAttribute("value")==null){
				
				object.setAttribute("value",randomString(32));
				
			}
				




			var attribute = [];

				attribute.tag 		= "uploadedStatus";

			var span = cEA(attribute);
				
			var attribute = [];

				attribute.tag 		= "uploadedFiles";

			var result = cEA(attribute);
				
			div.appendChild(object);
				

	
			div.appendChild(result);

			div.appendChild(span);
	

			var url 	= localStorage.getItem("url")+'/admin/json/jsonViewFile.php?anexos='+object.value;

			var xmlhttp;

			xmlhttp = new XMLHttpRequest();

			xmlhttp.onreadystatechange = function() {

				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

					if(xmlhttp.responseText!==""){
						
						var json = JSON.parse(xmlhttp.responseText);
						var items = [];
						
						for(var x=0;x<json.length;x++){
						
							var ext = json[x].filename.substring((json[x].filename.length-3),(json[x].filename.length));

							if(ext=='jpg'){
								
								addUploadFiles(result,json[x]);
						
							}else if(ext=='pdf'){

								addUploadFilesPDF(result,json[x].filename);

							}else if(ext=='png'){

								addUploadFilesPNG(result,json[x].filename);

							}

						}

						
					}
				
				}

			};

			xmlhttp.open("GET", url, true);
			xmlhttp.send();
  
  return div;
  
}

function addUploadFiles(local,object){

	var div 				= cE("div");
	var figure 			= cE("figure");
	var textCover 	= cT("Destaque");
	var spanDelete 	= cE("span");
	var spanLeft 		= cE("span");
	var spanRight 	= cE("span");
	var spanZoom 		= cE("span");
	var spanCover 	= cE("span");
	var divOptions 	= cE("options");
  var spanEdit 		= cE("span");

	if(object.filename!==undefined){
		var filename=object.filename;
		var key=object.key;
		
	}else{
		var filename=object;
	}
	
	
	
	if(filename!==null){

		spanCover.appendChild(textCover);

		divOptions.appendChild(spanDelete);
		divOptions.appendChild(spanLeft);
		divOptions.appendChild(spanZoom);
		divOptions.appendChild(spanRight);
		//divOptions.appendChild(spanEdit);
		
		div.appendChild(divOptions);

		spanDelete.setAttribute('class','icon-bin');
		spanLeft.setAttribute('class','icon-undo');
		spanRight.setAttribute('class','icon-redo');
		spanZoom.setAttribute('class','icon-search');
		spanEdit.setAttribute('class','icon-edit');
		
		sA(figure,"style","background-image:url('"+localStorage.getItem("imgm")+filename+"?key="+key+"');");
		sA(spanDelete,"onclick","if(confirm('Deseja remover este arquivo?')){removeAnexos(this.parentNode.parentNode,'"+filename+"')}");
		
		//sA(spanZoom,"onclick","window.open('"+localStorage.getItem("img")+filename+"?key="+randomString(32)+"','_blank');");
    
    spanZoom.onclick=(function(){
      window.open(localStorage.getItem("img")+filename+"?key="+randomString(32),'_blank');
    });
                      
		spanLeft.onclick=(function(){

			figure.setAttribute('style',"background-image:url('"+localStorage.getItem("urlimagerotate")+"?img="+filename+"&rotate=left&key="+randomString(32)+"');");
			divOptions.setAttribute('style',"background-image:url('"+localStorage.getItem("url")+"/admin/action/actionChangeImageKey.php?filename="+filename+"&key="+randomString(32)+"');");
      
      
		});

		spanRight.onclick=(function(){

			figure.setAttribute('style',"background-image:url('"+localStorage.getItem("urlimagerotate")+"?img="+filename+"&rotate=right&key="+randomString(32)+"');");
			divOptions.setAttribute('style',"background-image:url('"+localStorage.getItem("url")+"/admin/action/actionChangeImageKey.php?filename="+filename+"&key="+randomString(32)+"');");
      
		});
		
		if(goiFind(filename)){
			
			goi(filename).appendChild(divOptions);
			goi(filename).appendChild(figure);
			
		}else{
			
			local.insertBefore(div, local.childNodes[0]);
			div.appendChild(figure);
			
		}
		

		/*local.appendChild(div);*/
		
		
		var label   = cE("input");
		var content = cE("textarea");
    var btsalvar = cE("button");
        
		label.setAttribute("name","label");
		label.setAttribute("placeholder","Título");
		content.setAttribute("name","textarea");
    content.setAttribute("placeholder","Descrição");
    btsalvar.setAttribute("type","button");
		
    /*    
	    div.appendChild(label);
		div.appendChild(content);
		div.appendChild(btsalvar);
			*/
		div.setAttribute("id",filename);
	
		
	}else{

		var icon 	= cE("icon");

		figure.setAttribute('style',"");
		figure.appendChild(icon);
		div.appendChild(figure);
	
		
		local.insertBefore(div, local.childNodes[0]);
		icon.setAttribute('class','icon-user');

	}


}

function addUploadFilesPNG(local,filename){

	var div 		= cE("div");
	var figure 		= cE("figure");
	
	var textCover 	= cT("Destaque");
	var spanDelete 	= cE("span");

	var spanZoom 	= cE("span");
	var spanCover 	= cE("span");
	var divOptions 	= cE("options");

	if(filename!==null){

		spanCover.appendChild(textCover);

		divOptions.appendChild(spanDelete);

		divOptions.appendChild(spanZoom);


		div.appendChild(divOptions);

		spanDelete.setAttribute('class','icon-bin')

		spanZoom.setAttribute('class','icon-search')
		
		sA(figure,"style","background-image:url('"+localStorage.getItem("png")+filename+"');");
		sA(spanDelete,"onclick","if(confirm('Deseja remover este arquivo?')){removeAnexos(this.parentNode.parentNode,'"+filename+"')}");
		
		sA(spanZoom,"onclick","window.open('"+localStorage.getItem("png")+filename+"','_blank');");

		div.appendChild(figure);
		local.appendChild(div);

	}else{

		var icon 	= cE("icon");

		figure.setAttribute('style',"");
		figure.appendChild(icon);
		div.appendChild(figure);
		local.appendChild(div);
		icon.setAttribute('class','icon-user');

	}


}

function addUploadFilesPDFv2(local,filename){

	var div 				= cE("div");
	var divOptions 	= cE("options");

	var textCover 	= cT("Destaque");
	
	var spanDelete 	= cE("span");
	var spanCover 	= cE("span");
	var spanZoom 		= cE("span");
	var figure 			= cE("iframe");
	

	var divLabel 			= cE("h3");
	
	spanDelete.setAttribute('class','icon-bin');
	spanCover.appendChild(textCover);
	spanZoom.setAttribute('class','icon-search');
	divOptions.appendChild(spanDelete);
		divOptions.appendChild(spanZoom);
	figure.appendChild(divLabel);
	div.appendChild(figure);
			div.appendChild(divOptions);

	if(goiFind(filename)){

		goi(filename).appendChild(divOptions);
		goi(filename).appendChild(figure);

	}else{

		local.insertBefore(div, local.childNodes[0]);
		div.appendChild(figure);
	}
	

	var split= filename.split(".");
	
	sA(figure,"src",localStorage.getItem("pdf")+split[0]+".pdf");

	sA(spanDelete,"onclick","if(confirm('Deseja remover este arquivo?')){removeAnexos(this.parentNode.parentNode,'"+filename+"')}");
	
	sA(spanZoom,"onclick","window.open('"+localStorage.getItem("pdf")+filename+"','_blank');");
	//console.log(filename);
	
	div.setAttribute("id",filename);
	
}

function addUploadFilesPDF(local,filename){

	var div 				= cE("div");
	var divOptions 	= cE("options");

	var textCover 	= cT("Destaque");
	
	var spanDelete 	= cE("span");
	var spanCover 	= cE("span");
	var spanZoom 		= cE("span");
	var figure 			= cE("figure");
	

	var divLabel 			= cE("h3");
	
	spanDelete.setAttribute('class','icon-bin');
	spanCover.appendChild(textCover);
	spanZoom.setAttribute('class','icon-search');
	divOptions.appendChild(spanDelete);
		divOptions.appendChild(spanZoom);
	figure.appendChild(divLabel);
	div.appendChild(figure);
			div.appendChild(divOptions);

	if(goiFind(filename)){

		goi(filename).appendChild(divOptions);
		goi(filename).appendChild(figure);

	}else{

		local.insertBefore(div, local.childNodes[0]);
		div.appendChild(figure);
	}
	

	var split= filename.split(".");
	
	sA(figure,"style","background-image:url('"+localStorage.getItem("imgp")+split[0]+".jpg');");

	sA(spanDelete,"onclick","if(confirm('Deseja remover este arquivo?')){removeAnexos(this.parentNode.parentNode,'"+filename+"')}");
	
	sA(spanZoom,"onclick","window.open('"+localStorage.getItem("pdf")+filename+"','_blank');");
	//console.log(filename);
	
	div.setAttribute("id",filename);
	
}

function insertAnexos(anexos,filename){
	
	var url = localStorage.getItem("url")+'/admin/json/jsonAnexos.php?action=insert&anexos='+anexos+'&filename='+filename;
	
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();
 
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			var authentic=xmlhttp.responseText;

			
			if(authentic==="1"){
				//success
				return true;
				
			}else{
				
				return false;
				
			}
		}
	};
	
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
}

function removeAnexos(e,filename){
	
	var url 	= localStorage.getItem("url")+'/admin/json/jsonAnexosDelete.php?filename='+filename;

	var xmlhttp;

	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			var json = JSON.parse(xmlhttp.responseText);
			
			if(xmlhttp.responseText==1){
				
				rE(e);
				console.log(e);
			}
			
		}
		
	};
	
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
			
}

function sendFile(file,anexos,url,cb){

	var formData 	= new FormData();

	formData.append('fileupload', file);

	var xhr = new XMLHttpRequest();
	
	//var anexos = gon('files')[0].value;
	
	var form = got(document,"form")[0];
	var uploadedstatus = got(form,"uploadedfiles")[0];
	
	var divLoading=cE("div");
	var labelLoading=cE("label");
	divLoading.appendChild(labelLoading);
	uploadedstatus.insertBefore(divLoading, uploadedstatus.childNodes[0]);
	

	
	xhr.upload.addEventListener("progress", function(e) {
		
		var pc = parseInt((e.loaded / e.total * 100));

			labelLoading.innerHTML=pc+"%";
		
	}, false);
	
	xhr.onreadystatechange = function() {

		if (xhr.readyState == 4 && xhr.status == 200) {
			
			var object = JSON.parse(xhr.responseText);
			
			if(object.ext=='jpg'){

				var div = cE('div');
				
				//sA(div,"style","background-image:url('/client/"+object.url+"');");
				//sA(div,"onclick","window.open('/client/"+object.url+"','_blank');");
				
				insertAnexos(anexos,object.filename);
				divLoading.setAttribute("id",object.filename);
				divLoading.innerHTML="";
				cb(object.filename);
			
				//got('fileuploadresult').appendChild(div);

			}else if(object.ext=='png'){

				var div = cE('div');
				
				//sA(div,"style","background-image:url('/client/"+object.url+"');");
				//sA(div,"onclick","window.open('/client/"+object.url+"','_blank');");
				
				insertAnexos(anexos,object.filename);
				cb(object.filename);
				console.log(object);
				//got('fileuploadresult').appendChild(div);

			}else if(object.ext=='pdf'){
				
				//var uploadedfiles = got(object.parentNode.parentNode,"uploadedfiles")[0];
				
				//addUploadFiles(uploadedfiles,object.filename);
				insertAnexos(anexos,object.filename);
				divLoading.setAttribute("id",object.filename);
				divLoading.innerHTML="";
				cb(object.filename);
				
			}
			
		}

	};

	xhr.open('POST', url, true);
	xhr.send(formData);

}

function pdftothumb(file){
      
        pdfjsLib.disableWorker = true;
   
        fileReader = new FileReader();
      
        fileReader.onload = function(ev) {
  
          pdfjsLib.getDocument(fileReader.result).then(function getPdfHelloWorld(pdf) {
     
            pdf.getPage(1).then(function getPageHelloWorld(page) {
              
              var scale = 1;
              var viewport = page.getViewport(scale);
              // var canvas = document.getElementById('the-canvas');
              
              var canvas = document.createElement("canvas");
              var random = Math.floor(Math.random() * 999999);
              canvas.id=(random);
              document.body.appendChild(canvas);
              
              
              var context = canvas.getContext('2d');
              canvas.height = viewport.height;
              canvas.width = viewport.width;

              var task = page.render({
                canvasContext: context,
                viewport: viewport
              })
              
              task.promise.then(function() {
                console.log(canvas.toDataURL('image/jpeg'));
                
                var getCanvas = document.getElementById(random); 
           
                getCanvas.parentNode.removeChild(getCanvas);
                
              });
            });
          }, function(error) {
            console.log(error);
          });
        };
      
        fileReader.readAsArrayBuffer(file.files[0]);
      
      }

function mountPS(){
	
	var pswp = cE("div");
	
			pswp.setAttribute("class","pswp");
			pswp.setAttribute("tabindex","-1");
			pswp.setAttribute("role","dialog");
			pswp.setAttribute("aria-hidden","true");
	
	var bg = cE("div");
			bg.setAttribute("class","pswp__bg");
	
	var scroll = cE("div");
			scroll.setAttribute("class","pswp__scroll-wrap");
	
	var container = cE("div");
			container.setAttribute("class","pswp__container");
	
	var item1 = cE("div");
			item1.setAttribute("class","pswp__item");
	
	var item2 = cE("div");
			item2.setAttribute("class","pswp__item");
	var item3 = cE("div");
			item3.setAttribute("class","pswp__item");
	

	
	
	var ui = cE("div");
			ui.setAttribute("class","pswp__ui pswp__ui--hidden");
	
	var bar =cE("div");
			bar.setAttribute("class","pswp__top-bar");
	
	var counter =cE("div");
			counter.setAttribute("class","pswp__counter");
	
	var close =cE("button");
			close.setAttribute("class","pswp__button pswp__button--close");
			close.setAttribute("title","Close (Esc)");
	
	var share =cE("button");
			share.setAttribute("class","pswp__button pswp__button--share");
			share.setAttribute("title","Share");
	
	var fs =cE("button");
				fs.setAttribute("class","pswp__button pswp__button--fs");
				fs.setAttribute("title","Toggle fullscreen");
	
	var zoom =cE("button");
				zoom.setAttribute("class","pswp__button pswp__button--zoom");
				zoom.setAttribute("title","Zoom in/out");
	
	var preloader =cE("div");
				preloader.setAttribute("class","pswp__preloader");
	
	var icn =cE("div");
			icn.setAttribute("class","pswp__preloader__icn");
	
	var cut =cE("div");
			cut.setAttribute("class","pswp__preloader__cut");
	
	var donut =cE("div");
			donut.setAttribute("class","pswp__preloader__donut");

		var modal =cE("div");
				modal.setAttribute("class","pswp__share-modal pswp__share-modal--hidden pswp__single-tap");
	
		var tooltip =cE("div");
				tooltip.setAttribute("class","swp__share-tooltip");	
	
		var left =cE("button");
				left.setAttribute("class","pswp__button pswp__button--arrow--left");	
				left.setAttribute("title","Previous (arrow left)");
	
		var right =cE("button");
				right.setAttribute("class","pswp__button pswp__button--arrow--right");	
				right.setAttribute("title","Next (arrow right)");
	
		var caption =cE("div");
				caption.setAttribute("class","pswp__caption");	
	
		var center =cE("div");
				center.setAttribute("class","pswp__caption__center");	
	
	  
	container.appendChild(item1);
	container.appendChild(item2);
	container.appendChild(item3);	
	
	cut.appendChild(donut);
	icn.appendChild(cut);
	preloader.appendChild(icn);
	
	bar.appendChild(counter);
	bar.appendChild(close);
	bar.appendChild(share);
	bar.appendChild(fs);
	bar.appendChild(zoom);
	bar.appendChild(preloader);

	modal.appendChild(tooltip);
	
	caption.appendChild(center);
	
	ui.appendChild(bar);
	ui.appendChild(modal);
	ui.appendChild(left);	
	ui.appendChild(right);		
	ui.appendChild(caption);
	
	scroll.appendChild(container);
	scroll.appendChild(ui);
	
	pswp.appendChild(bg);
	pswp.appendChild(scroll);
	
	got(document,"body")[0].appendChild(pswp);

}