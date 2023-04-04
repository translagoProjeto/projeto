
//ANIMAÇÃO
function toggleDiv() {
    var minhaDiv = document.getElementById("minhaDiv");
    if (minhaDiv.classList.contains("mostrar")) {
      minhaDiv.classList.remove("mostrar");
    } else {
      minhaDiv.classList.add("mostrar");
        minhaDiv.scrollIntoView({ behavior: 'smooth'})
    }
  }
  
//DIA 
var data = new Date();
var dia = data.getDate();
var mes = data.getMonth() + 1;
var ano = data.getFullYear();

function diaCompleto() {
    if(dia < 10){
        return "0"
    }
}

function mesCompleto(){
    if(mes < 10){
        return "0"
    }
}

var dataAtual = document.getElementById("dataAtual");
dataAtual.innerHTML = "Data atual: " + diaCompleto() + dia + "/" + mesCompleto() + mes + "/" + ano;

