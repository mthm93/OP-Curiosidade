function login() {
    let email = document.getElementById('email');
    let senha = document.getElementById('senha');

    let emailValido = validarEmail(email);
    
    if (senha.value.length !== '' && email.value.length !== '' && emailValido == true) {
        window.open("file://C:/Users/mathe/Documents/Estudo/OP-Curiosidade/dashboard/dashboard.html", "_self");
    } else {
        msgErro.innerHTML = 'Login e/ou Senha Inválidos.';
        msgErro.style.color = "red";
        msgErro.style.fontSize = "12px";
    }
}

function validarEmail()  {
    if (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(formLogin.email.value)) {
        return true;
    } else {
        return false;
    }
}