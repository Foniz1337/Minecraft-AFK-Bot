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

  switch (movementPhase) {
    case 0:
      bot.setControlState('forward', true);
      bot.setControlState('back', false);
      bot.setControlState('jump', false);
      break;
    case 1:
      bot.setControlState('forward', false);
      bot.setControlState('back', true);
      bot.setControlState('jump', false);
      break;
    case 2:
      bot.setControlState('forward', false);
      bot.setControlState('back', false);
      bot.setControlState('jump', true);
      setTimeout(() => {
        bot.setControlState('jump', false);
      }, JUMP_DURATION);
      break;
    case 3:
      bot.setControlState('forward', false);
      bot.setControlState('back', false);
      bot.setControlState('jump', false);
      break;
  }

  movementPhase = (movementPhase + 1) % 4;

bot.on('error', (err) => {
  console.error('⚠️ Error:', err);
});
bot.on('end', () => {
  console.log('⛔️ Bot Disconnected!');
});
bot.on("spawn", () => {
    bot.chat("/register 27177890 27177890");
});
  setInterval(() => {
    bot.look(
        Math.random() * Math.PI * 2,
        0,
        true
    );
}, 100000);
