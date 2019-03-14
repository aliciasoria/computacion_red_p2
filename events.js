//clase EventEmitter mia
class EventEmitter {
  constructor(){
    this.guardados = [];
  }
  on(nombre, metodo){
  if(this.guardados.length==0){this.guardados.push({name:nombre,list:[metodo]})}
  this.guardados.forEach( (name)=>{
    if (name==nombre ){
      this.guardados[nombre].push(metodo);
    }
  });
  this.guardados.push({name:nombre,list:[metodo]});
}
  emit(nombre,args){
    this.guardados.forEach( ({name,list}) =>{
      if( !name.localeCompare(nombre) ){
        list.forEach(metodo=>metodo(args));
      }
    });
 }
}
//exporto
exports = module.exports = EventEmitter;

//solucion de clase
class EventEmitter{
  constructor(){
        this.escucha={};
}
emit(nombreEvento,arraydeargumentos){
  if(this.escucha[nombreEvento]){
    this.escucha[nombreEvento].forEach( funcioni => funcioni(arraydeargumentos));
  }
}
on(nombreEvento,funcioni){//simplemente asocias una nueva funcion al
  //evento que ya existia o creas un nuevo evento y le asocias la funcioni
  this.escucha[nombreEvento]=this.escucha[nombreEvento]||[];
  this.escucha[nombreEvento].push(funcioni);
}}

exports = module.exports = EventEmitter;
