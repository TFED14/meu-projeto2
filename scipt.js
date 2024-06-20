function store(){
  var Name = document.getElementById('Name');
  var Email = document.getElementById('Email');
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;
  var currentDate = new Date();

  if(Name.value.length == 0){
    alert('Informe um username');
  }else if(!Name.value.match(upperCaseLetters)){
    alert('Deve conter uma letra maiuscula');
  }else if(!Name.value.match(lowerCaseLetters)){
    alert('Deve conter uma letra minúscula');
  }else{
    localStorage.setItem('Name', Name.value);
    localStorage.setItem('Email', Email.value);
    localStorage.setItem('RegistrationDate', currentDate);
    alert('Sua conta foi criada');
  }

  var li = document.createElement("li");
  var textNode = document.createTextNode("Username: " + Name.value + ", Email:" + Email.value + ", Data de Inscrição: " + currentDate.toLocaleString());
  li.appendChild(textNode);
  document.getElementById("cadastroLista").appendChild(li);

  document.getElementById('Name').value = "";
  document.getElementById('Email').value = "";
}

function check(){
    var storedName = localStorage.getItem('Name');
    var storedEmail = localStorage.getItem('Email');

    var userName = document.getElementById('userName');
    var userEmail = document.getElementById('userEmail');

  if(userName.value == storedName && userEmail.value == storedEmail){
    alert('Login realizado.');
  }else{
    alert('Erro ao fazer login');
  }
}
