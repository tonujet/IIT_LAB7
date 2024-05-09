const discord = {
    clientId: process.env.CLIENT_ID,
    guildId: process.env.GUILD_ID,
    bot_token: process.env.DISCORD_TOKEN
};
const fluentd = {
    host: process.env.FLUENTD_HOST,
    port: +process.env.FLUENTD_PORT,
}

export {
    discord,
    fluentd,
};