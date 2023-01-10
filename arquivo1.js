//Inicialmente vamos criar um HBInit para a criação da sala

var sala = HBInit ({
	roomName: "Primeira Sala", //Nome da Sala
	playerName: "BOT Teste", //Nome do BOT que aparecerá na lista de jogadores
	password: "Haxball", //Senha da sala
	maxPlayers: 15, //Número máximo de jogadores 
	public: true, //True para sala pública, false para sala privada 
	geo: {code: 'br', lat: -46.4515, lon: -23.5344}, //Bandeira do país e localização com latitude e longitude
	token: "seu token aqui"/*, //Token para sala carregar sem recaptcha
	noPlayer: true */ //Caso não queira o jogador BOT na sala, utilize true
});