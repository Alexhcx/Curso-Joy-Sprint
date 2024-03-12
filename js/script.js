let barraNav = document.querySelector("nav ol");
    
let item = document.createElement("li");
let link = document.createElement("a");

link.href = "/Paginas/cadastro.html";
link.textContent = "login";
link.classList.add("hvr-grow")

item.appendChild(link);
barraNav.appendChild(item);