const eightball = require("./8ball.js");
const matchmaking = require("./matchmaking.js");
module.exports = {
  eightball: function(msg){
    msg.channel.sendEmbed(eightball.run());
  },
  matchmaking: function(msg){
    msg.channel.sendEmbed(matchmaking.run());
  }
};
