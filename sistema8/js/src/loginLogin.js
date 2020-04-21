function login(){
	
	//var form  	 = got(document,'form');

	var email 	 = goi('email');
	var password = goi('password');
	var status   = goi('status');
	
	email.setAttribute('class','');
	password.setAttribute('class','');
	
	sA(status,"class","loading");
	status.innerHTML="";
	status.innerHTML="Autenticando...";
 
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();
  
	xmlhttp.onreadystatechange = function() {
		
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			var authentic=JSON.parse(xmlhttp.responseText);

			if(authentic.status==="1"){
				
				//success

				status.innerHTML=message("501");	
				sA(status,"class","sucess");
				setTimeout(function () {loadLogged(authentic);}, 500);
			
			}else{
				
				sA(status,"class","error");
				
        status.innerHTML=message(authentic.status);
        
        switch (authentic.status) {

          case '502':sA(password,"class","error");break;  
          case '504':sA(email,"class","error");break; 
          case '505':sA(password,"class","error");break;
          case '508':sA(email,"class","error");break;            
  
        }  
  
				setTimeout(function () {status.innerHTML="Entrar";sA(status,"class","");}, 2000);
				
			}
		}
	};

	setTimeout(function () {

    var url    = localStorage.getItem("url")+'/admin/json/jsonLogin.php';
    var params = 'email='+email.value+'&password='+password.value;

    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send(params);
		
	}, 1000);

	
}

function loginSetStep1(authentic){
  
  document.body.setAttribute('logged',authentic.status);
  document.body.setAttribute('areas',authentic.areas);
  document.body.setAttribute('open',"1");

}

function logoutResetStep1(){
  
   document.body.setAttribute('logged','0');
   document.body.setAttribute('notification','0');
   document.body.setAttribute('filter','0');
  
}

function logoutResetStep2(){
  
    rE(got(document,'nav'));
    rE(got(document,'grade'));
    rE(got(document,'section'));
    rE(got(document,'boxfilter'));
    rE(got(document,'header'));
    rE(got(document,'boxnotification'));
    rE(got(document,'navsuite'));
    rE(got(document,'printheader'));
    document.body.setAttribute('modules',"");

  }