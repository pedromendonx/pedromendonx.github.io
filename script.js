let result = document.getElementById("inputext");

let calcular=(number)=> {
    result.value+=number;

}

let Result=()=>{
    var result = document.getElementById('result').innerHTML;
    if(result)
    {
        document.getElementById('result').innerHTML = eval(result);
    }
    else
    {
        document.getElementById('result').innerHTML = "Nada..."
}
}

function allclear() {
    result.value = " ";
}

function delet() {
 result.value = result.value.slice(0,-1);
}
