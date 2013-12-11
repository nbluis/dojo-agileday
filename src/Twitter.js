function Twitter() {

	var tweets = [];
	var favoritos = [];

	this.tweet = function(mensagem) {
		if (mensagem.length > 140 || mensagem.length == 0)
			return false;

		tweets.push(mensagem);
		return true;
	};

	this.getTweets = function() {
		return tweets;
	};

	this.adicionarAosFavoritos = function(mensagem) {
		favoritos.push(mensagem);
	};

	this.getFavoritos = function(){
		return favoritos;
	};

	this.adicionarSeguidor = function(seguidor) {
		if (seguidor.indexOf('@') != 0)
			return false;
		return true;
	};
}
