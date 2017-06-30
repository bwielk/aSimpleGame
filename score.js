var Player = require('./player');

var Score = function(){

	};

	Score.prototype = {
		calculate: function(player){
			return player.height + 5*player.age;
		}
	};

module.exports = Score;