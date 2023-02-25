
const inquire = require('inquirer');
require('colors');

const preguntapausa = [
    {
        type:'input',
        name:'pausa',
        prefix:'',                                                  //saco el signo de pregunta al comienzo de la consulta
        message:`\nPresione ${'ENTER'.bold.green} para continuar...`
    }
];

const preguntas = [
    {
        type:'list',
        name:'opcion',
        prefix:'-',
        message:'¿Que desea hacer?',
        choices:[
            {
                value: '1',
                name:`${"1.".green} Crear Tarea`
            },
            {
                value: '2',
                name:`${"2.".green} Listar Tareas`
            },
            {
                value: '3',
                name:`${"3.".green} Listar Tareas Completadas`
            },
            {
                value: '4',
                name:`${"4.".green} Listar Tareas Pendientes`
            },
            {
                value: '5',
                name:`${"5.".green} Completar Tarea(s)`
            },
            {
                value: '6',
                name:`${"6.".green} Borar Tarea`
            },
            {
                value: '0',
                name:`${"0.".green} Salir`
            }
        ]
    }
];

const inquirerMenu = async() => {

    console.clear();
    console.log("=======================".green);
    console.log("   Seleccione opción".grey);
    console.log("=======================\n".green);

    const {opcion} = await inquire.prompt(preguntas);
    return opcion;

};

const pausa = async() =>{

    return await inquire.prompt(preguntapausa);

}

module.exports = {
    inquirerMenu,
    pausa
};