function diferenca() {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;

    resultado = "Os números são iguais";
    if (parseInt(valor1) != parseInt(valor2)) {
        resultado = "Os números são diferentes";
    }

    document.getElementById("resultado").textContent = resultado;
}