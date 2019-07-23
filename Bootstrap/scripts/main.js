"use strict"
let link = document.createElement("link");
link.rel="stylesheet";
link.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
document.head.appendChild(link);
let form= document.createElement("form");
document.getElementsByTagName("body")[0].appendChild(form);
let div= document.createElement("div");
div.setAttribute("class","formgroup");
form.appendChild(div);
let input = document.createElement("input");
input.type="email";
input.placeholder= "enter email";
div.appendChild(input);