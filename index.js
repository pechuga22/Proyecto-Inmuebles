// Variables de Entrada: 
    var metrosCuadrados = 0;
    var tipoInmueble = "";
    var valorAdmin = 0;
    var valorAseo = 0;
    var genero ="";
    var valorGimnasio =0; var edad=0;
    var totalPago =0;
    var cantidadPersonas=0;
// Calculos
    metrosCuadrados = prompt("Digite los metros cuadrados");
    tipoInmueble = prompt("Digite el tipo de inmueble " + 'casa  --' + 'apartamento');
    cantidadPersonas =prompt("Digite cantidad de personas que viven en el inmueble ");

       for (var i = 0; i < cantidadPersonas; i++) {
          
           
       
        genero =prompt("Ingrese su genero (masculino-femenino): " + (i+1));
        genero=genero.toLowerCase();
        edad = prompt("Digite su edad: " + (i+1));
        valorGimnasio +=costoGimnasio(genero, edad)
       }

    tipoInmueble = tipoInmueble.toLowerCase();
    
   // totalPago =totalPago(valorAdmin, valorAseo, valorGimnasio)
    
    valorAseo = valAseo(valorAdmin, metrosCuadrados)
    valorAdmin = valorAdministracion(metrosCuadrados, tipoInmueble)
    
    
    function valorAdministracion(metrosCuadrados, tipoInmueble) {
        if (tipoInmueble=="casa") {
            return valorAdmin = metrosCuadrados*1500 + 100000;
        }else if(tipoInmueble =="apartamento"){
            return valorAdmin = metrosCuadrados*1500 + 50000;
        }
        else{
            return "tipo de inmueble no valido"
        }
    }
    function valAseo(valorAdmin, metrosCuadrados) {
      return   valorAseo = (valorAdmin * 0.1) + (metrosCuadrados * 1000);
      
    }
    
    function costoGimnasio(genero,edad) {
       

       switch (genero) {
           case "masculino":
                    if (edad<10 || edad>60) {
                       return  0;
                        
                    }else if(edad>=10 && edad<20){
                       return  20000;
                    }
                    else if(edad<=20 && edad<40){
                       return 15000;
                    }
                    else if(edad>=40 && edad<60){
                        return  10000;
                    }
                    
               
               break;
            case  "femenino":
                     if (edad<10 || edad>=55) {
                        return 0;
                         
                     }else if(edad>=10 && edad<=18){
                        return 15000;
                     }
                     else if(edad>=18 && edad < 35){
                        return 12000
                     }else if(edad>=35 && edad<55){
                         return 8000
                     }


           default: "Ingrese genero valido"
               break;
       }
    }
    function totalPago(valorAdmin, valorAseo, valorGimnasio) {
        totalPago=valorAdmin+valorAseo+valorGimnasio
        return totalPago
    }

// Salida
     document.write("Valor de admin " + valorAdmin + "<br>");
     document.write("Valor de Aseo " + valorAseo + "<br>");
     document.write("Valor del gimnasio " + valorGimnasio + "<br>");
    // document.write("Valor total a pagar es: " + totalPago);

