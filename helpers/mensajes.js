require("colors");

const mostrarMenu = () => {
  console.clear();
  console.log("=======================".green);
  console.log("   Seleccione opción".grey);
  console.log("=======================\n".green);

  console.log(`${"1.".green} Crear Tarea`);
  console.log(`${"2.".green} Listar Tareas`);
  console.log(`${"3.".green} Listar Tareas Completadas`);
  console.log(`${"4.".green} Listar Tareas Pendientes`);
  console.log(`${"5.".green} Completar Tarea(s)`);
  console.log(`${"6.".green} Borar Tarea`);
  console.log(`${"0.".green} Salir\n`);

  const ReadLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  ReadLine.question(`Ingrese una opción: `, (opt) => {
    console.log({ opt });
    ReadLine.close();
  });
};

const pausa = () => {
  const ReadLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  ReadLine.question(`presione ${'ENTER'.bold.green} para continuar...`, (opt) => {
    ReadLine.close();
  });
};

module.exports = {
  mostrarMenu,
  pausa
};
