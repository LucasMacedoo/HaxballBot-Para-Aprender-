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
//Cada evento terá um sendChat para mostrar como funciona

//Ao entrar na sala
sala.onPlayerJoin = function(jogador) {
	sala.sendChat("Mensagem após o evento: JOGADOR ENTROU NA SALA"); //Player BOT da sala digita o que está aqui
	
	//sala.setPlayerAdmin(jogador.id, true); //Para definir administrador na sala
}

//Ao sair da sala
sala.onPlayerLeave = function(jogador) {
	sala.sendChat("Mensagem após o evento: JOGADOR SAIU DA SALA");
}

//Após a vitória de um time
sala.onTeamVictory = function(pontos) {
	sala.sendChat("Mensagem após o evento: TIME VENCEU A PARTIDA");
}

//Ao digitar alguma coisa no chat
sala.onPlayerChat = function(jogador,mensagem) {
	sala.sendChat("Mensagem após o evento: JOGADOR DIGITOU UMA MENSAGEM");
}

//Após o jogador chutar a bola
sala.onPlayerBallKick = function(jogador) {
	sala.sendChat("Mensagem após o evento: JOGADOR CHUTOU UMA BOLA");
}

//Após fazer um gol
sala.onTeamGoal = function(time) {
	sala.sendChat("Mensagem após o evento: TIME MARCOU UM GOL");
}

//Ao apertar o botão de iniciar jogo
sala.onGameStart = function(jogador) {
	sala.sendChat("Mensagem após o evento: PARTIDA FOI INICIALIZADA");
}

//Ao apertar o botão de parar jogo
sala.onGameStop = function(jogador) {
	sala.sendChat("Mensagem após o evento: PARTIDA FOI ENCERRADA");
}

//Ao receber ou retirar administrador
sala.onPlayerAdminChange = function(jogadorTrocou, jogadorDeu) {
	sala.sendChat("Mensagem após o evento: JOGADOR PERDEU OU GANHOU ADMINISTRADOR");
}

//Após a troca de um jogador de time
sala.onPlayerTeamChange = function(jogadorTrocou, jogadorDeu) {
	sala.sendChat("Mensagem após o evento: JOGADOR TROCOU DE TIME");
}

//Após a expulsão de um jogador da sala
sala.onPlayerKicked = function(jogadorKikado, motivo, ban, jogadorDeu) {
	sala.sendChat("Mensagem após o evento: JOGADOR FOI EXPULSO OU BANIDO DA SALA");
}

//Ao detectar um tique de jogo (60x por segundo)
sala.onGameTick = function() {
	sala.sendChat("Mensagem após o evento: TIQUE DE JOGO FOI ENCONTRADO");
}

//Após pausar a partida
sala.onGamePause = function(jogadorDeu) {
	sala.sendChat("Mensagem após o evento: JOGADOR PAUSOU A PARTIDA");
}

//Após despausar a partida
sala.onGameUnpause = function(jogadorDeu) {
	sala.sendChat("Mensagem após o evento: JOGADOR TIROU O PAUSE DA SALA");
}

//Após as posições serem redefinidas depois de um gol 
sala.onPositionsReset = function() {
	sala.sendChat("Mensagem após o evento: POSIÇÕES REDEFINIDAS APÓS UM GOL");
}

//Após o jogador apertar em alguma tecla
sala.onPlayerActivity = function(player) {
	sala.sendChat("Mensagem após o evento: JOGADOR MOSTRA ATIVIDADE");
}

//Ao trocar o estádio
sala.onStadiumChange = function(novoEstadio, jogadorDeu) {
	sala.sendChat("Mensagem após o evento: ESTÁDIO FOI TROCADO");
}

//Ao criar a sala e obter o link
sala.onRoomLink = function(url) {
	sala.sendChat("Mensagem após o evento: LINK FOI DEFINIDO");
}

//Após definir o RateLimit
sala.onKickRateLimitSet = function(min, rate, burst, jogadorDeu) {
	sala.sendChat("Mensagem após o evento: JOGADOR DEFINIU UM KICKRATELIMIT");
}
