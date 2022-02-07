
//Computer move
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);


//Users move
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');


console.log('Gracz wpisał: ' + playerInput);


let argPlayerMove = getMoveName(playerInput);

//Results

displayResult(argComputerMove, argPlayerMove)
