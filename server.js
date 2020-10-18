
// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member.displayName}`);

});

// Log our bot in using the token from https://discord.com/developers/applications
client.login('NzY3MjM2NTgzMTgyNTY1Mzk5.X4u-vw.oDuVBzh242bExv3gECyir5oFu-c'); // <- hide the token when you want to deploy your bot in a .env file