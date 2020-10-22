const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

module.exports = client => {
 setInterval(function() {
}, 8000);
client.user.setPresence({
        game: {
            name: `Alayının kayıtını yaparım ben #SanderArmy`,
            type: 'WATCHING'   //
        },
        status: 'online'   //
    })
    console.log(`Sander Kayit`);
}