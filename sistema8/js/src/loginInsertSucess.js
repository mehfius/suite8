function loginInsertSuccess(authentic){
  
	var status   = goi('status');
  sA(status,"class","sucess");
  
  status.innerHTML=message(authentic.status);
  
  setTimeout(function () {
    rE(got(document,"login"));
    loadLogged(authentic);
  }, 2000);
  
}
