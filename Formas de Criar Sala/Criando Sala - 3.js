//Este modelo funciona pra node.js, uma biblioteca é importada e daí iniciamos as configurações
//Usando cmd pra node, vá para a pasta do arquivo e digite node nomearquivo.js para rodar
//Caso não tenha a biblioteca node, digite npm install haxball.js para baixar o arquivo
//Além disso, baixe também: npm install https-proxy-agent

//Importando a biblioteca haxball.js
import HaxballJS from "haxball.js";

//Fazendo uma variável pra facilitar o trabalho (não obrigatório)
var hax = HaxballJS;

//Montando a sala com as configurações desejadas
hax.then((HBInit) => {
	var sala = HBInit ({
		roomName: "Primeira Sala",
		playerName: "BOT Teste",
		password: "Haxball",
		maxPlayers: 15,
		public: true,
		geo: {code: 'br', lat: -46.4515, lon: -23.5344}, 
		token: "thr1.AAAAAGcFuDDmJ7ud4I_LRQ.YZxwtT9y1x0",
		noPlayer: false
	});
	
	//Evento obrigatório para pegar o link
	sala.onRoomLink = function(url) {
		console.log("Entre no link: " + url);
	}
});