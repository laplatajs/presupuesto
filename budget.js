/**
 * La Plata JS Presupuesto.
 */
var colors = require( 'colors' );

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red',
  ingreso: ['green', 'bold'],
  egreso: ['red', 'bold'],
  evento: ['yellow', 'underline']
});






console.log( 'Meetup #1 | 16/5 | Synergia3'.evento );
console.log( 'Ad honorem | volantes + flyers'.ingreso );
console.log( 'Meetup #2 | 4/7  | Facultad de Informática'.evento );
console.log( 'Ad honorem | volantes + flyers'.ingreso );
console.log( '$400 | sponsor @devsar_team'.ingreso );
console.log( '$218 | 2 cajas de alfajores jorgito'.egreso );
