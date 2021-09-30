const { Message, Client, MessageEmbed } = require("discord.js");
const simplydjs = require('simply-djs');

module.exports = {
    name: "gender",
    aliases: [],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const genderEmbed = new MessageEmbed() 
        .setTitle("**Reaction Roles**")
        .setDescription("**__Gender Roles__** \n:boy: <@&836178515329155104> \n:girl: <@&836178562846294036>")
        .setColor(0xFF7F7F)
        .setImage("https://i.imgur.com/z5qt4Oq.png")
        simplydjs.btnrole(client, message, {
            embed: genderEmbed,
            data: [
              {
                role: '836178515329155104',
                label: 'Boy', // default: *role name*
                color: 'PRIMARY', // default: SECONDARY
                emoji: '👦',
              }, // etc..
              {
                role: '836178562846294036',
                label: 'Girl', // default: *role name*
                color: 'DANGER', // default: SECONDARY
                emoji: '👧',
              }
              //Keep adding here more
            ],
          })
    },
};
