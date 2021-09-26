/*PREGUNTA 1:
Supongamos que estamos creando una aplicación de apuestas de fútbol.
Los datos los obtenemos de un servicio web, los cuales son los siguientes:*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
  };
  /*1. Cree un array de jugadores para cada equipo (nombre a las variables como
    'players1' y 'players2')*/

    const players1= ['Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',];
    const players2= ['Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',];
   /* 2. El primer jugador en cualquier conjunto de jugadores es el portero y los demás
    son jugadores de campo. Para el Bayern de Múnich (team 1) cree una variable
    'gk' con el nombre del portero y un array 'fieldPlayers' con los 10 restantes
    jugadores de campo*/
  const gk=players1[0];
  console.log(gk);

  players1.shift();
  console.log(players1);
  const fieldPlayers=players1;
  console.log(fieldPlayers);

   /* 3. Cree una matriz 'allPlayers' que contenga a todos los jugadores de ambos
    equipos (22 jugadores)*/
    players1.unshift("Neuer");
    const allPlayers=[players1, players2];
    console.log(allPlayers);


    /*4. Durante el partido, el Bayern de Múnich (team 1) utilizó 3 jugadores suplentes.
    Así que crea un nuevo array ('players1Final') que contiene todos los jugadores
    originales del equipo1 más 'Thiago', 'Coutinho' y 'Perisic'*/
    const players1Final=players1;
    players1Final.push('Thiago');
    players1Final.push('Coutinho');
    players1Final.push('Perisic');
    console.log(players1Final);

   /* 5. Basado en el objeto game.odds, cree una variable para cada cuota (llamada
    'team1', 'draw' y 'team2')*/
    const team1=game.odds.team1;
    const draw=game.odds.x;
    const team2=game.odds.team2;
    console.log(team1);
    console.log(draw);
    console.log(team2);
    /*6. Cree una función ('printGoals') que reciba un número arbitrario de nombres de
    jugadores (no un array) e imprime cada uno de ellos en la consola, junto con el
    número de goles que marco cada uno (pasar como argumento solo nombres de
    jugadores que hayan marcado al menos un gol, revise los datos del objeto ‘game’
    para encontrar la información que le sirva).*/
    const scor=game.scored;
    const printGoals= (scor)=>{
      return printGoals;
    };
    for(let i=0;i<=game.scored.length;i++)
        console.log(game.scored[i], "marco 1 gol");

    /*7. En las aplicaciones de apuestas es más probable que gane el equipo con la
    cuota más baja. Imprima en la consola que equipo es más probable que gane,
    sin usar una declaración if/else o el operador ternario.*/


    const cuotaBaja=Math.min(team1, team2);
    if(cuotaBaja==team1)
        console.log("Ganó el equipo", game.team1, "con",cuotaBaja);
    else
        console.log("Ganó el equipo", game.team2, "con",cuotaBaja)

    /*8. Use un bucle para poder calcular la cuota (odd) promedio y mostrarlo en la
    consola*/
    const suma=0;
   const promedio=0;
    const cuota=[team1,draw,team2];
    for(let i=0; i<=cuota.length; i++){
      const numero=cuota[i];
       suma+=numero;
    }
   promedio=suma/3;
    console.log(promedio);
    console.log(cuota);

    
    /*9. Cree una función que devuelva un objeto que contenga los nombres de los
    jugadores que anotaron goles, pero como PROPIEDADES, y el número de goles
    como VALORES. Por ejemplo, con los datos obtenidos arriba el objeto se verá
    como:
    {
    Gnarby: 1,
    Hummels: 1,
    Lewandowski: 2
    }
    10. Tome en cuenta los siguientes datos:
    const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow card'],
    ]);
    - Cree una funcion que analice los datos y muestre en la consola un mensaje como
    este: “Un evento ocurrió, en promedio, cada 9 minutos”
    - Recorra la variable “gameEvents” y muestre cada elemento en la consola
    señalando si fue el primer o el segundo tiempo, algo como esto:
    “[PRIMER TIEMPO] 17: GOAL”*/