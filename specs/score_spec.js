var is = require('assert');
var Score = require('../score');
var Player = require('../player');

describe("ScoreTest", function() {
    var player1;
    var player2;
    var score1;
    var score2;

    beforeEach("Setup", function() {
            player1 = new Player("Jeff", 20, 170);
            player2 = new Player("Paul", 30, 180);
            score1 = new Score();
            score2 = new Score();
        }),

        it("should calculate score player1", function() {
            is.equal(270, score1.calculate(player1));
        }),

        it("should calculate score player2", function() {
            is.equal(330, score1.calculate(player2));
        }),

        it("should assign name to a score player 1 and 2", function() {
        	score1.calculate(player2);
        	score2.calculate(player1);
            is.equal("Paul", score1.name);
            is.equal("Jeff", score2.name);
        }),

         it("should assign value to a score player1 and 2", function() {
        	score1.calculate(player2);
        	score2.calculate(player1);
            is.equal(330, score1.value);
            is.equal(270, score2.value);
        })
});