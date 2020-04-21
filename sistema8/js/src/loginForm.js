
function mountLogin(array){
	
var btclose     = createObject('{"tag":"btclose","innerhtml":"x","onclick":"document.body.setAttribute(\'openlogin\',\'0\');"}');  
  
var h1          = createObject('{"tag":"h1","innerhtml":"'+array.suites+'"}');  
  
var plogin      = createObject('{"tag":"p","innerhtml":"Login","class":"plogin"}'); 

var pinsert     = createObject('{"tag":"p","innerhtml":"Criar conta","class":"pinsert"}');
  
var pinsertm    = createObject('{"tag":"p","innerhtml":"Cadastro de Médico","class":"pinsertm"}');
  
var precovery   = createObject('{"tag":"p","innerhtml":"Recuperar senha","class":"precovery"}');  
  
var login 	    = createObject('{"tag":"login","class":"login","name":"login"}');

var formLogin   = createObject('{"tag":"form","onsubmit":"login();return false;"}');
  
var pattern     = encodeURI("\\d{11}");
  
var inputCPF    = createObject('{"tag":"input","id":"cpf","placeholder":"CPF","type":"number","title":"'+message("620")+'","pattern":"'+pattern+'"}');

var inputRG    = createObject('{"tag":"input","id":"identidade","placeholder":"RG Identidade"}');  

var inputTelefone    = createObject('{"tag":"input","id":"telefone","placeholder":"Telefone","type":"number"}');
  
var inputCEP    = createObject('{"tag":"input","id":"cep","placeholder":"CEP"}');    
  
var inputEndereco    = createObject('{"tag":"input","id":"endereco","placeholder":" (Rua, número e Bairro)"}');    
  
 
  
var inputCRM    = createObject('{"tag":"input","id":"crm","placeholder":"CRM","type":"number"}');
    
var inputName   = createObject('{"tag":"input","id":"name","placeholder":"Nome completo"}');
  
var pattern     = encodeURI("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$");  
  
var inputEmail  = createObject('{"tag":"input","id":"email","required":"required","placeholder":"seu@email.com","pattern":"'+pattern+'"}');
var inputPass   = createObject('{"tag":"input","id":"password","required":"required","type":"password","placeholder":"Senha"}');
var inputUsersTipos  = createObject('{"tag":"input","id":"userstipos","type":"hidden"}');
  
var div         = createObject('{"tag":"div","id":"status","class":"status"}');
  
var button      = createObject('{"tag":"button","id":"status","innerhtml":"Entrar"}');
var bLogin      = createObject('{"tag":"button","id":"btLogin","type":"button","textnode":"Fazer login"}');
var bInsert     = createObject('{"tag":"button","id":"btInsert","type":"button","textnode":"Criar conta"}');
  
var bInsertPaciente    = createObject('{"tag":"button","id":"btInsertPaciente","type":"button","textnode":"Sou paciente"}');
var bInsertMedico     = createObject('{"tag":"button","id":"btInsertMedico","type":"button","textnode":"Sou médico"}');
  
var bRecovery       = createObject('{"tag":"button","id":"btRecovery","type":"button","textnode":"Esqueci minha senha"}');
  
//var menu        = createObject('{"tag":"options"}');
  
bLogin.onclick=(function(){

  sA(login,'class','login');
  goi('name').removeAttribute('required');
  sA(formLogin,'onsubmit','login();return false;');
  
})

bInsert.onclick=(function(){

  sA(login,'class','insert');
  sA(goi('name'),'required','required');
  sA(formLogin,'onsubmit','insert();return false;');
  goi('userstipos').value="100";
  
})
  
bInsertPaciente.onclick=(function(){

  sA(login,'class','insertpaciente');
  sA(goi('name'),'required','required');
  sA(formLogin,'onsubmit','insert();return false;');
  goi('userstipos').value="100";
  
})  
  
bInsertMedico.onclick=(function(){

  sA(login,'class','insertmedico');
  sA(goi('name'),'required','required');
  sA(formLogin,'onsubmit','insert();return false;');
  goi('userstipos').value="50";
  
})  
  
bRecovery.onclick=(function(){

  sA(login,'class','recovery');
  goi('name').removeAttribute('required');
  goi('password').removeAttribute('required');
  sA(goi('email'),'required','required');
  sA(formLogin,'onsubmit','recovery();return false;');

})


  
formLogin.append(btclose,h1,plogin,pinsert,pinsertm,precovery,inputName,inputEmail,inputPass,inputCPF,inputRG,inputTelefone,inputCEP,inputEndereco);
  

formLogin.appendChild(bInsertPaciente);
formLogin.appendChild(bInsertMedico);

formLogin.append(inputCRM,inputUsersTipos,button);

if(localStorage.newusers==1){

    formLogin.appendChild(bInsert);

}
  
formLogin.append(bLogin,bRecovery);
  
login.append(formLogin);
  
document.body.appendChild(login);
  
  	/*
  	login.appendChild(adsense());
	(adsbygoogle = window.adsbygoogle || []).push({});
*/
	
}
