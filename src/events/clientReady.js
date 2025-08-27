import logger from '../utils/logger.js';
import { ActivityType } from 'discord.js';

let lastGuildCount = 0;

export default {
    name: 'clientReady',
    once: true,
    execute(client) {
        logger.success(`🤖 Bot logged in as ${client.user.tag}`);

        const stats = `🌐 ${client.guilds.cache.size} servers | 👥 ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} users`;
        logger.info(stats);

        const updatePresence = () => {
            const currentGuilds = client.guilds.cache.size;
            if (currentGuilds !== lastGuildCount) {
                client.user.setPresence({
                    activities: [{ 
                        name: `Em: ${currentGuilds} Servidores`, 
                        type: ActivityType.Custom
                    }],
                    status: 'online'
                });
                lastGuildCount = currentGuilds;
            }
        };

        updatePresence();
        setInterval(updatePresence, 300000);
    },
};
