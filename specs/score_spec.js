var is = require('assert');
var Score = require('../score');
var Player = require('../player');

describe("ScoreTest", function(){
	var player1;
	var player2;
	var score1;

	beforeEach("Setup", function(){
		player1 = new Player("Jeff", 20, 170);
		player2 = new Player("Paul", 30, 180);
		score1 = new Score();
	}),

	it("should calculate score player1", function(){
		is.equal(270, score1.calculate(player1));
	}),

	it("should calculate score player2", function(){
		is.equal(330, score1.calculate(player2));
	})
});