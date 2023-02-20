require('colors');

const mostrarMenu = ()=>{

    console.clear();
    console.log('======================='.green);
    console.log('   Seleccione opción'.grey);
    console.log('=======================\n'.green);

    console.log(`${'1.'.green} Crear Tarea`);
    console.log(`${'2.'.green} Listar Tareas`);
    console.log(`${'3.'.green} Listar Tareas Completadas`);
    console.log(`${'4.'.green} Listar Tareas Pendientes`);
    console.log(`${'5.'.green} Completar Tarea(s)`);
    console.log(`${'6.'.green} Borar Tarea`);
    console.log(`${'0.'.green} Salir\n`);
}

module.exports = {
    mostrarMenu
}