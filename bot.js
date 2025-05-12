import { Telegraf } from 'telegraf';


const bot = new Telegraf('7912158076:AAHClxRiNqxP8l0plBK19BhJSrna1RpzWik');

const webAppUrl = 'https://weather-five-sage.vercel.app/';

bot.start((ctx) => {
  ctx.reply('Hello! This bot shows weather in the world.\n\nPress "To know weather" 👇', {
    reply_markup: {
      keyboard: [
        [
          {
            text: 'To know weather',
            web_app: {
              url: webAppUrl, 
            },
          },
        ],
      ],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});


bot.on('message', (ctx) => {
  if (ctx.message.web_app_data) {
    const data = ctx.message.web_app_data.data;
    ctx.reply(`Получено из мини-аппа: ${data}`);
  }
});

bot.launch().then(() => {
  console.log('Бот запущен и готов к работе');
}).catch((err) => {
  console.error('Ошибка при запуске бота:', err);
});
