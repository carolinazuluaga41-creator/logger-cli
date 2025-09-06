
import chalk from 'chalk';

console.log(chalk.green.bold("=== Inicio del sistema ===\n"));

console.time(chalk.yellow('⏱ ProcesoPrincipal'));

function accesoUsuario(usuario) {
  console.count(chalk.blue(`👤 Acceso de usuario ${usuario}`));
}

accesoUsuario('Carolina');
accesoUsuario('Kevin');
accesoUsuario('Mariana');

console.warn(chalk.redBright('  Capacidad de usuarios alcanzando el límite'));


console.error(chalk.red.bold(' Error: No se pudo conectar a la base de datos'));

const usuarios = [
  { nombre: "Carolina", rol: "Admin" },
  { nombre: "Mariana", rol: "User" }
];

console.log(chalk.cyan('\n Lista de usuarios conectados:'));
console.table(usuarios);

console.timeEnd(chalk.yellow('⏱ ProcesoPrincipal'));

console.log(chalk.green.bold("\n=== Fin del sistema ==="));