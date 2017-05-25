module.exports = {
  run: function(){
    const discord = require ("discord.js");
    let rand = Math.floor((Math.random() * 8) + 1);
    let responses = [
      "Certainly",
      "Nope",
      "Yes.",
      "It seems to be.",
      "Try again.",
      "Come back later.",
      "Uhhhh, no.",
      "Obviously."
    ];
    let msg = responses[rand];
    var em = new Discord.RichEmbed();
    em.setAuthor("NubbyTM");
    em.setColor([255,255,0]);
    em.setTitle(`8ball Result: DEBUG: ${rand}`);
    em.setDescription(`${msg}`);
    return em;
  }
}
