// src/app.js

import chalk from 'chalk';

console.log(chalk.green.bold("=== Inicio del sistema ===\n"));

console.time(chalk.yellow('⏱️ ProcesoPrincipal'));

function accesoUsuario(usuario) {
  console.count(chalk.blue(`👤 Acceso de usuario ${usuario}`));
}

// Simulando accesos
accesoUsuario('Kevin');
accesoUsuario('Paulina');
accesoUsuario('Alexa');

// Advertencia
console.warn(chalk.redBright('⚠️  Capacidad de usuarios alcanzando el límite'));

// Error
console.error(chalk.red.bold('❌ Error: No se pudo conectar a la base de datos'));

// Mostrar usuarios como tabla
const usuarios = [
  { nombre: "Kevin", rol: "Admin" },
  { nombre: "Paulina", rol: "User" }
];

console.log(chalk.cyan('\n📋 Lista de usuarios conectados:'));
console.table(usuarios);

console.timeEnd(chalk.yellow('⏱️ ProcesoPrincipal'));

console.log(chalk.green.bold("\n=== Fin del sistema ==="));