//Código feito para o usuário entender o objeto ScoresObject

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
}

//Ao sair da sala
sala.onPlayerLeave = function(jogador) {
	
}

//Após a vitória de um time
sala.onTeamVictory = function(pontos) {
	//Utilizaremos este evento para mostrar o objeto 
	//Um sendChat sera utilizado para visualizar no chat 
	sala.sendChat("Gols RED: " + pontos.red); //Mostra quantidade de gols do time vermelho
	sala.sendChat("Gols BLUE: " + pontos.blue); //Mostra quantidade de gols do time azul
	sala.sendChat("Tempo: " + pontos.time); //Mostra o tempo jogado
	sala.sendChat("Limite de Gols: " + pontos.scoreLimit); //Mostra a quantidade limite de gols 
	sala.sendChat("Limite de Tempo: " + pontos.timeLimit); //Mostra o tempo limite
}

//Ao digitar alguma coisa no chat
sala.onPlayerChat = function(jogador,mensagem) {
	
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