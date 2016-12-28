function calcular()
{
	var numeroa=parseInt(document.getElementById("a").value);
	var numerob=parseInt(document.getElementById("b").value);
	var suma=numeroa+numerob;

	if(suma== 10 || numeroa == 10 || numerob == 10 ){
		document.getElementById("salida").innerHTML=1;
	}else{
		document.getElementById("salida").innerHTML=0;
	}

}
