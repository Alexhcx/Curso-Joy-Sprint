let h3Elements = document.querySelectorAll("div h3");
let loginTab = h3Elements[0];
let cadastroTab = h3Elements[1];
let loginForm = document.querySelector(".form-login");
let cadastroForm = document.querySelector(".form-cadastro");
let usuarios = [];

let nomeLoginInput = document.querySelector("#nomeLogin");
let emailLoginInput = document.querySelector("#emailLogin");
let botaoSubmit = document.querySelector("#botaoLogin");

let nomeCadastroInput = document.querySelector("#nomeCadastro");
let sobrenomeCadastroInput = document.querySelector("#Sobrenome");
let emailCadastroInput = document.querySelector("#emailCadastro");
let dataNascimento = document.querySelector("#dataNascimento");
let senha = document.querySelector("#password");
let confirmaSenha = document.querySelector("#passwordRepeat");
let msgSenhas= document.querySelectorAll(".passwordVerify span");

function mostrarUsuario(){
    let barraNav = document.querySelector("nav ol");
    
    let item = document.createElement("li");
    let link = document.createElement("a");
    
    link.href = "/Paginas/cadastro.html";
    link.textContent = "Login";
    link.classList.add("hvr-grow")
    
    item.appendChild(link);
    barraNav.appendChild(item);
}


function selecionarLogin(){
    loginTab.classList.replace("cadastro-tab", "login-tab");
    cadastroTab.classList.replace("login-tab", "cadastro-tab");

    loginForm.style.display = "flex";
    cadastroForm.style.display = "none";
}


function selecionarCadastro(){
    loginTab.classList.replace("login-tab", "cadastro-tab");
    cadastroTab.classList.replace( "cadastro-tab", "login-tab");

    cadastroForm.style.display = "flex";
    loginForm.style.display = "none";
}


