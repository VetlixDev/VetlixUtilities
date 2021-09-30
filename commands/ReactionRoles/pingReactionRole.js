const { Message, Permissions, Client, MessageEmbed } = require("discord.js");
const simplydjs = require('simply-djs');

module.exports = {
    name: "pingrr",
    aliases: [],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
      if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return
        const genderEmbed = new MessageEmbed() 
        .setTitle("**Reaction Roles**")
        .setDescription("**__Ping Roles__** \n:purple_square: <@&835226610323292201> \n:brown_square: <@&835226643152371742> \n:green_square: <@&857977256294613042> \n:blue_square: <@&857975840495370282>")
        .setColor(0xBFFF00)
        .setImage("https://i.imgur.com/GkDWycH.png")
        simplydjs.btnrole(client, message, {
            embed: genderEmbed,
            data: [
              {
                role: '835226610323292201',
                label: 'Giveaway Ping', // default: *role name*
                color: 'PRIMARY', // default: SECONDARY
                emoji: '🟪',
              }, // etc..
              {
                role: '835226643152371742',
                label: 'Announcement Ping', // default: *role name*
                color: 'PRIMARY', // default: SECONDARY
                emoji: '🟫',
              },
              {
                role: '857977256294613042',
                label: 'Code Ping', // default: *role name*
                color: 'PRIMARY', // default: SECONDARY
                emoji: '🟩',
              },
              {
                role: '857975840495370282',
                label: 'Upload Ping', // default: *role name*
                color: 'PRIMARY', // default: SECONDARY
                emoji: '🟦',
              }
            ],
          })
    },
};
