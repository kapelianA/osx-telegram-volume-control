const volume = require("./volume");
const config = require('../config/config');
const TelegramBot = require('node-telegram-bot-api');

const token = config.bot_token;
const admin_id = config.admin_id;

exports.runBot = () => {
    const bot = new TelegramBot(token, { polling: true });

    bot.on('message', (msg) => {
        let res = volume.volumeInit(msg.text);

        bot.sendMessage(admin_id, res, {
            "reply_markup": {
                "keyboard": [["-10%", "-5%", "+5%", "+10%",], ["50%"], ["75%"]]
            }
        });
    });
}
