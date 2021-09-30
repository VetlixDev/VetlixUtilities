const { Message, Permissions, Client, MessageEmbed } = require("discord.js");
const simplydjs = require('simply-djs');

module.exports = {
    name: "age",
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
        .setDescription("**__Age Roles__** \n:boy: <@&834820212623802438> \n:man_curly_haired: <@&834820145590960198> \n:man: <@&834820073624567881>")
        .setColor(0xBFFF00)
        .setImage("https://i.imgur.com/yGdz9z1.png")
        simplydjs.btnrole(client, message, {
            embed: genderEmbed,
            data: [
              {
                role: '834820212623802438',
                label: '13-15', // default: *role name*
                color: 'PRIMARY', // default: SECONDARY
                emoji: '👦',
              }, // etc..
              {
                role: '834820145590960198',
                label: '16-17', // default: *role name*
                color: 'PRIMARY', // default: SECONDARY
                emoji: '👨‍🦱',
              },
              {
                role: '834820073624567881',
                label: '18+', // default: *role name*
                color: 'PRIMARY', // default: SECONDARY
                emoji: '👨',
              }
            ],
          })
    },
};
