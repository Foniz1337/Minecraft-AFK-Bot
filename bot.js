const mineflayer = require('mineflayer');
const config = require('./config.json');

const bot = mineflayer.createBot({
  host: config.serverHost,
  port: config.serverPort,
  username: config.botUsername,
  auth: 'offline',
  version: "1.21.8",
  viewDistance: config.botChunk
});


bot.on('spawn', () => {
  setTimeout(() => {
    bot.setControlState('sneak', true);
    console.log(`✅ ${config.botUsername} is Ready!`);
  }, 3000);
}); 
bot.on('error', (err) => {
  console.error('⚠️ Error:', err);
});
bot.on('end', () => {
  console.log('⛔️ Bot Disconnected!');
});
bot.on("spawn", () => {
    bot.chat("/login 27177890 27177890");
});
  setInterval(() => {
    bot.look(
        Math.random() * Math.PI * 2,
        0,
        true
    );
}, 100000);
