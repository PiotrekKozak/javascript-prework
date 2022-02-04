//Computer move

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

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

//Users move

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

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

//Results

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Wygrywasz!');
}
else if (computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Niestety przegrywasz')
}
else if (computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis')
}
else if (computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Wygrywasz!')
}
else if (computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Niestety przegrywasz')
}
else if (computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis')
}
else if (computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Wygrywasz!')
}
else if (computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Niestety przegrywasz')
}
else if (computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis')
}
if (playerMove == 'nieznany ruch'){
    printMessage('Wybierz inną opcję')
}