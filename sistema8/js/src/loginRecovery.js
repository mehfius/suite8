
function recovery(){
	
	var email 	 = goi('email');
	var status   = goi('status');
  var suites = document.body.getAttribute("suites");
	
	email.setAttribute('class','');
	
	sA(status,"class","loading");
	status.innerHTML="";
	status.innerHTML="Localizando conta...";
	
	var url = localStorage.getItem("url")+'/admin/json/jsonLoginRecovery.php?email='+email.value+'&suite='+suites;
		
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			var authentic=xmlhttp.responseText;

		
			if(authentic==1){
				
				//success

				status.innerHTML="A senha enviada por email";				
				sA(status,"class","sucess");
			
			
			}else{
				
				sA(status,"class","error");
				
				if(authentic==="2"){

					//blank username
					sA(email,"class","error");
					status.innerHTML="Campo vazio";

				}else if(authentic==="3"){

					//blank password
					sA(password,"class","error");
					status.innerHTML="Campo vazio";
					
				}else if(authentic==="501"){

					//wrong usernme
					status.innerHTML="Usuário não encontrado";
					email.setAttribute('class','error');

				}else if(authentic==="502"){	

					//wrong password
					status.innerHTML="Senha inválida";
					password.setAttribute('class','error');

				}else if(authentic==="503"){

					//deactivated account
					status.innerHTML="Conta desativada";

				}else{
					
					status.innerHTML="Erro desconhecido";
					
				}
				
				setTimeout(function () {status.innerHTML="Entrar";sA(status,"class","");}, 2000);
				
			}
		}
	};

	setTimeout(function () {
		
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
		
	}, 1000);

	
}
