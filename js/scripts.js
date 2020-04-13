function onlyNums(e) {
    const code = window.event ? e.which : e.ketCode;
    return !(code < 48 || code > 57);
}

function onlyLeterss(e) {
      key = e.keyCode || e.which;
      tecla = String.fromCharCode(key).toLowerCase();
      letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
      especiales = [8, 37, 39, 46];
  
      tecla_especial = false
      for(var i in especiales) {
          if(key == especiales[i]) {
              tecla_especial = true;
              break;
          }
      }
  
      if(letras.indexOf(tecla) == -1 && !tecla_especial)
          return false;
  }


var columna=new Array();
columna[0]=1;
columna[1]=2;
columna[2]=3;
columna[3]=4;
columna[4]=5;
columna[5]=6;
var filas=new Array();
filas[0]=1;
filas[1]=2;
filas[2]=3;
filas[3]=4;
filas[4]=5;
var tabla=new Array();
tabla[0]=columna;
tabla[1]=filas;


function begin() {
    const vOne = document.getElementById('valueOne').value;
    const vTwo = document.getElementById('valueTwo').value;
    
    const opt = document.getElementById('opt');
    
    if((opt.selectedIndex)==1){
        const sum = parseFloat(vOne)+parseFloat(vTwo);
        //alert(`sum=${sum}`);
        const mSum = "La suma es: " +  sum;
        document.getElementById('layout').innerHTML = mSum;
    }
    
    if((opt.selectedIndex)==2){
        if(parseFloat(vOne)<parseFloat(vTwo)){
            const subt = parseFloat(vTwo)-parseFloat(vOne);
            //alert(`Resta=${subt}`); 
            const mSubt = "La resta es: " +  subt;
            document.getElementById('layout').innerHTML = mSubt;
        }else{
            const subt = parseFloat(vOne)-parseFloat(vTwo);
            //alert(`Resta=${subt}`);
            const mSubt = "La resta es: " +  subt;
            document.getElementById('layout').innerHTML = mSubt;
        }
    }
    
    if((opt.selectedIndex)==3){
        const mult = parseFloat(vOne)*parseFloat(vTwo);
        const mMult = "La multiplicación es: " +  mult;
        document.getElementById('layout').innerHTML = mMult;
        //alert(`Producto=${mult}`);     
    }
    
    if((opt.selectedIndex)==4){
        if(parseFloat(vOne)>parseFloat(vTwo)){
            const div = parseFloat(vOne)/parseFloat(vTwo);
            if(parseFloat(vTwo)==0){
                //alert(`Error! división por cero`);
                const mDiv = "Error! división por cero";
                document.getElementById('layout').innerHTML = mDiv;
            }else{
                //alert(`División=${div}`);
                const mDiv = "La división es: " +  div;
                document.getElementById('layout').innerHTML = mDiv;
            }        
        }else{
            const div = parseFloat(vTwo)/parseFloat(vOne);
            if(parseFloat(vOne)==0){
                //alert(`Error! división por cero`);
                const mDiv = "Error! división por cero";
                document.getElementById('layout').innerHTML = mDiv;
            }else{
                //alert(`División=${div}`); 
                const mDiv = "La división es: " +  div;
                document.getElementById('layout').innerHTML = mDiv;
            }
        }
    }
    
    if((opt.selectedIndex)==5){
        const pot= Math.pow(parseFloat(vOne),parseFloat(vTwo));
        //alert(`Potencia base valor uno=${pot}`);
        const mPot = "La base es: " + parseFloat(vOne) + " el resultado es: " + pot;
        document.getElementById('layout').innerHTML = mPot;
    }
    
    if((opt.selectedIndex)==6){
        val1=parseFloat(vOne);
        val2=parseFloat(vTwo);
        
        while(val1 != val2){
            if(val1>val2){
                val1= val1-val2;
            }    
            else{
                 val2= val2-val1;
            }
        }
        //alert(`Máximo común divisor=${val1}`);  
        const mMCD = "El Máximo común divisor es: " + val1;
        document.getElementById('layout').innerHTML = mMCD;
    }
    
    //Números Amigos
    if((opt.selectedIndex)==7){
        val1=parseFloat(vOne);
        val2=parseFloat(vTwo); 
        div1=amigoDivisor(val1);
        div2=amigoDivisor(val2);
        sum1=amigoSuma(div1);
        sum2=amigoSuma(div2);

        if(sum1==val2 && sum2==val1) {
            //alert('Son amigos');
            const mFri = "Son números amigos ";
            document.getElementById('layout').innerHTML = mFri;
        } else {
            //alert('No son amigos');
            const mFri = "No son números amigos ";
            document.getElementById('layout').innerHTML = mFri;
        }      
    }
    
    //Números Primos
    if((opt.selectedIndex)==8){
        if(parseFloat(vOne)>parseFloat(vTwo)){
            var c = parseFloat(vOne);
            var j = parseFloat(vTwo);
            var numerosPrimos = [];
            var suma=0;
            for (j; j < c; j++) {
              if (calcularPrimo(j)) {
                numerosPrimos.push(j);
                suma+=j; 
              }
            }
            /*alert("Los primos son: " + numerosPrimos);
            alert("Total: " + numerosPrimos.length);
            alert("Suma: " + suma);*/
            const mFri = "Los primos son: " + numerosPrimos + ", total: " + numerosPrimos.length + ", Suma: " + suma;
            document.getElementById('layout').innerHTML = mFri;
            
        }else{
            var j = parseFloat(vOne);
            var c = parseFloat(vTwo);
            var numerosPrimos = [];
            var suma=0;
            for (j; j < c; j++) {
              if (calcularPrimo(j)) {
                numerosPrimos.push(j);
                suma+=j; 
              }
            }
            //alert(numerosPrimos);
            const mFri = "Los primos son: " + numerosPrimos + ", total: " + numerosPrimos.length + ", Suma: " + suma;
            document.getElementById('layout').innerHTML = mFri;
            
           /* var tbl = document.getElementById("table");
            var tblBody = document.createElement("tbody");
            for (var i = 0; i < columna.length; i++) {
                var fila = document.createElement("tr");
                for (var j = 0; j < filas.length; j++) {
                    var celda = document.createElement("td");
                    var textoCelda = document.createTextNode(i+"-"+j);
                    celda.appendChild(textoCelda);
                    fila.appendChild(celda);
                }
                tblBody.appendChild(fila);
            }
            tbl.appendChild(tblBody);
            tbl.setAttribute("border", "2");*/
            
            
            
        }
        

    }
    
    //Dias entre fechas
    if((opt.selectedIndex)==9){
        var dateOne = new Date(document.getElementById('dateOne').value);
        var dateTwo = new Date(document.getElementById('dateTwo').value);
        var dateSubt= dateTwo.getTime()-dateOne.getTime();
        var days = Math.round(dateSubt/(1000*60*60*24));
        //alert("dias entre fechas: " + days);
        const mDay = "Días entre fechas: " + days;
        document.getElementById('layout').innerHTML = mDay;
    
    }

    //Edad
    if((opt.selectedIndex)==10){
        var dateTwo = new Date(document.getElementById('dateTwo').value);
        var dateOne = new Date(document.getElementById('dateOne').value);
        var age = dateTwo.getFullYear() - dateOne.getFullYear();
        var m = dateTwo.getMonth() - dateOne.getMonth();
        if (m < 0 || (m === 0 && dateTwo.getDate() < dateOne.getDate())) {
            age--;
        }
        //alert("edad: " + age);
        const mAge =  "Edad: " + age;
        document.getElementById('layout').innerHTML = mAge;
    }
    
    //Mayúsculas 
    if((opt.selectedIndex)==11){
        text = document.getElementById('word').value;
        text = text.toLowerCase().charAt(0).toUpperCase() + text.toLowerCase().slice(1);
        //alert("Mayusculas: " + text);
        const mMay =  "Mayusculas: " + text;
        document.getElementById('layout').innerHTML = mMay;
    }
    
    
    //Palíndromo 
    if((opt.selectedIndex)==12){
        if(textPalindromo())
        {
            //alert("Es palíndromo");
            const mPal =  "Es palíndromo";
            document.getElementById('layout').innerHTML = mPal;
        }else{
            //alert("No es palíndromo")
            const mPal =  "No es palíndromo";
            document.getElementById('layout').innerHTML = mPal;
        }
       
    }
    
    

    
}


function calcularPrimo(numero) {
    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
        return false;
        }
    }
    return numero !== 1;
}



function textPalindromo(){
    text = document.getElementById('word').value;
	var word=text.toLowerCase();
	// eliminamos los espacios en blanco
	word=word.replace(/ /g, "");
 
	for (var i=0;i<word.length;i++){
		if(word[i]!=word[word.length-i-1]){
			return false;
		}
	}
	return true;
}



function amigoDivisor(n) {
	var a=1;
	var b=0;
	var l = new Array();
	while(a<n) {
		var h = n % a;
		if(h == 0) {
			l[b]=a;
			b++;
		}
		a++;
	}
	return l;
}

function amigoSuma(L) {
	var lg=L.length;
	var a=0;
	var sum=0;
	while(a<lg) {
		sum=sum+L[a];
		a++;
	}
	return sum;
}






$(document).ready(function () {
    $('#btnHide').click( () =>{
       $('#layout').fadeOut('slow');
    });

    $('#btnView').click( () =>{
       $('#layout').fadeIn('slow');
    });
})

