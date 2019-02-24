
//Clase Programador


//importo la clase later y la eventemitter de JS

const EventEmitter = require('./events');
const later = require('later');

class Programador extends EventEmitter {
	constructor(horatemp){
		super(); //para el extends
		later.date.localTime();//para que later esté up to date
      horatemp.forEach(({temperatura,hora})=>{
      //dentro de la funcion
      const sched = later.parse.text(`at ${hora}`);
      later.setInterval( () => {this.emit('ideal',temperatura)},sched );
        }
    )
	}
}
exports = module.exports = Programador;
