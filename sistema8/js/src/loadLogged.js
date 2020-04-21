function loadLogged(authentic){
	
  localStorage.suites=authentic.suites;
  localStorage.userinfo=JSON.stringify(authentic.userinfo);
 
	mountHeader(authentic);
	mountPrint(authentic);
	mountSection();

	navMount(authentic);
	
  loadNavSuite();

	var autoload=document.getElementsByTagName("body")[0].getAttribute("autoload");

      setTimeout(function(){

         loginSetStep1(authentic);

         setTimeout(function () {
                   rE(got(document,"login"));
                   rE(got(document,"pages"));
                }, 1000);
          }, 1000);

	
}