var Resultado = document.getElementById("Resultado");

var botaoCalcular = function () {
    alert("O consumo do caminho percorrido foi " + Resultado.value);
}

var botaoClicado = document.getElementById("btnCalcular");
botaoClicado.onclick = botaoCalcular;