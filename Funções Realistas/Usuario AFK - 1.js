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

//O objetivo a função é fazer com que o usuário fique inativo no SPEC sem que possa ser movido pra outra equipe
var listaAFK = new Set(); //Criando uma coleção

function statusAFK(id) {
	//Primeiro verifica se o usuário ja consta na lista de afks
	if(listaAFK.has(id)) {
		listaAFK.delete(id);//Caso verdadeiro, ele será removido da lista e ficará disponível para jogar
	}
	else {
		listaAFK.add(id); //Caso falso, ele entrará na lista e ficará impedido de trocar de time
		sala.setPlayerTeam(id, 0); //Indo para o spec caso ele esteja em alguma equipe
	}
}

//Cada função é preciso utilizar o nome da variável de criação da sala!!!
//EVENTOS

//Ao entrar na sala
sala.onPlayerJoin = function(jogador) {
	
}

//Ao sair da sala
sala.onPlayerLeave = function(jogador) {
	
}

//Após a vitória de um time
sala.onTeamVictory = function(pontos) {
	
}

//Ao digitar alguma coisa no chat
sala.onPlayerChat = function(jogador,mensagem) {
	//Usuário deve utilizar o comando pra ativar a função
	if(mensagem == "!afk") {
		statusAFK(jogador.id);
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
	//Proibe o jogador de ir para alguma equipe caso ele esteja AFK
	if(listaAFK.has(jogadorTrocou.id)) {
		sala.setPlayerTeam(jogadorTrocou.id, 0);
	}
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
