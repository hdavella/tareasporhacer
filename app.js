//require('colors');
//const { mostrarMenu, pausa } = require('./helpers/mensajes');
//import colors from 'colors';

import { inquirerMenu, pausa } from './helpers/inquirer.js';


//console.clear();

const main = async () => {

    let opt = '';
    do {

        opt = await inquirerMenu();
        console.log({opt});
        if(opt !== '0') await pausa();

    } while (opt !== '0')
}

main();