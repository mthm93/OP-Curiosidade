function login() {
    let email = document.getElementById('email')
    let senha = document.getElementById('senha')

    if (senha.value.length == '' || email.value.length == '') {
        msgErro.innerHTML = 'Login e/ou Senha Inválidos.';
        msgErro.style.color = "red";
        msgErro.style.fontSize = "12px";
    } else if(senha.value.lenght !== '' || email.value.lenght !== '') {
        window.open("https://www.google.com", "_self")
    }
}