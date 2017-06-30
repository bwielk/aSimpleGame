var is = require('assert');
var Player = require('../player');

describe("PlayerTest", function(){
	var player1;

	beforeEach("Setup", function(){
		player1 = new Player("Jeff");
	}),

	it("should have name", function(){
		is.equal("Jeff", player1.name);
	})
});