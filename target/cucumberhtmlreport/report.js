$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Login Positivo",
  "description": "",
  "id": "login;login-positivo",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "que o Usuario acessa o site TestLink",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "preenche seu login e senha e aperta o Enter",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "exibe a pagina principal com o usuario e perfil logado",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.que_o_Usuario_acessa_o_site_TestLink()"
});
formatter.result({
  "duration": 11035361090,
  "status": "passed"
});
formatter.match({
  "location": "Login.preenche_seu_login_e_senha_e_aperta_o_Enter()"
});
formatter.result({
  "duration": 4296970460,
  "status": "passed"
});
formatter.match({
  "location": "Login.exibe_a_pagina_principal_com_o_usuario_e_perfil_logado()"
});
formatter.result({
  "duration": 1677360115,
  "status": "passed"
});
});