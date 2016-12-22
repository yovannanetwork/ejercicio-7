function calcular()
{
    
    var aSmile = document.getElementById("a_smile").value;
	var bSmile = parseInt(document.getElementById("b_smile").value);

	var a = aSmile, bSmile;
	var b = aSmile, bSmile;

	var salida = document.getElementById("salida");
    if (aSmile = "1"){
        a = true;
    }

	if (a == aSmile && b == bSmile){
        salida.innerHTML = 1;
    }
    else if (a != aSmile && b != bSmile){
        salida.innerHTML = 1;
    }
    else{
        salida.innerHTML = 0;
    }
}