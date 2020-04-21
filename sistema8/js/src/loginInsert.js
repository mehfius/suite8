function insert(){
		
	var name 	     = goi('name');
	var email 	   = goi('email');
	var cpf 	     = goi('cpf');
	var crm 	     = goi('crm');
  
	var identidade = goi('identidade');
	var telefone 	 = goi('telefone');
	var cep 	     = goi('cep');
	var endereco 	 = goi('endereco'); 
  
	var password   = goi('password');
	var userstipos = goi('userstipos');
	var status     = goi('status');
		
	name.setAttribute('class','');
	email.setAttribute('class','');
	password.setAttribute('class','');
	cpf.setAttribute('class','');
	
	status.innerHTML="";
	status.innerHTML="<p>Verificando...</p>";
  
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();
 
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

	    var authentic=JSON.parse(xmlhttp.responseText);

      switch (authentic.status) {
          
      case '1':loginInsertSuccess(authentic);break;
      case '602':name.setAttribute('class','error');status.innerHTML=message(authentic.status);break;
      case '603':password.setAttribute('class','error');status.innerHTML=message(authentic.status);break;
      case '605':cpf.setAttribute('class','error');status.innerHTML=message(authentic.status);break;   
      case '606':cpf.setAttribute('class','error');status.innerHTML=message(authentic.status);break;  
      case '607':email.setAttribute('class','error');status.innerHTML=message(authentic.status);break; 
          
      default:email.setAttribute('class','error');status.innerHTML=message("999");}        
      
		}
    
	};

	setTimeout(function () {
    
    var url = localStorage.getItem("url")+'/admin/json/jsonLoginInsert.php';
    var params = "";
    
    params+="userstipos="+userstipos.value+"&";
    params+="crm="+crm.value+"&";    
    params+="cpf="+cpf.value+"&";
    params+="email="+email.value+"&";
    params+="password="+password.value+"&";
    params+="name="+name.value+"&";
    params+="identidade="+identidade.value+"&";
    params+="telefone="+telefone.value+"&";
    params+="cep="+cep.value+"&";
    params+="endereco="+endereco.value+"&";
  
    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send(params);    
    
	}, 1000);
	
	
	
}