require('dotenv').config(); // must have this for .env variables
const { Client, Intents, Message} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});

client.on('messageCreate', message => {
    if (message.content === '/ping') {
        message.reply('pong').finally();
    }
});



client.login(process.env.BOT_TOKEN).finally();