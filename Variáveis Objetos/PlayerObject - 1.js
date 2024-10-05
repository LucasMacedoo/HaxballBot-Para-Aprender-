//Código feito para o usuário entender o objeto PlayerObject.

//Inicialmente vamos criar um HBInit para a criação da sala

var sala = HBInit ({
	roomName: "Primeira Sala", 
	playerName: "BOT Teste", 
	maxPlayers: 15,  
	public: false, 
	geo: {code: 'br', lat: -46.4515, lon: -23.5344}
});


//Cada função é preciso utilizar o nome da variável de criação da sala!!!
//EVENTOS (utilizaremos o onPlayerJoin e o onPlayerChat)

//Ao entrar na sala
sala.onPlayerJoin = function(jogador) {
	//Daremos adm para possibilitar voce fazer os processos
	sala.setPlayerAdmin(jogador.id, true); //True pra dar adm e False para tirar adm
	
	
	//Utilizaremos este evento para mostrar o objeto 
	//Um sendChat sera utilizado para visualizar no chat
	//OBS: alguns objetos podem não ser vistos em outros eventos
	sala.sendChat("ID do Jogador: " + jogador.id);
	sala.sendChat("Nick do Jogador: " + jogador.name);
	sala.sendChat("Time do Jogador: " + jogador.team); //0 para SPEC, 1 para RED, 2 para BLUE
	sala.sendChat("Admin do Jogador: " + jogador.admin); //True para jogador ter adm, false para jogador sem adm 
	sala.sendChat("Auth do Jogador: " + jogador.auth);
	sala.sendChat("Conexão do Jogador: " + jogador.conn);
}

//Ao sair da sala
sala.onPlayerLeave = function(jogador) {
	
}

//Após a vitória de um time
sala.onTeamVictory = function(pontos) {
	
}

//Ao digitar alguma coisa no chat
sala.onPlayerChat = function(jogador,mensagem) {
	//Inicie a partida e digite este comando, sem o jogo estar iniciado, este comando irá dar erro
	if(mensagem == "!position") {
		sala.sendChat("Posição X do Jogador: " + jogador.position.x); //Position também é um objeto, então tem 2 opções: x ou y
		sala.sendChat("Posição Y do Jogador: " + jogador.position.y);
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
