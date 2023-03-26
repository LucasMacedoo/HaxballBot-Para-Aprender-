//Inicialmente vamos criar um HBInit para a criação da sala

var sala = HBInit ({
	roomName: "BOT - Administrador", 
	playerName: "BOT Teste", 
	maxPlayers: 15,  
	public: false, 
	geo: {code: 'br', lat: -46.4515, lon: -23.5344}, 
	token: "seu token aqui", 
	noPlayer: false
});

//O objetivo da função é permitir que apenas 1 usuário seja ADM na sala.
function darAdministrador(jogador) {
	let jogadores = sala.getPlayerList(); //Lista para pegar um array de jogadores que estão na sala
	let administrador = 0; //Contador (util para verificar quantos administradores a sala possui)
	
	for(var i=0; i<jogadores.length; i++) { //For para percorrer a lista de jogadores
		if(jogadores[i].admin) { //Se jogador tiver ADM, faça:
			administrador++; //Contador vai somando +1
		}
	}
	
	if(administrador < 2) { //Coloque 1 caso não tenha o bot fisicamente na sala
		sala.setPlayerAdmin(jogadores[1].id, true); //Dá o administrador para o primeiro da lista
	}
}


//Cada função é preciso utilizar o nome da variável de criação da sala!!!
//EVENTOS

//Ao entrar na sala
sala.onPlayerJoin = function(jogador) {
	darAdministrador(jogador); 
}

//Ao sair da sala
sala.onPlayerLeave = function(jogador) {
	darAdministrador(jogador); //Caso o adm saia da sala, esta função é util para determinar um novo adm
}

//Após a vitória de um time
sala.onTeamVictory = function(pontos) {
	
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
