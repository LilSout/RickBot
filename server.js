const Eris = require("eris");

const bot = new Eris(process.env.DISCORD_BOT_TOKEN); // Replace DISCORD_BOT_TOKEN in .env with your bot accounts token

bot.on("ready", () => {
  // When the bot is ready
  console.log("Ready!"); // Log "Ready!"
});

bot.on("messageCreate", msg => {
  // When a message is created
  if (msg.content.includes("Rick")) {
    // If the message content includes "1337"
    bot.createMessage(
      msg.channel.id,
      "NEVER GONNA GIVE YOU UP, NEVER GONNA LET YOU DOWN!!"
    ); // Send a message in the same channel with "damn it"
  }
});

bot.on("messageCreate", msg => {
  // When a message is created
  if (msg.content.includes("Never Gonna Give You Up")) {
    // If the message content includes "1337"
    bot.createMessage(msg.channel.id, "NEVER GONNA LET YOU DOWN!!"); // Send a message in the same channel with "damn it"
  }
});

bot.on("messageCreate", msg => {
if (msg.content.includes("bad_word_example"))
   
}

bot.connect(); // Get the bot to connect to Discord
