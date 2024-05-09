import {SlashCommandBuilder} from 'discord.js';
import {logger} from '../logger.js';

const data = new SlashCommandBuilder()
    .setName('log')
    .setDescription('Provides information about the user.')
    .addStringOption(option =>
        option.setName('message')
            .setDescription('The message to log')
            .setRequired(true)
    );


const execute = async interaction => {
    let message;
    try {
        message = interaction.options.getString('message');
        const username = interaction.user.username;
        const content = {username, message}
        await logger.emit('user-logging', content);
        interaction.reply(`\`\`\`${message}\`\`\` was successfully logged`)
    } catch (e) {
        interaction.reply(`\`\`\`${message}\`\`\` wasn't logged. Something went wrong`)
    }
}

export {data, execute}
