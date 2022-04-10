/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad 
como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
 */

//crear objeto cuenta

// let totalDeLACuenta;
// let montoIngresado,montoExtraccion;

class Cuenta{
    //agregando propiedades
    constructor(titular="Alex",saldo=0){
        this.titular=titular,
        this.saldo=saldo;
    }
    //metodos
    ingresarDinero(montoIngresado){
        this.saldo+=montoIngresado;
        console.log(`EL monto ingresado es: ${montoIngresado}`);
        console.log(`EL saldo de la cuenta es: ${this.saldo}`);
    }
    extraeDinero(montoExtraccion){
            this.saldo-=montoExtraccion;
            console.log(`EL monto ingresado es: ${montoExtraccion}`);
            console.log(`EL saldo de la cuenta es: ${this.saldo}`);
    }
    informarEstadoDeCuenta(){
        alert(`El saldo de la cuenta es: ${this.saldo}`);
        console.log(`El saldo de la cuenta es: ${this.saldo}`);
    }
}

let cuentaMarcelo = new Cuenta("Marelo",5000);
let cuentaJuan = new Cuenta("juan",100);
let cuentaNatalia = new Cuenta("natalia",1000)