let j1op1 = Math.floor((Math.random()*( 10 - 1 + 1 )) + 1 )
let j1op2 = Math.floor((Math.random()*( 10 - 1 + 1 )) + 1 )
let j1op3 = Math.floor((Math.random()*( 10 - 1 + 1 )) + 1 )
let j2op1 = Math.floor((Math.random()*( 10 - 1 + 1 )) + 1 )
let j2op2 = Math.floor((Math.random()*( 10 - 1 + 1 )) + 1 )
let j2op3 = Math.floor((Math.random()*( 10 - 1 + 1 )) + 1 )
let j1op4 = Math.floor((Math.random()*( 10 - 1 + 1 )) + 1 )
let j2op4 = Math.floor((Math.random()*( 10 - 1 + 1 )) + 1 )




 alert ("bienvenido a 21")
 alert ("Ronda 1")
 alert (`turno para el jugador 1, obtienes "${j1op1}" puntos `);
 alert (`turno para el jugador 2, obtienes "${j2op1}" puntos`);
 
alert ("Ronda 2")
alert (`turno para el jugador 1, obtienes "${j1op2}" puntos`);
alert (`turno para el jugador 2, obtienes "${j2op2}" puntos`);
 
let acumuladoj1 = (`${j1op1 + j1op2}`);
let acumuladoj2 = (`${j2op1 + j2op2}`);

alert (` jugador "1" tienes ${acumuladoj1} puntos`);
alert (`jugador "2" tienes ${acumuladoj2} puntos`);
let plantarse1 = prompt(`jugador 1, ¿deseas plantarte? \n1 Si \n2 No`);

switch (plantarse1) {
    case "1": j1op3 = 0 
        
        break;
        case "2" : alert (`jugador 1, obtienes ${j1op3}`);
        break;
        default: alert ("Valor no valido")
        break;
}
 let plantarse2 = prompt(`jugador 2, ¿deseas plantarte? \n1 si \n2. no `);
 switch (plantarse2) {
  case "1": j2op3 = 0 
    
    break;
  case "2": alert (`jugador 2, obtienes ${j2op3}`);
   break;
  default: alert ("Valor no valido")
    break;
 }

 alert (" Ronda 3 ")

 let acumuladoR3j1 = (`${j1op1 + j1op2 + j1op3}`)
 let acumuladoR3j2 = (`${j2op1 + j2op2 + j2op3}`)

 alert (`jugador "1" tienes ${acumuladoR3j1} puntos hasta ahora`)
 alert (`jugador "2" tienes ${acumuladoR3j2} puntos hasta ahora`)


 let plantarse3 = prompt(`jugador "1", ¿deseas plantarte? \n1 si \n2 no`)
 switch (plantarse3) {
  case "1": j1op4 = 0
    
    break;
  case "2": alert (`jugador 1 obtienes ${j1op4}`)
 
  default: 
    break;
 }
  let plantarse4 = prompt (`jugador 2, ¿deseas plantarte? \n1 si \n2 no`)
 
switch (plantarse4) {
  case "1": j2op4 = 0 
    
    break;
    case "2": alert (`jugador 2, obtienes ${j2op4}`)
    break;
  
   default: 
    break;
}

 let acumuladoTotalj1 = (`${j1op1 + j1op2 + j1op3 + j1op4}`);
 let acumuladoTotalj2 = (`${j2op1 + j2op2 + j2op3 + j2op4}`);

 alert (`jugador 1, su acumulado total es ${acumuladoTotalj1}`);
 alert (`jugador 2, su acumulado total es ${acumuladoTotalj2}`);


 if (acumuladoTotalj1 > acumuladoTotalj2 && acumuladoTotalj1 <= 21 ){
  alert (`jugador "1" Ganaste con ${acumuladoTotalj1} puntos`)
 }else if (acumuladoTotalj2 > acumuladoTotalj1 && acumuladoTotalj2 <= 21 ){
  alert (`jugador "2" Ganaste con ${acumuladoTotalj2} puntos`)
 }else if (acumuladoTotalj1 == acumuladoTotalj2){
  alert (`es un empate, volver a jugar`)
 } else {
  alert (`los dos han sobrepasado el numero de puntos, volver a jugar`)
 }
 
