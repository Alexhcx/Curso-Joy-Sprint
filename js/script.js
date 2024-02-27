let barraNav = document.querySelector("nav ol");

let item = document.createElement("li");
let link = document.createElement("a");
let form = document.createElement("form")

link.href = "/Paginas/cadastro.html";
link.textContent = "login";

item.appendChild(link);
barraNav.appendChild(item);



