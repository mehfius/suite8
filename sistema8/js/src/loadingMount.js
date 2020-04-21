function loadingMount(){
  
  var loading = cE("loading");
  
  var icon = cE("icon")
      icon.setAttribute("class","icon-spinner9")

  var label = cE("label");
  
  label.appendChild(cT("Aguarde"));
  
  loading.appendChild(icon);
  loading.appendChild(label);
  
  return loading;
  
}