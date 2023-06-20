const { guardarDb, leerDb } = require('./helpers/guardararchivo');
const { inquirerMenu, pausa, seleccionMenu } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

const main = async () => {

    let opt = '';
    const tareas = new Tareas();

    const leolaDb = leerDb();

    if (leolaDb) tareas.cargarTareasFromArray(leolaDb);

    do {
        /*      const tareas = new Tareas();
                const tarea = new Tarea('Pinta soporte');
                
                tareas._listado [tarea.id] = tarea;
        
                console.log (tareas) */

        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                tareas.agregarTarea(await seleccionMenu('Ingrese nombre de la Tarea'));
                break;

            case '2':
                //console.log(tareas.listadoArrTareas);
                tareas.printListTasks();

                break;
        }
        
        guardarDb(tareas.listadoArrTareas);

        if (opt !== '7') await pausa();

    } while (opt !== '7')
}

main();