var Score = require('./score');

var Game = function(name) {
    this.name = name
    this.players = []

};
Game.prototype = {
    addPlayer: function(player) {
        this.players.push(player);
    },

    playersNum: function() {
        return this.players.length;
    },

    play: function() {
    	var scores = [];
    	for(var player of this.players){
    		var value = new Score();
    		scores.push(value.calculate(player));
    	}
   		var res = Math.max.apply(Math,array.map(function(o){return o.value;}))
   		console.log(scores);
   		return "" + res.name + " wins!";
    }

};

module.exports = Game;