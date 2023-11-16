const inputRegister = document.getElementById('input-register');
const inputPass = document.getElementById('input-pass');
const inputLogin = document.getElementById('input-login');
const inputPassword = document.getElementById('input-password');

const containerLogin = document.querySelector('.container-login');
const containerDashboard = document.querySelector('.container-dashboard');


let newArrayLogin = JSON.parse(localStorage.getItem('login'));
function login() {
    // localStorage.setItem('isAuth', true);
    console.log(newArrayLogin);
    if (newArrayLogin.length === 0) {
        alert('Nenhum login registrado!')
        return;
    }
    newArrayLogin.forEach(item => {
        if (inputLogin.value === item.login && inputPassword.value === item.password){
            alert('Logado com sucesso!');
            containerDashboard.style.display = 'flex';
            containerLogin.style.display = 'none';
        }
        else {
            alert('Login não Encontrado!');
            return;
        }
    })
}

var arrayLogin = []
function register() {
    if (inputRegister.value == '' || inputPass.value == '') {
        alert('Insira um Login e senha para cadastro!');
        return;
    }

    arrayLogin.forEach(item => {
        if (inputRegister.value = item.login) {
            alert('Usuário já cadastrado! Insira outro nome de login');
            return;
        }
    })


    arrayLogin.push({   
        login: inputRegister.value,
        password: inputPass.value
    },);
    let newLogin =  JSON.stringify(arrayLogin);
    localStorage.setItem('login', newLogin);

    alert(`Cadastro concluído com sucesso! Login: ${inputRegister.value} Senha: ${inputPass.value}`);
    
    inputRegister.value = '';
    inputPass.value = '';
    console.log(newLogin);
    switchLogin();
    location.reload()
}

function switchLogin() {
    const cardLogin = document.querySelector('.card-login');
    const cardRegister = document.querySelector('.card-register');
    
    const computedStyleLogin = window.getComputedStyle(cardLogin);
    const computedStyleRegister = window.getComputedStyle(cardRegister);
    
    if (computedStyleLogin.display === 'flex') {
        cardLogin.style.display = 'none';
        cardRegister.style.display = 'flex';
    } else if (computedStyleRegister.display === 'flex') {
        cardLogin.style.display = 'flex';
        cardRegister.style.display = 'none';
    }
}

function exit() {
    containerDashboard.style.display = 'none';
    containerLogin.style.display = 'flex';
}   