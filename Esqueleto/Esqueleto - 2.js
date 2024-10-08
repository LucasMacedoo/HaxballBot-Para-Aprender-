//Inicialmente vamos criar um HBInit para a criação da sala

//Variável específica para sala do Haxball 
const criador = window.HBInit

//Fazendo uma classe chamada Sala
class Sala {
	constructor(configuracoes) {
		this.config = configuracoes
		this.sala
	}
	
	roominitial() {
		this.sala = criador(this.config)
		
		
		//Cada função é preciso utilizar o nome da variável de criação da sala!!!
		//EVENTOS
		
		//Ao entrar na sala
		this.sala.onPlayerJoin = (jogador) => {
			
		}
		
		//Ao sair da sala
		this.sala.onPlayerLeave = (jogador) => {
			
		}

		//Após a vitória de um time
		this.sala.onTeamVictory = (pontos) => {
			
		}

		//Ao digitar alguma coisa no chat
		this.sala.onPlayerChat = (jogador,mensagem) => {
			
		}

		//Após o jogador chutar a bola
		this.sala.onPlayerBallKick = (jogador) => {
			
		}

		//Após fazer um gol
		this.sala.onTeamGoal = (time) => {
			
		}

		//Ao apertar o botão de iniciar jogo
		this.sala.onGameStart = (jogador) => {
			
		}

		//Ao apertar o botão de parar jogo
		this.sala.onGameStop = (jogador) => {
			
		}

		//Ao receber ou retirar administrador
		this.sala.onPlayerAdminChange = (jogadorTrocou, jogadorDeu) => {
			
		}

		//Após a troca de um jogador de time
		this.sala.onPlayerTeamChange = (jogadorTrocou, jogadorDeu) => {
			
		}

		//Após a expulsão de um jogador da sala
		this.sala.onPlayerKicked = (jogadorKikado, motivo, ban, jogadorDeu) => {
			
		}

		//Ao detectar um tique de jogo (acontece 60x por segundo)
		this.sala.onGameTick = () => {
			
		}

		//Após pausar a partida
		this.sala.onGamePause = (jogadorDeu) => {
			
		}

		//Após despausar a partida
		this.sala.onGameUnpause = (jogadorDeu) => {
			
		}

		//Após as posições serem redefinidas depois de um gol 
		this.sala.onPositionsReset = () => {
			
		}

		//Após o jogador apertar em alguma tecla
		this.sala.onPlayerActivity = (jogador) => {
			
		}

		//Ao trocar o estádio
		this.sala.onStadiumChange = (novoEstadio, jogadorDeu) => {
			
		}

		//Ao criar a sala e obter o link
		this.sala.onRoomLink = (url) => {
			
		}

		//Após definir o RateLimit
		this.sala.onKickRateLimitSet = (min, rate, burst, jogadorDeu) => {
			
		}

		//Após alterar as configurações de bloqueio de equipe
		this.sala.onTeamsLockChange = (bloqueio, jogadorDeu) => {
			
		}
	}
}

//Inserindo as informações
const criarSala = new Sala({
	roomName: "Primeira Sala", //Nome da Sala
	playerName: "BOT Teste", //Nome do BOT que aparecerá na lista de jogadores
	password: "Haxball", //Senha da sala
	maxPlayers: 15, //Número máximo de jogadores 
	public: true, //True para sala pública, false para sala privada 
	geo: {code: 'br', lat: -46.4515, lon: -23.5344}, //Bandeira do país e localização com latitude e longitude
	token: "seu token aqui"/*, //Token para sala carregar sem recaptcha
	noPlayer: true */ //Caso não queira o jogador BOT na sala, utilize true
})

//Inicializando a sala
criarSala.roominitial()