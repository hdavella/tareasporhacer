const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


//console.clear();

const main = async () => {

    let opt = '';
    const tareas = new Tareas();
    
    do {
        /*      const tareas = new Tareas();
                const tarea = new Tarea('Pinta soporte');
                
                tareas._listado [tarea.id] = tarea;
        
                console.log (tareas) */

        opt = await inquirerMenu();
        console.log({ opt });



        if (opt !== '0') await pausa();

    } while (opt !== '0')
}

main();