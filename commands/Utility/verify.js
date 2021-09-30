const { Message, Permissions, Client, MessageEmbed } = require("discord.js");
const simplydjs = require('simply-djs');

module.exports = {
    name: "verify",
    aliases: [],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
      if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return
        const verifyEmbed = new MessageEmbed() 
        .setTitle("**Click The Button To Verify**")
        .setDescription("Click the button attached to this embed to Verify yourself in this server and gain the <@&834760168570355733> role!")
        .setColor(0x90ee90)
        simplydjs.btnrole(client, message, {
            embed: verifyEmbed,
            data: [
              {
                role: '834760168570355733',
                label: 'Verify', // default: *role name*
                color: 'SUCCESS', // default: SECONDARY
                emoji: '',
              }
            ],
          })
    },
};
