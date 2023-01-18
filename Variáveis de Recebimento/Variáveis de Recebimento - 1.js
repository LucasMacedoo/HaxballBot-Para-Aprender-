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

var linkteste; //Variável para sala.onRoomLink

//Cada função é preciso utilizar o nome da variável de criação da sala!!!
//EVENTOS
//Cada evento terá uma explicação básica para o entendimento das variáveis

//Ao entrar na sala
sala.onPlayerJoin = function(jogador) {
	sala.setPlayerAdmin(jogador.id, true); //Para dar administrador (id do jogador, true para dar administrador, false para perder administrador)
	
	//Variável jogador é basicamente o jogador que entrou na sala, das propriedades PlayerObject
	//Ex:
	sala.sendChat("Jogador: " + jogador.name); //Player BOT digita esta frase no chat do HaxBall
}

//Ao sair da sala
sala.onPlayerLeave = function(jogador) {
	//Variável jogador é basicamente o jogador que saiu da sala, das propriedades PlayerObject
	//Ex:
	sala.sendChat("O " + jogador.name + " saiu da sala!!!"); 
}

//Após a vitória de um time
sala.onTeamVictory = function(pontos) {
	//Variável pontos é de ScoresObject e mostra dados como gols do time a ou b, limites de gols, tempo, limite de tempo 
	//Ex:
	sala.sendChat("Gols time vermelho: " + pontos.red); //Exemplo com time vermelho 
	sala.sendChat("Gols time azul: " + pontos.blue); //Exemplo com time azul
}

//Ao digitar alguma coisa no chat
sala.onPlayerChat = function(jogador,mensagem) {
	//Variável jogador é basicamente o jogador que digitou no chat, das propriedades PlayerObject
	//Variável mensagem é uma string, não faz parte das classes do haxball, mas é uma mensagem que o jogador envia
	//Ex:
	sala.sendChat(jogador.name + " digitou: " + mensagem);
	
	
	if(mensagem == "!url") {  //Se mensagem for igual a !url, então faça:
		sala.sendChat("Link: " + linkteste); //Funcionalidade pegada do sala.onRoomLink
	}
}

//Após o jogador chutar a bola
sala.onPlayerBallKick = function(jogador) {
	//Variável jogador é basicamente o jogador que chutou a bola, das propriedades PlayerObject
	sala.sendChat(jogador.name + " chutou a bola");
}

//Após fazer um gol
sala.onTeamGoal = function(time) {
	//Variável time é o id do time que marcou um gol
	//Funcionará com uma condicional, observe a ideia:
	//SPEC = 0, RED = 1, BLUE = 2
	//Ex:
	if(time == 1) { //Se time for igual a 1 (id do time vermelho) faça:
		sala.sendChat("GOOOOOL do vermelho!!!");
	}
	else if(time == 2) { //Senão se time for igual a 2 (id do time azul) faça:
		sala.sendChat("GOOOOOL do azul!!!");
	}
}

//Ao apertar o botão de iniciar jogo
sala.onGameStart = function(jogador) {
	//Variável jogador é basicamente o jogador que iniciou a partida, das propriedades PlayerObject
	//Ex:
	sala.sendChat(jogador.name + " iniciou a partida");
}

//Ao apertar o botão de parar jogo
sala.onGameStop = function(jogador) {
	//Variável jogador é basicamente o jogador que parou a partida, das propriedades PlayerObject
	//Ex:
	sala.sendChat("Partida encerrada por: " + jogador.name);
}

//Ao receber ou retirar administrador
sala.onPlayerAdminChange = function(jogadorTrocou, jogadorDeu) {
	//Ambas as variáveis (jogadorTrocou e jogadorDeu) são propriedades PlayerObject e basicamente trazem informações do jogador
	//jogadorTrocou se refere ao jogador afetado pelo evento
	//jogadorDeu se refere ao jogador que efetuou o evento 
	//Ex:
	sala.sendChat(jogadorDeu.name + " deu/retirou o administrador de: " + jogadorTrocou.name);
}

