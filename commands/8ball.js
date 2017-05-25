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
    let msg = responses[rand-1];
    var em = new discord.RichEmbed();
    em.setAuthor("DiscordGames | made by nubbytm");
    em.setColor([255,255,0]);
    em.setTitle(`8ball Result: [Debug info: ${rand}]`);
    em.setDescription(`${msg}`);
    em.setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    return em;
  }
}
