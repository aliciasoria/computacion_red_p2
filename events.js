


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
}




}














exports = module.exports = EventEmitter;
