function mountHeader(array){

	if(!got(document,"header").length){

		var header = cE("header");

		var icon = cE("icon");
				icon.setAttribute("id","navmenu");
		    icon.setAttribute("class","icon-menu");
    
    var iconSuite= cE("icon");
        iconSuite.setAttribute("class","icon-infinite");
    
		header.appendChild(icon);
   
		var a 			= cE("a");
		var logo    = cE("logo");
		var span    = cE("span");	
		var text    = cT(array.suites);

		span.appendChild(text);
		logo.appendChild(span);
		a.appendChild(logo);

		header.appendChild(a);


		icon.onclick=(function(){

			var nav = goi("nav"); 
			nav.setAttribute('class','show');

			gridShow();

		});    

		got(document,"body")[0].appendChild(header);
    
		if(localStorage.userareas==1){
      
      header.appendChild(iconSuite);
      header.appendChild(mountMobileVersion());
      
    }
    
    var options = document.createElement("options");
        options.appendChild(iconNotification());
    
        var userinfo = JSON.parse(localStorage.userinfo);
    

    options.appendChild(iconFilter());
      

        if(userinfo.whereby!==null){

    options.appendChild(iconVideo());  
        }      
    header.appendChild(options);
       
    //header.appendChild(iconSuite);
    
    
	}
	
}

function resetHeaderOptions(){
  
document.body.setAttribute("notification","0")
document.body.setAttribute("filter","0")
}

function navSuiteMount(){
  
  var div = cE("navsuite");
  
  return div;
  
}

function mountMobileVersion(){
  
  var icon = cE("mobileversion");
  
  icon.onclick=(function(){
    
    var mobile=got(document,"body")[0].getAttribute('mobile');
    
    if(mobile==1){
      got(document,"body")[0].setAttribute('mobile','0');
    }else{
      
      got(document,"body")[0].setAttribute('mobile','1');
    }
    
    
  });
  
  return icon;
  
}