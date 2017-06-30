var is = require('assert');
var Game = require('../game');
var Player = require('../player');

describe("GameTest", function(){
	var player1;
	var player2;
	var game1;

	beforeEach("Setup", function(){
		player1 = new Player("Jeff", 20, 170);
		player2 = new Player("Paul", 21, 180);
		game1 = new Game("xxx");
	}),

	it("should have name", function(){
		is.equal("xxx", game1.name)
	}),

	it("should be able to accept players", function(){
		game1.addPlayer(player1);
		game1.addPlayer(player2);
		is.equal(2, game1.playersNum());
	})

})
