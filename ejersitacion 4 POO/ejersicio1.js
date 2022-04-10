/*1- Crea un objeto llamado auto que tenga algunas
 características como el color, marca, modelo y si está encendido
  o apagado. Crea los métodos necesarios para permitir encender y 
  apagar el auto.
 */

  class Auto{
      constructor(color,marca,modelo){
          this.color=color,
          this.marca=marca,
          this.modelo=modelo
      }
      encenderAuto(){
          alert(`El ${this.marca} ${this.modelo} está encendido`);
      }
      apagarAuto(){
          alert(`El ${this.marca} ${this.modelo} está apagado`);
      }
  }

  let auto1=new Auto("rojo","Fiat","argo");
  let auto2=new Auto("Negro","toyota","Hylux");