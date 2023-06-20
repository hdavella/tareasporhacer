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

    printListTasks(){

        this.listadoArrTareas.forEach( (tarea, i) => {

            const idx = i+1;
            const {desc, completadoEn} = tarea;
            const estado = (!completadoEn) ? "Pendiente".green : "Completado".red
            console.log(`${idx}`.green + ' Tarea: ' + `${desc}`.blue + ' :: ' + estado);

        })
        
    }
}

module.exports = Tareas;