108


/*El proyecto es que segun el alumno que yo elija, despues me pida las 3 notas por teclado, y me de su promedio.*/

    let num1 = parseInt(prompt("ingrese la primer nota"));
    let num2 = parseInt(prompt("ingrese la segunda nota"));
    let num3 = parseInt(prompt("ingrese la tercer nota"));

    /*let promedio = (num1+num2+num3)/3;
    alert("El promedio es: "+promedio);  */

    function calcularPromedio(nota1,nota2,nota3){
        let promedio = (nota1+nota2+nota3)/3
        alert("El promedio de Marcos es: " + promedio)
    }
    calcularPromedio(num1,num2,num3)

    const marcos = {
        nombre: "Marcos",
        apellido: "Perez",
        promedio: 10
    }

    const pedro = new Producto("Pedro", "Pedraza", 10);
pedro.cantidad();
    
    function Promedios(nombreArg, apellidoArg, promedioArg){
        this.nombre = nombreArg;
        this.apellido = apellidoArg;
        this.promedio = promedioArg;
        this.cantidad = function () {
                            alert("El promedio es: " + promedio)
        }

