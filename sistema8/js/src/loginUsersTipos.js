function mountLoginUserstipos(array){

  if(array.userstipos!==undefined && array.userstipos!==null ){

    var select  = createObject('{"tag":"select","id":"userstipos"}');

    for(var x=0;x<array.userstipos.length;x++){

      var label  = array.userstipos[x].label;
      var codigo = array.userstipos[x].codigo;

      var option = createObject('{"tag":"option","id":"userstipos","textnode":"'+label+'","value":'+codigo+'}');
      select.appendChild(option);

    }

    return select;
       
  }else{
    
    var input = createObject('{"tag":"input","id":"userstipos","type":"hidden","value":100}');
    
    return input;
    
  }
 
}