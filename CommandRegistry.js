const eightball = require("8ball");
module.exports = {
  eightball: function(msg){
    msg.channel.sendEmbed(eightball.run());
  }
};
