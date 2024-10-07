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
	//sala.sendChat precisa de uma string, e opcionalmente um id para especificar quem deve receber, null ou undefined todo mundo recebe
	sala.sendChat("Olá, seja bem vindo a esta sala"); //Player BOT digita na sala o que está aqui
	
	//sala.setPlayerAdmin precisa de um id de um jogador e um true (para dar admin) ou false (para tirar admin)
	sala.setPlayerAdmin(jogador.id, true); //Dá ou tira administrador para o id do usuário em questão
	
	//sala.sendAnnouncement precisa de uma string, um id de quem deve receber (null ou undefined todo mundo recebe), uma cor começando por 0x ,
	//um estilo e um som
	sala.sendAnnouncement("Vamos jogar?", null, 0x00BFFF, "bold", 1); //Uma mensagem personalizada é colocada no chat
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
		//sala.setPlayerTeam precisa de um id de algum jogador e de um id de time (0: spec, 1: red, 2: blue)
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
		//sala.kickPlayer precisa de um id de algum jogador, uma string que é o motivo e true (para banir) ou false (só kick normal)
		sala.kickPlayer(jogador.id, "kick", false); //Expulsa o jogador da sala, neste caso ele poderá voltar
	}
	else if(mensagem == "!ban") {
		sala.kickPlayer(jogador.id, "Banido", true); //Expulsa o jogador da sala, neste caso ele não pode voltar
	}
	
	
	//Utilização do setScoreLimit
	if(mensagem == "!score") {
		//sala.setScoreLimit precisa somente de um número inteiro para representar a quantidade de gols limite de uma partida
		sala.setScoreLimit(6); //Muda o placar limite da partida, 6 é um número qualquer inserido
	}
	
	
	//Utilização do setTimeLimit
	if(mensagem == "!time") {
		//sala.setTimeLimit precisa somente de um número inteiro para representar o tempo limite de uma partida
		sala.setTimeLimit(6); //Muda o tempo limite da partida, 6 é um número qualquer inserido
	}
	
	
	//Utilização do setTeamsLock
	//OBS: Administradores podem modificar as equipes da mesma forma, isto vale para usuários comuns
	if(mensagem == "!bloquear") {
		//sala.setTeamsLock precisa somente de um true (para bloquear mudança) ou false (para permitir mudança)
		sala.setTeamsLock(true); //Modifica a configuração de mudança de equipe, neste caso, proibe mudanças
	}
	else if(mensagem == "!desbloquear") {
		sala.setTeamsLock(false); //Modifica a configuração de mudança de equipe, neste caso, permite mudanças
	}
	
	
	//Utilização do startGame
	if(mensagem == "!iniciar") {
		//sala.startGame não possui nenhum atributo
		sala.startGame(); //Inicia a partida (caso ainda não tenha iniciado)
	}
	
	
	//Utilização do stopGame
	if(mensagem == "!finalizar") {
		//sala.stopGame não possui nenhum atributo
		sala.stopGame(); //Finaliza a partida (caso ainda não esteja finalizado)
	}
	
	
	//Utilização do pauseGame
	//OBS: Só vale para partidas inicializadas
	if(mensagem == "!pausar") {
		//sala.pauseGame precisa somente de um true (para pausar) ou false (para despausar)
		sala.pauseGame(true); //Modifica o estado de pausa da partida, neste caso, jogo pausado
	}
	else if(mensagem == "!despausar") {
		sala.pauseGame(false); //Modifica o estado de pausa da partida, neste caso, jogo despausado
	}
	
	
	//Utilização do clearBan
	//OBS: para testar, utilize 2 usuários, aquele que for banido, você usa o ID dele para desbanir
	if(mensagem == "!desban") {
		//sala.clearBan precisa somente de um número inteiro que representa o ID do jogador
		sala.clearBan(1); //Desbane especificamente um usuário pelo id dele, a utilização do número 1 é só um exemplo
	}
	
	
	//Utilização do clearBans
	if(mensagem == "!desbanAll") {
		//sala.clearBans não possui nenhum atributo
		sala.clearBans(); //Desbane todos os usuários que estão banidos da sala
	}
	
	
	//Utilização do setDefaultStadium
	//ESTÁDIOS DEFAULT: Classic, Easy, Small, Big, Rounded, Hockey, Big Hockey, Big Easy, Big Rounded e Huge
	if(mensagem == "!trocarDefault") {
		//sala.setDefaultStadium precisa somente de uma string que representa o nome do estádio default
		sala.setDefaultStadium("Hockey"); //Insere um estádio default
	}
	
	
	//Utilização do setCustomStadium
	if(mensagem == "!trocarCustom") {
		//sala.setCustomStadium precisa somente de uma variável ou string que representa o estádio customizado
		//veja abaixo um exemplo de uma string de um pequeno estádio customizado
		//você encontra esses arquivos no haxmaps ou poderá criar um usando haxpuck
		sala.setCustomStadium(estadio); //Insere um estádio customizado
	}
	
	
	//Utilização do setPassword
	if(mensagem == "!senha") {
		//sala.setPassword precisa somente de uma string para representar a senha, caso seja null, não terá senha
		sala.setPassword("teste123"); //Insere uma senha na sala
	}
	
	
	//Utilização do setRequireRecaptcha
	if(mensagem == "!abrirRecaptcha") {
		//sala.setRequireRecaptcha precisa somente de true (para ativar entrada via recaptcha) ou false (para remover recaptcha)
		sala.setRequireRecaptcha(true); //Insere uma configuração de recaptcha, no caso, os próximos usuários terão que usar recaptcha
	}
	else if(mensagem == "!fecharRecaptcha") {
		sala.setRequireRecaptcha(false); //Insere uma configuração de recaptcha, no caso, os próximos usuários NÃO terão que usar recaptcha
	}
	
	
	//Utilização do setPlayerAvatar
	if(mensagem == "!avatar") {
		//sala.setPlayerAvatar precisa de um ID de algum jogador e de uma string de até 2 caracteres para representar o avatar
		sala.setPlayerAvatar(jogador.id, "🍉"); //Insere um avatar no jogador especificado
	}
	
	
	//Utilização do setTeamColors
	if(mensagem == "!color") {
		//sala.setTeamColors precisa de ID de Time, angulo em formato float, cor do texto começando por 0x e até 3 cores dentro de []
		//você encontra modelos no haxcolors, verifique os dados e insira os valores neste comando
		sala.setTeamColors(1, 45, 0x00FFFF, [0x006400, 0x8B4513, 0x800080]); //Modifica o uniforme do time especificado
	}
	
	
	//Utilização do startRecording
	if(mensagem == "!gravar") {
		//sala.startRecording não possui nenhum atributo
		gravando = sala.startRecording(); //Inicia a gravação de uma partida do haxball
		sala.sendChat("Estamos gravando a partida!!!");
	}
	
	
	//Utilização do stopRecording
	if(mensagem == "!desgravar") {
		//sala.stopRecording não possui nenhum atributo
		gravacao = sala.stopRecording(); //Para a gravação de uma partida do haxball
		
		if(gravacao) { //Verificando se a partida foi gravada
			sala.sendChat("Partida gravada com sucesso")
		}
	}
	
	
	//Utilização do setKickRateLimit
	if(mensagem == "!mudarRate") {
		//sala.setKickRateLimit precisa de um número mínimo entre chutes (em segundos),
		//um número maximo de tentativas de chute e um número de quantidade de chutes extras
		sala.setKickRateLimit(100, 100, 0); //Modifica as configurações de taxa de chute
	}
	
	
	//Utilização do getPlayer
	if(mensagem == "!nomeJogador") {
		//sala.getPlayer precisa de um ID que representa o jogador específico
		jogador = sala.getPlayer(0); //Captura os dados do jogador de acordo com o ID dele
		
		sala.sendChat("O nome do jogador é: " + jogador.name);
	}
	
	
	//Utilização do getPlayerList
	if(mensagem == "!listaJogadores") {
		//sala.getPlayerList não possui nenhum atributo
		jogadores = sala.getPlayerList(); //Captura e insere num array todos os jogadores presentes na sala
		
		//Ilustrando os nomes desta lista
		for(var i=0; i<jogadores.length; i++) {
			sala.sendChat("Nome: " + jogadores[i].name);
		}
	}
	
	
	//Utilização do getDiscCount
	//OBS: Só vale quando a partida tiver sido inicializada
	if(mensagem == "!contarDiscos") {
		//sala.getDiscCount não possui nenhum atributo
		discos = sala.getDiscCount(); //Captura a quantidade de discos dentro de campo, incluindo o jogador
		sala.sendChat("No campo podemos ver " + discos + " discos");
	}
	
	
	//Utilização do getPlayerDiscProperties
	//OBS: Só vale quando a partida tiver sido inicializada
	if(mensagem == "!jogadorDisco") {
		//sala.getPlayerDiscProperties precisa somente do ID correspondente a um jogador
		prop = sala.getPlayerDiscProperties(jogador.id); //Captura todas as propriedades do disco do jogador específico
		sala.sendChat("Raio de disco do jogador: " + prop.radius);
	}
	
	
	//Utlização do setPlayerDiscProperties
	//OBS: Só vale quando a partida tiver sido inicializada
	if(mensagem == "!mudarJogador") {
		//sala.setPlayerDiscProperties precisa de um ID correspondentea um jogador e um/vários atributo(s) para mudar
		sala.setPlayerDiscProperties(jogador.id, {radius: 6}); //Modifica algum(ns) atributos do jogador específico
	}
	
	
	//Utilização do getDiscProperties
	//OBS: Só vale quando a partida tiver sido inicializada
	if(mensagem == "!infoDisco") {
		//sala.getDiscProperties precisa somente de um inteiro correspondente ao index do disco
		info = sala.getDiscProperties(0); //Captura todas as propriedades do disco escolhido
		sala.sendChat("Raio de disco do objeto index 0: " + info.radius);
	}
	
	
	//Utilização do setDiscProperties
	//OBS: Só vale quando a partida tiver sido inicializada
	if(mensagem == "!mudarDisco") {
		//sala.setDiscProperties precisa de um inteiro que correponde ao index do disco e um/vários atributo(s) 
		//que você desejar mudar
		sala.setDiscProperties(0, {radius: 20}); //Modifica algum(ns) atributos do disco escolhido
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

//Somente para exemplificar a troca de um estádio customizado
var estadio = `
{

	"name" : "Small Futsal from HaxMaps",

	"width" : 420,

	"height" : 200,

	"spawnDistance" : 130,

	"bg" : { "type" : "hockey", "width" : 320, "height" : 130, "kickOffRadius" : 70, "cornerRadius" : 0 },

	"vertexes" : [
		/* 0 */ { "x" : -320, "y" : 130, "trait" : "ballArea" },
		/* 1 */ { "x" : -320, "y" : 55, "trait" : "ballArea" },
		/* 2 */ { "x" : -320, "y" : -55, "trait" : "ballArea" },
		/* 3 */ { "x" : -320, "y" : -130, "trait" : "ballArea" },
		/* 4 */ { "x" : 320, "y" : 130, "trait" : "ballArea" },
		/* 5 */ { "x" : 320, "y" : 55, "trait" : "ballArea" },
		/* 6 */ { "x" : 320, "y" : -55, "trait" : "ballArea" },
		/* 7 */ { "x" : 320, "y" : -130, "trait" : "ballArea" },
		
		/* 8 */ { "x" : 0, "y" : 200, "trait" : "kickOffBarrier" },
		/* 9 */ { "x" : 0, "y" : 70, "trait" : "kickOffBarrier" },
		/* 10 */ { "x" : 0, "y" : -70, "trait" : "kickOffBarrier" },
		/* 11 */ { "x" : 0, "y" : -200, "trait" : "kickOffBarrier" },
		
		/* 12 */ { "x" : -330, "y" : -55, "trait" : "goalNet" },
		/* 13 */ { "x" : -350, "y" : -35, "trait" : "goalNet" },
		/* 14 */ { "x" : -350, "y" : 35, "trait" : "goalNet" },
		/* 15 */ { "x" : -330, "y" : 55, "trait" : "goalNet" },
		/* 16 */ { "x" : 330, "y" : -55, "trait" : "goalNet" },
		/* 17 */ { "x" : 350, "y" : -35, "trait" : "goalNet" },
		/* 18 */ { "x" : 350, "y" : 35, "trait" : "goalNet" },
		/* 19 */ { "x" : 330, "y" : 55, "trait" : "goalNet" }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "trait" : "ballArea" },
		{ "v0" : 2, "v1" : 3, "trait" : "ballArea" },
		{ "v0" : 4, "v1" : 5, "trait" : "ballArea" },
		{ "v0" : 6, "v1" : 7, "trait" : "ballArea" },
		
		{ "v0" : 12, "v1" : 13, "trait" : "goalNet", "curve" : -90 },
		{ "v0" : 13, "v1" : 14, "trait" : "goalNet" },
		{ "v0" : 14, "v1" : 15, "trait" : "goalNet", "curve" : -90 },
		{ "v0" : 16, "v1" : 17, "trait" : "goalNet", "curve" : 90 },
		{ "v0" : 17, "v1" : 18, "trait" : "goalNet" },
		{ "v0" : 18, "v1" : 19, "trait" : "goalNet", "curve" : 90 },
		
		{ "v0" : 8, "v1" : 9, "trait" : "kickOffBarrier" },
		{ "v0" : 9, "v1" : 10, "trait" : "kickOffBarrier", "curve" : 180, "cGroup" : ["blueKO" ] },
		{ "v0" : 9, "v1" : 10, "trait" : "kickOffBarrier", "curve" : -180, "cGroup" : ["redKO" ] },
		{ "v0" : 10, "v1" : 11, "trait" : "kickOffBarrier" }

	],

	"goals" : [
		{ "p0" : [-320,55 ], "p1" : [-320,-55 ], "team" : "red" },
		{ "p0" : [320,55 ], "p1" : [320,-55 ], "team" : "blue" }

	],

	"discs" : [
		{ "pos" : [-320,55 ], "trait" : "goalPost", "color" : "FFCCCC" },
		{ "pos" : [-320,-55 ], "trait" : "goalPost", "color" : "FFCCCC" },
		{ "pos" : [320,55 ], "trait" : "goalPost", "color" : "CCCCFF" },
		{ "pos" : [320,-55 ], "trait" : "goalPost", "color" : "CCCCFF" }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -130, "trait" : "ballArea" },
		{ "normal" : [0,-1 ], "dist" : -130, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -200, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -200, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -420, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -420, "bCoef" : 0.1 }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }

	},

	"playerPhysics" : {
		"kickStrength" : 7,
		"kickingDamping" : 0.96,
		"acceleration" : 0.1

	},

	"ballPhysics" : {
		"radius" : 10,
		"invMass" : 1,
		"damping" : 0.96,
		"color" : "FFFFFF",
		"cMask" : [ "all"
		],
		"cGroup" : [ "ball"
		]

	}
}
`
