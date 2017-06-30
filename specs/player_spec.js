var is = require('assert');
var Player = require('../player');

describe("PlayerTest", function(){
	var player1;
	var player2;

	beforeEach("Setup", function(){
		player1 = new Player("Jeff", 20, 170);
		player2 = new Player("Paul", 21, 180);
	}),

	it("should have name", function(){
		is.equal("Jeff", player1.name);
		is.equal("Paul", player2.name);
	}),

	it("should have age", function(){
		is.equal(20, player1.age);
		is.equal(21, player2.age);
	}),

	it("should have height", function(){
		is.equal(170, player1.height);
		is.equal(180, player2.height);
	})
});