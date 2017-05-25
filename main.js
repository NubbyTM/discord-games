const discord = require ("discord.js");
const client = new discord.Client();
const cmdreg = require ("./commands/CommandRegistry");
let prefix = ">"; // Change this to change the prefix

client.on("ready", ()=>{
  console.log("[Bot] Connected");
  client.user.setGame("discord games alpha v0.1");
});
client.on("message", msg=>{
  if (msg.content==`${prefix}ping`){
    msg.reply("Pong");
  } else if (msg.content.startsWith(prefix)){
    if (msg.content.startsWith(`${prefix}8ball`)){
      cmdreg.eightball(msg);
    } else if (msg.content.startsWith(`${prefix}matchmaking`)){
      cmdreg.matchmaking(msg);
    }
  }
});

client.login(process.env.TOKEN);
