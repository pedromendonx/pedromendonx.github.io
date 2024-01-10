function Calcular() {
    const NumBin = document.getElementById("inputBinario").value;
    const NumDecimal = parseInt(NumBin, 2);
    

    document.getElementById("resultado").innerText = `Número em decimal ${NumDecimal}`;



}