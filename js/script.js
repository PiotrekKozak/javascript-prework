let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

if(randomNumber == 1){
    computerMove = 'kamień';
        printMessage('Ruch komputera to: ' + computerMove);
} 
else if(randomNumber == 2){
    computerMove = 'nożyce';
        printMessage('Ruch komputera to: ' + computerMove);
}
else if(randomNumber == 3){
    computerMove = 'papier';
        printMessage('Ruch komputera to: ' + computerMove);
}

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);


if(playerInput == '1'){
    playerMove = 'kamień';
        printMessage('Twój ruch to: ' + playerMove);
} 
else if (playerInput == '2'){
    playerMove = 'nożyce';
        printMessage('Twój ruch to: ' + playerMove);
}
else if (playerInput == '3'){
    playerMove = 'papier';
        printMessage('Twój ruch to: ' + playerMove);
}