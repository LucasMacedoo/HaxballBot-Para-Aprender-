//Inicialmente vamos criar um HBInit para a criação da sala

var sala = HBInit ({
	roomName: "Primeira Sala", 
	playerName: "BOT Teste", 
	password: "Haxball", 
	maxPlayers: 15,  
	public: true, 
	geo: {code: 'br', lat: -46.4515, lon: -23.5344}, 
	token: "seu token aqui", 
	noPlayer: false
});


//Cada função é preciso utilizar o nome da variável de criação da sala!!!
//EVENTOS

//Ao entrar na sala
sala.onPlayerJoin = function(jogador) {
	sala.sendChat("Olá, seja bem vindo a esta sala"); //Player BOT digita na sala o que está aqui
	sala.setPlayerAdmin(jogador.id, true); //Dá ou tira administrador para o id do usuário em questão
}

//Ao sair da sala
sala.onPlayerLeave = function(jogador) {
	
}

//Após a vitória de um time
sala.onTeamVictory = function(pontos) {
	
}

//Ao digitar alguma coisa no chat
sala.onPlayerChat = function(jogador,mensagem) {
	//Utilização do setPlayerTeam
	if(mensagem == "!azul") {
		sala.setPlayerTeam(jogador.id, 2); //Modifica o jogador de time, no caso, vai pra equipe azul
	} 
	else if(mensagem == "!vermelho") {
		sala.setPlayerTeam(jogador.id, 1); //Modifica o jogador de time, no caso, vai pra equipe vermelha
	}
	else if(mensagem == "!spec") {
		sala.setPlayerTeam(jogador.id, 0); //Modifica o jogador de time, no caso, vai pra equipe spec
	}
	
	//Utilização do kickPlayer
	if(mensagem == "!kick") {
		sala.kickPlayer(jogador.id, "kick", false); //Expulsa o jogador da sala, neste caso ele poderá voltar
	}
	else if(mensagem == "!ban") {
		sala.kickPlayer(jogador.id, "Banido", true); //Expulsa o jogador da sala, neste caso ele não pode voltar
	}
	
	//Utilização do setScoreLimit
	if(mensagem == "!score") {
		sala.setScoreLimit(6); //Muda o placar limite da partida, 6 é um número qualquer inserido
	}
	
	//Utilização do setTimeLimit
	if(mensagem == "!time") {
		sala.setTimeLimit(6); //Muda o tempo limite da partida, 6 é um número qualquer inserido
	}
	
	//Utilização do setTeamsLock
	//OBS: Administradores podem modificar as equipes da mesma forma, isto vale para usuários comuns
	if(mensagem == "!bloquear") {
		sala.setTeamsLock(true); //Modifica a configuração de mudança de equipe, neste caso, proibe mudanças
	}
	else if(mensagem == "!desbloquear") {
		sala.setTeamsLock(false); //Modifica a configuração de mudança de equipe, neste caso, permite mudanças
	}
	
	//Utilização do startGame
	if(mensagem == "!iniciar") {
		sala.startGame(); //Inicia a partida (caso ainda não tenha iniciado)
	}
	
	//Utilização do stopGame
	if(mensagem == "!finalizar") {
		sala.stopGame(); //Finaliza a partida (caso ainda não esteja finalizado)
	}
}

//Após o jogador chutar a bola
sala.onPlayerBallKick = function(jogador) {
	
}

//Após fazer um gol
sala.onTeamGoal = function(time) {
	
}

//Ao apertar o botão de iniciar jogo
sala.onGameStart = function(jogador) {
	
}

//Ao apertar o botão de parar jogo
sala.onGameStop = function(jogador) {
	
}

//Ao receber ou retirar administrador
sala.onPlayerAdminChange = function(jogadorTrocou, jogadorDeu) {
	
}

//Após a troca de um jogador de time
sala.onPlayerTeamChange = function(jogadorTrocou, jogadorDeu) {
	
}

//Após a expulsão de um jogador da sala
sala.onPlayerKicked = function(jogadorKikado, motivo, ban, jogadorDeu) {
	
}

//Ao detectar um tique de jogo (acontece 60x por segundo)
sala.onGameTick = function() {
	
}

//Após pausar a partida
sala.onGamePause = function(jogadorDeu) {
	
}

//Após despausar a partida
sala.onGameUnpause = function(jogadorDeu) {
	
}

//Após as posições serem redefinidas depois de um gol 
sala.onPositionsReset = function() {
	
}

//Após o jogador apertar em alguma tecla
sala.onPlayerActivity = function(jogador) {
	
}

//Ao trocar o estádio
sala.onStadiumChange = function(novoEstadio, jogadorDeu) {
	
}

//Ao criar a sala e obter o link
sala.onRoomLink = function(url) {
	
}

//Após definir o RateLimit
sala.onKickRateLimitSet = function(min, rate, burst, jogadorDeu) {
	
}

//Após alterar as configurações de bloqueio de equipe
sala.onTeamsLockChange = function(bloqueio, jogadorDeu) {
	
}
