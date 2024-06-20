function store(){
  var Name = document.getElementById('Name');
  var Email = document.getElementById('Email');
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;

  if(Name.value.length == 0){
    alert('Informe um email');
  }else if(!Name.value.match(upperCaseLetters)){
    alert('Deve conter uma letra maiuscula');
  }else if(!Name.value.match(lowerCaseLetters)){
    alert('Deve conter uma letra minúscula');
  }else{
    localStorage.setItem('Name', Name.value);
    localStorage.setItem('Email', Email.value);
    alert('Sua conta foi criada');
  }
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
