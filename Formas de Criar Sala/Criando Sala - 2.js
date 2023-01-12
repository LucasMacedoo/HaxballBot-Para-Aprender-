//Inicialmente vamos criar um HBInit para a criação da sala

//Variável específica para sala do Haxball 
const criador = window.HBInit

//Fazendo uma classe chamada Sala
class Sala {
	constructor(configuracoes) {
		this.config = configuracoes
		this.room
	}
	
	roominitial() {
		this.room = criador(this.config)
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