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
sala.onPlayerJoin = function(jogador) {
	
}

sala.onPlayerLeave = function(jogador) {
	
}

sala.onTeamVictory = function(pontos) {
	
}

sala.onPlayerChat = function(jogador,mensagem) {
	
}

sala.onPlayerBallKick = function(jogador) {
	
}

sala.onTeamGoal = function(time) {
	
}

sala.onGameStart = function(jogador) {
	
}

sala.onGameStop = function(jogador) {
	
}

sala.onPlayerAdminChange = function(jogadorTrocou, jogadorDeu) {
	
}

sala.onPlayerTeamChange = function(jogadorTrocou, jogadorDeu) {
	
}

sala.onPlayerKicked = function(jogadorKikado, motivo, ban, jogadorDeu) {
	
}

sala.onGameTick = function() {
	
}

sala.onGamePause = function(jogadorDeu) {
	
}

sala.onGameUnpause = function(jogadorDeu) {
	
}

sala.onPositionsReset = function() {
	
}

sala.onPlayerActivity = function(player) {
	
}

sala.onStadiumChange = function(novoEstadio, jogadorDeu) {
	
}

sala.onRoomLink = function(url) {
	
}

sala.onKickRateLimitSet = function(min, rate, burst, jogadorDeu) {
	
}