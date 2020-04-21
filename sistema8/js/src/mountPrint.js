
function mountPrint(array){
	
		var header = cE("printheader");
			
		var a 			= cE("a");
		var logo    = cE("logo");
		var span    = cE("span");	
		var text    = cT(array.suites);

		span.appendChild(text);
		logo.appendChild(span);
		a.appendChild(logo);
header.appendChild(logo);

		got(document,"body")[0].appendChild(header);
		
		
}