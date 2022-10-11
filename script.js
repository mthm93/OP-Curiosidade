function login() {
    let email = document.getElementById('email')
    let senha = document.getElementById('senha')

    if (senha.value.length == '' || email.value.length == '') {
        msgErro.innerHTML = 'Login e/ou Senha Inválidos.';
        msgErro.style.color = "red";
        msgErro.style.height = "12px";
    } else if(senha.value.lenght == ) {
        
    } else {
        msgErro.innerHTML = ''
    }
}