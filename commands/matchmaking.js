module.exports = {
  run: function(){
    const discord = require ("discord.js");
    let rand = Math.floor((Math.random() * 100) + 1);
    var em = new discord.RichEmbed();
    var smartassmessage = "Error occurred, way too dank.";
    if (rand <= 10){
      smartassmessage = "ewwwwwwwwww.";
    } else if (rand <= 20){
      smartassmessage = "Not going to happen.";
    } else if (rand <= 30){
      smartassmessage = "worse than NubbyTM";
    } else if (rand <= 40){
      smartassmessage = "Ehh... I smell a divorce coming.";
    } else if (rand <= 50){
      smartassmessage = "Okay, fam.";
    } else if (rand <= 60){
      smartassmessage = "Only a few divorces.";
    } else if (rand <= 70){
      smartassmessage = "A divorce here and there.";
    } else if (rand <= 80){
      smartassmessage = "You'll get along in life. (hopefully)";
    } else if (rand <= 90){
      smartassmessage = "Almost a match. On :fire:.";
    } else if (rand < 100){
      smartassmessage = "A match that's :fire:";
    } else if (rand == 100){
      smartassmessage = "Perfect Match!";
    }
    em.setAuthor("DiscordGames | made by nubbytm");
    em.setColor([255,255,0]);
    em.setTitle(`Matchmaking result:`);
    em.setDescription(`${rand}% ${smartassmessage}`);
    em.setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    return em;
  }
}
