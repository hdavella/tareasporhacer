const Tarea = require("./tarea");

class Tareas {

    _listado = {};

    get listadoArrTareas(){
        const listado=[];

        Object.keys(this._listado).forEach( (key)=>{
            listado.push(this._listado[key]);
        });

        return listado;
    }

    constructor(){

        this._listado={};
    }

    cargarTareasFromArray( tareas=[] ){

        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        });

    }

    agregarTarea( desc= '' ){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
}

module.exports = Tareas;