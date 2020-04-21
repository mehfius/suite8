function adsense(){
  
  var ins = cE("ins");
  
  ins.setAttribute("style","width:320px;height:100px;float:left;border-top: 3px solid #fff;");
  ins.setAttribute("data-ad-client","ca-pub-7384375628902072");
  ins.setAttribute("data-ad-slot","2673791548");
  ins.setAttribute("class","adsbygoogle");
  
  return ins;
  
}

function adsenseVertical(){
  
  var ins = cE("ins");
  
  ins.setAttribute("style","display:inline-block;width:120px;height:600px");
  ins.setAttribute("data-ad-client","ca-pub-7384375628902072");
  ins.setAttribute("data-ad-slot","7149526584");
  ins.setAttribute("class","adsbygoogle");
  
  var adsensevertical = cE("adsensevertical");
  
  adsensevertical.appendChild(ins);
  
  return adsensevertical;  
  
  
} 