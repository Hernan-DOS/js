
const producto = {
    nombre: "Ford",
    modelo: "Ranger",
    stock: 10,
}

function Producto(nombreArg, modeloArg, stockArg){
    this.nombre = nombreArg;
    this.modelo = modeloArg;
    this.stock = stockArg;
    this.cantidad = function () {
                        console.log("Stock total de: " + this.stock)
    }
    this.venta = function (cantidad) {
         if(typeof cantidad == Number){
                 if(cantidad > this.stock){
                      alert("No tenemos esa cantidad, solo podes comprar: " + this.stock)
                      }       
                 else{
                     this.stock = this.stock - cantidad;
                 }   
         }
                    
    }
    this.compra = function (cantidad) {     
        this.stock = this.stock + cantidad;
    }
    this.devolucion = function(cantidad){
        this.stock = this.stock + cantidad;
    }
}

const chevrolet = new Producto("Chevrolet", "Corsa", 15);
chevrolet.cantidad();

if("stock" in chevrolet){
    if(chevrolet.stock > 0){
        alert(chevrolet.nombre);
    }
}