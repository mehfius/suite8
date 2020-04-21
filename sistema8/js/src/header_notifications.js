function iconNotification(){
  
    var iconNotifications= cE("icon");
  
        iconNotifications.setAttribute("class","icon-bell");

    var divNotification=cE("counternotification");
    
        iconNotifications.appendChild(divNotification);
 
        iconNotifications.onclick=(function(){
            setAllRead();
          document.body.setAttribute("filter","0");
      
          if(document.body.getAttribute("notification")=="1"){
            document.body.setAttribute("notification","0");
          }else{
            document.body.setAttribute("notification","1");
          }
        
        });
  
     return iconNotifications;

}

function loadNotifications(){
 
  fetch(localStorage.getItem("urljson")+"jsonNotifications.php", {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded'}, 
    body:  'wasread='+getNotification()
  })
  
  .then(response => response.json())
  .then(data => mountNotifications(data.notifications))
  .catch(erro => console.error(erro));
  
}

function setAllRead(){
    
  var notifications = document.getElementsByTagName("notifications")[0];
  var div = notifications.getElementsByTagName("div");
  
  if(div!==undefined){

    for(var x=0;x<div.length;x++){

      div[x].setAttribute("r","1");

    }
    
  }
  
}

function getNotification(){
  
  var notifications = document.getElementsByTagName("notifications")[0];
  
  if(notifications!==undefined){
    
    var wasread = goap(notifications,"r","0");

    var param = "";
    
    for(var x=0;x<wasread.length;x++){
      
      param+=wasread[x].getAttribute("codigo");
      
      if(x!=wasread.length-1){
         
            param+=",";
        
         }
      
    }
    
   
    return param;
    
  }

}

function mountNotifications(data){

  var counternotification=document.getElementsByTagName("counternotification")[0];

      var notifications = document.getElementsByTagName("notifications")[0];
  
    if(notifications!==undefined){
      
      counternotification.innerHTML=goap(notifications,"r","0").length;
   
      
    }else{
      counternotification.innerHTML="0";
    }

      if(data.length>0){
        
          counternotification.style.display='block';
        
      }else{
        
          counternotification.style.display='none';
        
      }

      mountBoxNotification(data);

}

function mountBoxNotification(array){
  
  if(document.getElementsByTagName("boxnotification").length==0){
    
    var box           = document.createElement("boxnotification");
    var notifications = document.createElement("notifications");
    var header        = document.createElement("header");
    
        box.appendChild(header);
        box.appendChild(notifications);
    
        document.body.appendChild(box);
    
  }else{
    
    var box = document.getElementsByTagName("boxnotification")[0];
    var notifications = box.getElementsByTagName("notifications")[0];
    var header = box.getElementsByTagName("header")[0];
    
  }

  for (var x=0;x<array.length;x++){
   
    var data = datePTBR(array[x].data);
    
    var div = document.createElement("div");
        div.setAttribute('codigo',array[x].codigo);
        div.setAttribute('r',array[x].wasread);
    var figure = document.createElement("figure");
    
        var url="url('"+localStorage.getItem("imgp")+array[x].filename+"');";
    
        figure.setAttribute("style","background-image:"+url+";");
    
    var user = document.createElement("user");
        user.innerHTML=array[x].label;
    
    var action = document.createElement("action");
        action.innerHTML=language("ptbr","shared");
    
    var modules = document.createElement("modules");
        modules.innerHTML=array[x].modules;
    
    var date = document.createElement("date");
        date.innerHTML=data.toLocaleString();
 
    div.appendChild(figure);
    div.appendChild(user);
    div.appendChild(action);
    div.appendChild(modules);  
    div.appendChild(date);
    
    if(checkNotificationsRepeat(array[x].codigo)){
      
      notifications.appendChild(div);
      
    }
    
  }
  
}

function datePTBR(string){
  
    var year = string.substring(0,4);
    var month = string.substring(5,7)-1;
    var day = string.substring(8,10);

    var hour = string.substring(11,13);
    var min = string.substring(14,16);
    var sec = string.substring(17,19);  
    var mil = 0;

    var data = new Date(year, month, day, hour, min, sec, mil);
  
  return data;
  
}

function checkNotificationsRepeat(codigo){
  
  var div = document.getElementsByTagName("boxnotification")[0].getElementsByTagName("notifications")[0].getElementsByTagName("div");
  
  if(div!==undefined){
    //console.log(div.length);
    for(var x=0;x<div.length;x++){
      
      if(div[x].getAttribute("codigo")==codigo){
        return false
      }
      
    }
    
  }
  
  return true;
  
}

function language(c,word){
  
  var ptbr = [];
  var en = [];
  
      ptbr.shared="compartilhou com você";
      en.shared="";
  
  return eval(c+"."+word);
  
}