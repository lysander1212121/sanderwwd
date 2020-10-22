const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  var toplam = db.fetch(`toplamKayit_${message.author.id}`)
  const genelrol = message.guild.roles.find(r => r.id === "756469477922832425"); 
  const kız = message.guild.roles.find(r => r.id === "752178345202024458"); 
  const misafir = message.guild.roles.find(r => r.id === "752193453739343892"); 
  const log = message.guild.channels.find(c => c.id === "752197112699027547"); 
  const tag = "";
  if(!message.member.roles.array().filter(r => r.id === "752193258268131460")[0]) { 
    return message.channel.send("**Hoop Aslan bu işlemi yapmak için __Register Coach__ Rolüne sahip olman gerekiyor!**");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const c = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("Bir isim girin.")
      if(!yas) return message.channel.send("Bir yaş girin.")
    c.addRole(genelrol)
    c.addRole(kız)
    c.removeRole(misafir)
    c.setNickname(`${tag} ${nick} | ${yas}`)
    db.add(`bayanKayit_${message.author.id}`, 1)
    db.add(`toplamKayit_${message.author.id}`, 1)
    const embed = new Discord.RichEmbed()
    .setAuthor("Kız Kayıt Yapıldı")
    .addField(`<a:uyar8:740220446259019836> Kaydı yapılan\n`, `${c.user.tag}`)
    .addField(`<a:kralkim:740220302344061118> Kaydı yapan\n`, `${message.author.tag}`)
    .addField(`<a:kralkim:740220302344061118> Yeni isim\n`, `${tag} ${nick} , ${yas}`)
    .addField(`<a:kralkim:740220302344061118> Toplam Kayıt\n`, toplam || 0)
    .setFooter("Sᴀɴᴅᴇʀ Kayıt Sistemi")
    .setColor("#ffcbdb")
    log.send(embed)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k"],
  permLevel: 0
};
exports.help = {
  name: "k",
  description: "k",
  usage: "k"
};

