var Player = require('./player');

var Score = function() {
	this.value = 0;
	this.name = "";
};

Score.prototype = {
    calculate: function(player) {
    	this.name = player.name;
    	this.value = player.height + 5 * player.age;
        return this.value;
    }
};

module.exports = Score;