//Após a troca de um jogador de time
sala.onPlayerTeamChange = function(jogadorTrocou, jogadorDeu) {
	//Ambas as variáveis (jogadorTrocou e jogadorDeu) são propriedades PlayerObject e basicamente trazem informações do jogador
	//jogadorTrocou se refere ao jogador afetado pelo evento
	//jogadorDeu se refere ao jogador que efetuou o evento 
	//Ex:
	sala.sendChat(jogadorDeu.name + " trocou o jogador " + jogadorTrocou.name + " de time!!!");
}

//Após a expulsão de um jogador da sala
sala.onPlayerKicked = function(jogadorKikado, motivo, ban, jogadorDeu) {
	//Ambas as variáveis (jogadorKikado e jogadorDeu) são propriedades PlayerObject e basicamente trazem informações do jogador
	//jogadorKikado se refere ao jogador afetado pelo evento
	//jogadorDeu se refere ao jogador que efetuou o evento 
	//motivo é uma variável string, funciona quando o usuário digita algo na caixa de texto na hora de expulsar ou banir alguem
	//ban é uma variável boolean, devolve true (caso seja banido) ou false (caso seja só expulso)
	//Ex:
	if(ban == true) { //Se ban for igual a verdadeiro, faça:
		sala.sendChat(jogadorKikado.name + " foi banido por: " + jogadorDeu.name);
		sala.sendChat("Motivo: " + motivo);
	}
	else if(ban == false) { //Senão se ban for igual a falso, faça:
		sala.sendChat(jogadorKikado.name + " foi só expulso por: " + jogadorDeu.name);
		sala.sendChat("Motivo: " + motivo);
	}
}

//Ao detectar um tique de jogo (acontece 60x por segundo)
sala.onGameTick = function() {
	//Não possui nenhuma variável, portanto não terá exemplo
}

//Após pausar a partida
sala.onGamePause = function(jogadorDeu) {
	//Variável jogadorDeu é basicamente o jogador que pausou a partida, das propriedades PlayerObject
	//Ex:
	sala.sendChat("Responsável pelo pause: " + jogadorDeu.name);
}

//Após despausar a partida
sala.onGameUnpause = function(jogadorDeu) {
	//Variável jogadorDeu é basicamente o jogador que despausou a partida, das propriedades PlayerObject
	//Ex:
	sala.sendChat(jogadorDeu.name + " despausou a partida");
}

//Após as posições serem redefinidas depois de um gol 
sala.onPositionsReset = function() {
	//Não possui nenhuma variável, portanto não terá exemplo
}

//Após o jogador apertar em alguma tecla
sala.onPlayerActivity = function(jogador) {
	//Variável jogador é basicamente o jogador que mostrou atividade, das propriedades PlayerObject
	sala.sendChat("Detectamos que o jogador " + jogador.name + " está ativo!!!");
}

//Ao trocar o estádio
sala.onStadiumChange = function(novoEstadio, jogadorDeu) {
	//Variável jogadorDeu é basicamente o jogador responsável por trocar o estádio, das propriedades PlayerObject
	//Já a variável novoEstadio é uma string que captura o nome do Estádio definido
	sala.sendChat(jogadorDeu.name + " escolheu o estádio: " + novoEstadio);
}

//Ao criar a sala e obter o link
sala.onRoomLink = function(url) {
	//URL é uma string onde estará o link da sala, como não é visivel, pois é logo após a criação da sala, será guardada em uma variável global
	//Da variável global, será passada para o sala.onPlayerChat
	//Ex:
	linkteste = url; //linkteste pega o valor de url
	//Para testar, digite !url no chat
}

//Após definir o RateLimit
sala.onKickRateLimitSet = function(min, rate, burst, jogadorDeu) {
	//Variável jogadorDeu é basicamente o jogador responsável por definir o KickRateLimit, das propriedades PlayerObject
	//As variáveis (min, rate e burst) são do tipo int
	//min se refere ao número mínimo de frames lógicos entre dois kicks
	//rate funciona como min, mas permite que os jogadores economizem chutes extras para usá-los depois
	//burst é a quantidade de chutes extras que um jogador pode economizar
	sala.sendChat(jogadorDeu.name + " definiu as configurações:");
	sala.sendChat("MIN: " + min + ", RATE: " + rate + ", BURST: " + burst);
}