var NumBin = document.getElementById("inputBinario");

function TesteBinario(e) {
    var tecla=(window.event)?e.keyCode:e.which;
    if((tecla==48 || tecla==49)) return true;
     else{
    return false;
     }
}

function Calcular() {
    var NumDecimal = parseInt(NumBin, 2);
    console.log(NumDecimal);

}