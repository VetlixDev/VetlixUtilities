const { Client, Collection } = require("discord.js");
const simplydjs = require("simply-djs");

const client = new Client({
    intents: 32767,
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);

client.on("interactionCreate", async interaction =>{
    simplydjs.clickBtn(interaction, {
      embedDesc: 'This Is Description',
      embedColor: '#fffff', // default: #075FFF
      closeColor: '', //default: blurple
      closeEmoji: '😃', // default: 🔒
      
      delColor: '', // default: grey
      delEmoji: '', // default: ❌
      openColor: '' , // default: green
      openEmoji: '', // default: 🔓
      timeout: false, // default: true | Needs to be boolean (true/false)
    
      categoryID: '881801380841541632',
      role: '859824835802562590' // Role which sees the ticket channel (like Support Role)
      })
  })

client.login(client.config.token);
