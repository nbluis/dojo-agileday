
describe('Twitter Wrapper', function() {
  var twitter;

  beforeEach(function() {
    twitter = new Twitter();
  });

  it('Deve criar a instancia do wrapper corretamente', function() {
    expect(twitter).not.toBe(null);
  });

});
