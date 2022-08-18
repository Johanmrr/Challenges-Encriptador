function encriptar() {
  var texto = document.getElementById("textoEnviado").value.toLowerCase();
  var txtCifrado = texto.replace(/e/gim, "enter");
  var txtCifrado = txtCifrado.replace(/i/gim, "imes");
  var txtCifrado = txtCifrado.replace(/a/gim, "ai");
  var txtCifrado = txtCifrado.replace(/o/gim, "ober");
  var txtCifrado = txtCifrado.replace(/u/gim, "ufat");
  document.getElementById("img-muneco").style.display = "none";
  document.getElementById("mensajeN").style.display = "none";
  document.getElementById("parrafo1").style.display = "none";
  document.getElementById("contenidoMostrado").innerHTML = txtCifrado;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
  document.getElementById("contenidoMostrado").style.display = "show";
  document.getElementById("contenidoMostrado").style.display = "inherit";
}

function desencriptar() {
  var texto = document.getElementById("textoEnviado").value.toLowerCase();
  var txtCifrado = texto.replace(/enter/gim, "e");
  var txtCifrado = txtCifrado.replace(/imes/gim, "i");
  var txtCifrado = txtCifrado.replace(/ai/gim, "a");
  var txtCifrado = txtCifrado.replace(/ober/gim, "o");
  var txtCifrado = txtCifrado.replace(/ufat/gim, "u");
  document.getElementById("img-muneco").style.display = "none";
  document.getElementById("mensajeN").style.display = "none";
  document.getElementById("parrafo1").style.display = "none";
  document.getElementById("contenidoMostrado").innerHTML = txtCifrado;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
  document.getElementById("contenidoMostrado").style.display = "show";
  document.getElementById("contenidoMostrado").style.display = "inherit";
}

function copiar() {
  var contenido = document.querySelector("#contenidoMostrado");
  contenido.select();
  document.execCommand("copy");
}

const bdark = document.querySelector("#bdark");
const body = document.querySelector("body");

load();

bdark.addEventListener("click", (e) => {
  body.classList.toggle("darkmode");
  Store(body.classList.contains("darkmode"));
});

function load() {
  const darkmode = localStorage.getItem("darkmode");
  if (!darkmode) {
    Store("false");
  } else if (darkmode == "true") {
    body.classList.add("darkmode");
  }
}

function Store(value) {
  localStorage.setItem("darkmode", value);
}
