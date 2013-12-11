
describe('Twitter Wrapper', function() {
  var twitter;

  beforeEach(function() {
    twitter = new Twitter();
  });

  it('Deve criar a instancia do twitter corretamente', function() {
    expect(twitter).not.toBe(null);
  });

  it('Deve validar que um tweet tenha no máximo 140 caracteres', function() {
  	var sucesso = twitter.tweet('Mensagem com mais de 140 caracteres. estamos aqui no dojo de javascript e ninguem testa codigo javascript. so querem saber de java, .net e depois quebra tudo no front-end. #chupabackend.');
  	expect(sucesso).toBe(false);
  });

  it('Deve incluir com sucesso um tweet com até 140 caracteres', function() {
  	var sucesso = twitter.tweet('Mensagem com menos de 140 caracteres. So querem saber de java, .net e depois quebra tudo no front-end. #chupabackend.');
  	expect(sucesso).toBe(true);
  });

  it('Deve validar que um tweet tem ao menos um caractere', function() {
  	var sucesso = twitter.tweet('');
  	expect(sucesso).toBe(false);
  });

  it('Deve aparece o novo tweet apos twittar', function(){
  		twitter.tweet('A gurizada aqui eh de feh');

  		var tweetList = twitter.getTweets();

  		expect(tweetList.length).toBe(1);

  });

  it('Deve validar se o novo tweet for inserido corretamente', function() {
  	var mensagem = 'Outra mensagem maluca qualquer';

  	twitter.tweet(mensagem);

  	var tweetList = twitter.getTweets();

  	expect(tweetList[0]).toBe(mensagem);
  });

  it('Deve adicionar um tweet aos favoritos', function() {
  	var mensagem = 'Adorei essa mensagem';

  	twitter.adicionarAosFavoritos(mensagem);

	var favoritos = twitter.getFavoritos();

	expect(favoritos).not.toBe(null);
  });

  it('Deve validar se o tweet favoritado esta na lista ', function(){
    var mensagem = 'Gostei! Vou favoritar';

  	twitter.adicionarAosFavoritos(mensagem);

	var favoritos = twitter.getFavoritos();

	expect(favoritos[0]).toBe(mensagem);

  });

  it('Deve adicionar um novo seguidor validando com @', function(){
  	var seguidor = twitter.adicionarSeguidor('fulano');

  	expect(seguidor).toBe(false);
  });

  it ('Deve adicionar com sucesso um novo seguidor', function() {
  	var sucesso = twitter.adicionarSeguidor('@fulano');

  	expect(sucesso).toBe(true);
  });

});