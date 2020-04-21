function load(){
  
  if(window.innerWidth <= 480) {

    document.body.setAttribute('mobile','1');

  }else{

   document.body.setAttribute('mobile','0');

  }

  document.body.appendChild(loadingMount());

  getLoginStatus();


}

function loopCheck(){
  
  setTimeout(function(){

    if(document.body.getAttribute('open')=='1'){
      
      if (navigator.onLine) {loadNotifications();} else {console.log('offline');}
      
    }
   
   
    loopCheck();
    
  }, 5000);  
    
}

window.onblur = function() {
  document.body.setAttribute('open','0');
}

window.onfocus = function() {
  document.body.setAttribute('open','1');
}

window.onhashchange = function() {
  
  formClose();
	navClose();
  
}

document.onkeydown = function(evt) {
	
	var teste=evt.keyCode;
   
	if(teste==27){
		 formClose();
		navClose();
	}
	
}
window.onload=load;