function verificarCaracteresEsp(elemento){
    let charEsp = /[0-9!@#\$%\^\&*\)\(+=._-]+/g;

    let queryform = elemento.parentNode;
    let msgAlerta = queryform.querySelector('p');

    if (!msgAlerta) {
        msgAlerta = document.createElement('p');
        queryform.appendChild(msgAlerta);
    }

    elemento.classList.remove("input-incorrect");
    elemento.classList.remove("input-correct");

    if(elemento.value === ""){
        msgAlerta.textContent = "";
    } else if(charEsp.test(elemento.value)){
        elemento.classList.add("input-incorrect");
        msgAlerta.textContent = "Presença de char. especiais ";
        msgAlerta.style.color = "red";
        msgAlerta.style.fontSize = "13px";
        msgAlerta.style.margin = "2px";
    }else{
        elemento.classList.add("input-correct");
        msgAlerta.textContent = "";
    }
}


function verificarEmail(elemento){
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let queryform = elemento.parentNode;
    let msgAlerta = queryform.querySelector('p');

    if (!msgAlerta) {
        msgAlerta = document.createElement('p');
        queryform.appendChild(msgAlerta);
    }

    elemento.classList.remove("input-incorrect");
    elemento.classList.remove("input-correct");

    if(elemento.value === ""){
        msgAlerta.textContent = "";
    } else if(!emailRegex.test(elemento.value)){
        elemento.classList.add("input-incorrect");
        msgAlerta.textContent = "Email inválido";
        msgAlerta.style.color = "red";
        msgAlerta.style.fontSize = "13px";
        msgAlerta.style.margin = "2px";
    } else{
        elemento.classList.add("input-correct");
        msgAlerta.textContent = "";
    }
}


function verificarData(){
    let dataAtual = new Date();
    let ano = dataAtual.getFullYear();
    let mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    let dia = String(dataAtual.getDate()).padStart(2, '0');

    dataNascimento.max = `${ano}-${mes}-${dia}`;
    dataNascimento.min = "1960-01-01"

    dataNascimento.addEventListener('input', function() {
        if(dataNascimento.value !== ""){
            dataNascimento.classList.add("input-correct");
        } else {
            dataNascimento.classList.remove("input-correct");
        }
    });
}


function verificarSenhas(){
    let charEsp = /[!@#\$%\^\&*\)\(+=._-]+/g;
    let numVer = /[0-9]+/g;

    let img0 = msgSenhas[0].querySelector('img');
    let img1 = msgSenhas[1].querySelector('img');
    let img2 = msgSenhas[2].querySelector('img');
    let img3 = msgSenhas[3].querySelector('img');

    if(senha.value === ""){
        senha.classList.remove("input-correct");
        senha.classList.remove("input-incorrect")
        img0.src = "/img/incorrect_60.png";
        img1.src = "/img/incorrect_60.png";
        img2.src = "/img/incorrect_60.png";
        img3.src = "/img/incorrect_60.png";
    }

    if(senha.value.length >= 6){
        senha.classList.add("input-correct");
        img0.src = "/img/correct_60.png";
    }

    if(charEsp.test(senha.value)){
        senha.classList.add("input-correct");
        img1.src = "/img/correct_60.png";
    }

    if(numVer.test(senha.value)){
        senha.classList.add("input-correct");
        img2.src = "/img/correct_60.png";
    }

    if(senha.value === confirmaSenha.value){
        senha.classList.add("input-correct");
        confirmaSenha.classList.add("input-correct");
        senha.classList.remove("input-incorrect");
        confirmaSenha.classList.remove("input-incorrect");
        img3.src = "/img/correct_60.png";

    } else{
        senha.classList.remove("input-correct");
        confirmaSenha.classList.remove("input-correct");
        senha.classList.add("input-incorrect");
        confirmaSenha.classList.add("input-incorrect");
        img3.src = "/img/incorrect_60.png";
    }
}


function verificarLogin(){
    let loginAll = document.querySelectorAll(".form-login div");
    let msgLogin = loginAll[1]
    let msgAlertaLogin = msgLogin.querySelector("p");

    if (!msgAlertaLogin) {
        msgAlertaLogin = document.createElement("p");
        msgAlertaLogin.style.display = "none"
        msgLogin.appendChild(msgAlertaLogin);
    }

    for(let i = 0; i < usuarios.length; i++) {
        if (nomeLoginInput.value === usuarios[i].nome && emailLoginInput.value === usuarios[i].email){
            msgAlertaLogin.style.display ="none"
            return true;
        }
    }

    msgAlertaLogin.textContent = "Email e/ou senha estão incorretos."
    msgAlertaLogin.style.display = "flex"
    msgAlertaLogin.style.color = "red"
    msgAlertaLogin.style.fontSize = "13px"
    msgAlertaLogin.style.margin = "2px"

    return false;
}


function cadastrarUsuario(nome, sobrenome, email, dataDeNascimento, senha) {
    let usuario = {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        dataDeNascimento: dataDeNascimento,
        senha: senha
    };

    usuarios.push(usuario);
}


function adicionarEvento(elemento, funcao){

   elemento.addEventListener("input", function() {
        funcao(elemento);
    });
    
    elemento.addEventListener("change", function() {
        funcao(elemento);
    });
}


mostrarUsuario();
verificarData();
verificarSenhas();

document.querySelector(".login-tab").addEventListener("click", selecionarLogin);
document.querySelector(".cadastro-tab").addEventListener("click", selecionarCadastro);

botaoSubmit.addEventListener('click', function(event) {
    event.preventDefault();
    verificarLogin();
});

adicionarEvento(nomeCadastroInput, verificarCaracteresEsp);
adicionarEvento(sobrenomeCadastroInput, verificarCaracteresEsp);
adicionarEvento(emailCadastroInput, verificarEmail);
adicionarEvento(senha, verificarSenhas);
adicionarEvento(confirmaSenha, verificarSenhas);