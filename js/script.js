function diferenca() {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Por favor, digite valores numéricos válidos em ambos os campos.");
        return;
    }

    resultado = "Os números são iguais";
    if (parseInt(valor1) != parseInt(valor2)) {
        resultado = "Os números são diferentes";
    }

    document.getElementById("resultado").textContent = resultado;
}