function iconVideo(){
  
    var icon = cE("icon")
        icon.setAttribute("class","icon-users");
  
    var userinfo = JSON.parse(localStorage.userinfo);

        icon.onclick=(function(){
          
          window.open("https://whereby.com/"+userinfo.whereby,"_blank");
          
        });

  return icon;
  
}
