const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const embedyardim = new Discord.RichEmbed()
    .setColor('0xf0cdcd')
      .setTitle('**Sᴀɴᴅᴇʀ Register Yardım Paneli**')
      .addField('__**s.e (erkekler için)**__', `  \`${prefix}||| isim @etiket İsim Yaş\``) 
    .addField('__**s.k (kadınlar için)**__', `  \`${prefix}||| kadın @etiket\``) 
    .addField('__**s.profil**__', `  \`${prefix}||| Kayıt verilerinizi kayıt eder\``) 
    .addField('__**s.Yardım**__', `  \`${prefix}|||| komutları gösterir\``) 
    .addField('__**Dikkat OKU**__', `  \`${prefix}||| Kayıt sırasında (etiket)(isim - yaş) şeklinde olmalıdır etiketle isim arasında boşluk bulunmamalıdır\``) 
    message.channel.send(embedyardim).catch()
//////`${client.user.username}`
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["h", "halp", "help", 'y', 'yadrım'],
    permLevel: 0
};
  
exports.help = {
    name: 'yardım',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};  