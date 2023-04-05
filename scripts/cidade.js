var diasDaSemana = {
  0: "Domingo",
  1: "Segunda-Feira",
  2: "Terça-Feira",
  3: "Quarta-Feira",
  4: "Quinta-Feira",
  5: "Sexta-Feira",
  6: "Sábado"
};



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
dataAtual.innerHTML = "Data atual: " + diaCompleto() + dia + "/" + mesCompleto() + mes + "/" + ano + " - " + diasDaSemana[data.getDay()];

//Mudar o horario de acordo com os dias da semana 


var diaDaSemana = data.getDay();

var horarios = document.getElementById("horarios");
switch (diaDaSemana) {
  case 0: // Domingo
    horarios = document.getElementById("horarios").innerHTML = "<li>5:50</li><li>08:10</li><li>10:30</li><li>12:20</li><li>14:30</li><li>16:30</li><li>18:30</li>";
    break;
  case 6: // Sábado
    horarios.innerHTML = "<li>10:30</li><li>13:00</li><li>15:00</li><li>17:00</li>";
    break;
  default: // Demais dias da semana
    horarios.innerHTML = "<li>05:30</li><li>07:10</li><li>07:50</li><li>09:50</li><li>11:50</li><li>13:50</li><li>15:50</li><li>17:50</li><li>18:50</li><li>21:30</li>";
    break;
}