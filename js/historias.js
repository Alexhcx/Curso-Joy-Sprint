let estantes = document.querySelectorAll("#livro-aberto div")
let iframeDisplay = document.querySelector("#livro-aberto")
let asideImg = document.querySelector(".aside-img")
let tituloP = document.querySelector(".tituloP")
let tituloSB = document.querySelector(".tituloSb")
let atividadesRecentes = document.querySelector(".atividades-recentes")


let livros = {
    livro_1: "/img/Livro-capa-chapeuzinho.png",
    titulo_1:"Chapeuzinho Vermelho",

    livro_2: "/img/Livro-capa-brancadeneve.png",
    titulo_2:"Branca de Neve",

    livro_3: "/img/livro-capa-tresporquinhos.png",
    titulo_3:"Os Três Porquinhos",
}

let iframeLivros = {
    iframe_1: '<iframe allowfullscreen="allowfullscreen" scrolling="no" class="fp-iframe" src="https://heyzine.com/flip-book/b1d5592436.html"></iframe>',
    iframe_2: '<iframe allowfullscreen="allowfullscreen" scrolling="no" class="fp-iframe" src="https://heyzine.com/flip-book/60f1e6b25a.html"></iframe>',
    iframe_3: '<iframe allowfullscreen="allowfullscreen" scrolling="no" class="fp-iframe" src="https://heyzine.com/flip-book/d2c90d11a3.html"></iframe>'
}

function mostrarUsuario(){
    let barraNav = document.querySelector("nav ol");
    
    let item = document.createElement("li");
    let link = document.createElement("a");
    
    link.href = "/Paginas/cadastro.html";
    link.textContent = "login";
    
    item.appendChild(link);
    barraNav.appendChild(item);
}

for (let i = 0; i < estantes.length; i++) {
    let capas = document.createElement('img');

    capas.src = livros['livro_' + (i + 1)]; 

    capas.addEventListener('click', function() {
        let divParaIframe = document.createElement('div');
        divParaIframe.innerHTML = iframeLivros['iframe_' + (i + 1)];

        iframeDisplay.appendChild(divParaIframe);

        for (let j = 0; j < estantes.length; j++) {
            estantes[j].style.display = "none";
        }

        asideImg.src = livros['livro_' + (i + 1)];
        tituloP.textContent = livros['titulo_' + (i + 1)];

        let recentActivity = document.createElement('img');
        recentActivity.style.height = "250px"
        recentActivity.style.margin = "8px"

        recentActivity.src = livros['livro_' + (i + 1)];
        atividadesRecentes.appendChild(recentActivity);
    });

    estantes[i].appendChild(capas);
}

mostrarUsuario();