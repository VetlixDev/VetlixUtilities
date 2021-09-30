const client = require("../index");
const simplydjs = require("simply-djs");
const {
    MessageActionRow,
    MessageButton,
    MessageEmbed
} = require('discord.js');

client.on("interactionCreate", async (interaction) => {
    await interaction.deferUpdate();
    //Simple Djs
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
    
    // Slash Command Handling
    if (interaction.isCommand()) {
        await interaction.deferReply({ ephemeral: false }).catch(() => {});

        const cmd = client.slashCommands.get(interaction.commandName);
        if (!cmd)
            return interaction.followUp({ content: "An error has occured " });

        const args = [];

        for (let option of interaction.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }
        interaction.member = interaction.guild.members.cache.get(interaction.user.id);

        cmd.run(client, interaction, args);
    }

    // Context Menu Handling
    if (interaction.isContextMenu()) {
        await interaction.deferReply({ ephemeral: false });
        const command = client.slashCommands.get(interaction.commandName);
        if (command) command.run(client, interaction);
    }
    
    // Ticket System Python
    if (interaction.isButton()) {
        if (interaction.customId === 'python') {

            const thread = await interaction.channel.threads.create({
                name: `${interaction.user.tag}`,
                autoArchiveDuration: 1440, 
            });
            await thread.setLocked(true)
            const embed = new MessageEmbed()
                .setTitle('Vetlix\'s Treehouse Ticket System')
                .setDescription('Hello! Thank you for making a ticket! A Code Helper will be with you shortly. In the mean time Please post your code and error in code blocks so its easier for us to help you.')
                .setColor('#bfff00')
                .setTimestamp()
                .setFooter('Vetlix-Utilities Ticket System')
                .setAuthor(interaction.guild.name, interaction.guild.iconURL({
                    dynamic: true
                }));

            const del = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                    .setCustomId('del')
                    .setLabel('🔒 Close Ticket!')
                    .setStyle('DANGER'),
                );
            interaction.user.send('Your Help Ticket Has been made!');
            thread.send({
                content: `<@${interaction.user.id}> <@&893118951058440192> <@&834767562939301951>`,
                embeds: [embed],
                components: [del]
            }).then(interaction.followUp({
                content: 'I have successfully Made your Ticket!',
                ephemeral: true
            }))
            setTimeout(() => {
                interaction.channel.bulkDelete(1)
            }, 5000)
        } else if (interaction.customId === 'del') {
            const thread = interaction.channel
            thread.delete();
        }
        
       // Ticket System
        if (interaction.isButton()) {
           if (interaction.customId === 'javascript') {

            const thread = await interaction.channel.threads.create({
                name: `${interaction.user.tag}`,
                autoArchiveDuration: 1440, 
            });
            await thread.setLocked(true)
            const embed = new MessageEmbed()
                .setTitle('Vetlix\'s Treehouse Ticket System')
                .setDescription('Hello! Thank you for making a ticket! A Code Helper will be with you shortly. In the mean time Please post your code and error in code blocks so its easier for us to help you.')
                .setColor('#bfff00')
                .setTimestamp()
                .setFooter('Vetlix-Utilities Ticket System')
                .setAuthor(interaction.guild.name, interaction.guild.iconURL({
                    dynamic: true
                }));

            const del = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                    .setCustomId('del')
                    .setLabel('🔒 Close Ticket!')
                    .setStyle('DANGER'),
                );
            interaction.user.send('Your Help Ticket Has been made!');
            thread.send({
                content: `<@${interaction.user.id}> <@&893118951058440192> <@&834767562939301951>`,
                embeds: [embed],
                components: [del]
            }).then(interaction.followUp({
                content: 'I have successfully Made your Ticket!',
                ephemeral: true
            }))
            setTimeout(() => {
                interaction.channel.bulkDelete(1)
            }, 5000)
        } else if (interaction.customId === 'del') {
            const thread = interaction.channel
            thread.delete();
        }
    }
    }
});
