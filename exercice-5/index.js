'use strict';

var form = function form(){

}

form.prototype.display = function(){
    var body = document.querySelector('body');
    var form = document.createElement('form');
    
    var lastName = document.createElement('input');
    lastName.id = "last_name";
    lastName.setAttribute('type', 'text');
    lastName.setAttribute('placeholder', 'Nom');

    var firstName = document.createElement('input');
    firstName.id = "first_name";
    firstName.setAttribute('type', 'text');
    firstName.setAttribute('placeholder', 'Prenom');

    var password = document.createElement('input');
    password.id = "password";
    password.setAttribute('type', 'password');
    password.setAttribute('placeholder', 'Mot de passe');

    var email = document.createElement('input');
    email.id = "email" ;
    email.setAttribute('type', 'text');
    email.setAttribute('placeholder', 'Email');

    var button = document.createElement('button');
    button.id = "button";
    button.setAttribute('type', 'button');
    button.textContent = 'Envoyer';
    button.style.width = "25vh";

    form.appendChild(lastName);
    form.appendChild(firstName);
    form.appendChild(password);
    form.appendChild(email);
    form.appendChild(button);
    body.appendChild(form);

    var inputs = document.querySelectorAll('input');
    inputs.forEach(el =>{
        el.style.marginBottom = '25px';
        el.style.width = '25vh';
    });
    
}

form.prototype.validate = function(){
    var button = document.querySelector('#button');
    button.addEventListener('click', event =>{
        var lastNameCheck = RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/);
        var lastNameValue = document.querySelector('#last_name').value;
        if(lastNameCheck.test(lastNameValue)){
            if(lastNameValue.length <= 30 && lastNameValue.length >= 2){
                alert('Nom: Correct!');
            }else{
                alert("Nom: Incorrect. Le nom fait plus de 30 caractères ou n'a pas au moins 2 caractères");
            }
        }else{
            alert('Nom: Incorrect. Contient des caractères spéciaux.');
        }

        var firstNameCheck = RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/);
        var firstNameValue = document.querySelector('#first_name').value;
        if(firstNameCheck.test(firstNameValue)){
            if(firstNameValue.length <= 30 && firstNameValue.length >= 2){
                alert('Prénom: Correct!');
            }else{
                alert("Prénom: Incorrect. Le nom fait plus de 30 caractères ou n'a pas au moins 2 caractères");
            }
        }else{
            alert('Prénom: Incorrect. Contient des caractères spéciaux.');
        }

        var emailCheck = RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
        var emailValue = document.querySelector('#email').value;
        if(emailCheck.test(emailValue)){
            if(emailValue.length <= 50 && emailValue.length >= 10){
                alert('Email: OK!');
            }else{
                alert("Email: Incorrect. L'email fait plus de 40 caractères ou n'a pas au moins 10 caractères");
            }
        }else{
            alert("Email: Incorrect. Le format de l'email n'est pas respecté");
        }

        var passwordValue = document.querySelector('#password').value;
        if(passwordValue.length <= 30 && passwordValue.length >= 6){
            alert('Mot de passe: Correct!');
        }else{
            alert("Mot de passe: Incorrect. Le mot de passe doit faire entre 6 caractères minimum et 30 caractères maximum");
        }

    })
}

form.prototype.run = function(){
    this.display();
    this.validate();
}

var form = new form();
form.run();