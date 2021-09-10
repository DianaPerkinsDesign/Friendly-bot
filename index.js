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
client.once("ready", (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  console.log(
    `${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`
  );
  const { commandName } = interaction;

  if (commandName === "ping") {
    await interaction.reply("Pongers!");
  } else if (commandName === "compliment") {
    await interaction.reply(`${Compliment("@diana")}`);
  } else if (commandName === "avatar");
});

client.on("messageCreate", (message) => {
  console.log(command);
  if (command === "avatar") {
    if (args[0]) {
      const user = getUserFromMention(args[0]);
      if (!user) {
        return message.reply(
          "Please use a proper mention if you want to see someone elses avatar."
        );
      }

      return message.channel.send(
        `${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`
      );
    }

    return message.channel.send(
      `${
        message.author.username
      }, your avatar: ${message.author.displayAvatarURL({ dynamic: true })}`
    );
  }
});

// Login to Discord with your client's token
client.login(token);
