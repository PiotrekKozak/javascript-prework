function playGame(playerInput) {
	clearMessages();

	function printMessage(msg){
		let div = document.createElement('div');
		div.innerHTML = msg;
		document.getElementById('messages').appendChild(div);
	}

	function clearMessages(){
		document.getElementById('messages').innerHTML = '';
	}

	function getMoveName(argMoveId){
		if(argMoveId == 1){
		return 'kamień';
		} 

		else if(argMoveId == 2){
			return 'nożyce';
		}

		else if(argMoveId == 3){
			return 'papier'
		}

		else {
		printMessage('Nie znam ruchu o id ' + argMoveId + '.');
		return 'nieznany ruch';
		}
	}

	function displayResult(argComputerMove, argPlayerMove){
		printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

		if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
			printMessage('Wygrywasz!');
		}

		else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
			printMessage('Niestety przegrywasz')
		}

		else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
			printMessage('Remis')
		}

		else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
			printMessage('Wygrywasz!')
		}

		else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
			printMessage('Niestety przegrywasz')
		}

		else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
			printMessage('Remis')
		}

		else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
			printMessage('Wygrywasz!')
		}

		else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
			printMessage('Niestety przegrywasz')
		}

		else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
			printMessage('Remis')
		}
		
		if (argPlayerMove == 'nieznany ruch'){
			printMessage('Wybierz inną opcję')
		}
	}

		//Computers move

        let randomNumber = Math.floor(Math.random() * 3 + 1);

        console.log('Wylosowana liczba to: ' + randomNumber);
    
        let argComputerMove = getMoveName(randomNumber);
    
		//Players move

        console.log('Gracz wpisał: ' + playerInput);
       
        let argPlayerMove = getMoveName(playerInput);
    
        displayResult(argComputerMove, argPlayerMove)

}
