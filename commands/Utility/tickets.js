const {
    Client,
    Message,
    MessageEmbed,
    Permissions,
    MessageButton,
    MessageActionRow
} = require('discord.js');

module.exports = {
    name: "tickets",
    aliases: [],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
      if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return
        const embed = new MessageEmbed()
            .setColor('#d3d3d3')
            .setAuthor(message.guild.name, message.guild.iconURL({
                dynamic: true
            }))
            .setTimestamp()
            .setFooter('Vetlix-Utilities Ticket System')
            .setDescription(
                "**__How to Make A ticket__** \n\nClick The Buttons attached to this embed to make a ticket related to the problem! \n\n**Languages:** \n> Python Help \n> Javacript Help"
            )
            .setTitle('Vetlix\'s Treehouse Ticket System')


        const bt = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId('python')
                .setLabel('Python Help')
                .setStyle('PRIMARY'),
            );
        const bt2 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId('javascript')
                .setLabel('Javacript Help')
                .setStyle('SUCCESS'),
            );

        message.channel.send({
            embeds: [embed],
            components: [bt, bt2]
        });
    },
};
