// Require the necessary discord.js classes
const { Client, Intents } = require("discord.js");
const { token } = require("./config.json");
const Compliment = require("./compliment.js");

const _ = require("lodash");
const StatusColor = require("./lib/status-color");
const Grammar = require("keyfob").load({
  root: "./lib/grammar",
  patterns: ["*.js"],
  fn: require,
});

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === "ping") {
    await interaction.reply("Pongers!");
  } else if (commandName === "compliment") {
    await interaction.reply(`${Compliment({ args: "@diana" })}`);
  }
});

// Login to Discord with your client's token
client.login(token);
