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

    }
};

module.exports = Game;