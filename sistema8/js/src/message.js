function message(code){
 
  var a=[];
  
      a["1"]="Cadastro realizado com sucesso";

      a["501"]="Logado com sucesso";
      a["502"]="Senha inválida";
      a["503"]="Conta desativada";
      a["504"]="Usuário não encontrado";
      a["505"]="Campo password vazio";
      a["506"]="Erro deconhecido";
      a["507"]="Sistema em atualização";
      a["508"]="Campo usuário está vazio";

      a["602"]="Campo nome completo está vazio";
      a["603"]="Campo email está vazio";
      a["605"]="O campo cpf está vazio";
      a["606"]="Este cpf já foi cadastrado por outro usuário";
      a["607"]="Este email já foi cadastrado por outro usuário";
      
      a["620"]="Digite apenas números, 11 dígitos";
      
  
      a["999"]="Erro no sistema";  
  
  return a[code];       

}