const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
//const ejs = require("ejs");
//const session = require("express-session");
//const session = require("express-session");
//const parser = require("body-parser");
const moment = require("moment");
const Jimp = require("jimp");
const ayarlar = require("./ayarlar.json");
require("./util/eventLoader")(client);
const db = require("quick.db");
const express = require("express");
/* Market */
/*client.shop = { //market öğeleri buraya, cost ise ne kadar para ettiği
  bilgisayar: {
    cost: 2000
  },
  telefon: {
    cost: 1000
  },
  coin: {
    cost: 30000
  },
  minecraft: {
    cost: 25000
  },
  paket: {
    cost: 100000
  },
    iphone12: {
    cost: 1000
  }
};*/
/* Market Son */
/* Db Settings */

/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://krdsuptime:<password>@cluster0.agsnq.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/

//app.listen(8000, null, null, () => console.log("");// You need to place this at the really end of your file.
/*const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const express = require('express');
const http = require('http');
const config = require('./ayarlar.json');
client.config = config;
*/
//Coded by Zero x Pythonic
/*const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./data.json",
    updateCountdownEvery: 3000,
    default: {
        botsCanWin: false,
        embedColor: "#2196f3",
        reaction: "<a:renkli:690285066491920404>"
    }
});*/
//Coded by Zero x Pythonic

//UPTIMER BY Zero x Pythonic
/*
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "7/24 AKTİF TUTMA İŞLEMİ BAŞARILI");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);*/
/*
var prefix = config.prefix;

const log = message => {
    console.log(`${message}`);
};



//Coded by Zero x Pythonic
fs.readdir("./events/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`👌 Event yüklendi: ${eventName}`);
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./events/${file}`)];
    });
});

client.commands = new Discord.Collection();

//Coded by Zero x Pythonic
fs.readdir("./commands/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
        console.log(`👌 Komut yüklendi: ${commandName}`);
    });
});

//Coded by Zero x Pythonic
client.login(config.token);*/
const app = express();
const http = require("http");
/*
app.get("/", (request, response) => {
  console.log(`...`);
  console.error("---");

  response.sendStatus(200);
});*/
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
client.config = {
  renk: "RANDOM",
  bakimmod: "false"
}
client.cerezler = {
  cerezlermod: "true",
  cerez: ["**Çerezleri Kabul Ederek Özellikleri Test Edebilirsiniz**"]
}
const bakimlog = message => {
  console.error("BOT BAKIM MODU AKTIFLESDIRILDI");
};

let prefix = ayarlar.prefix;





console.log("Tüm işlemler gerçekleşti");
console.log("---------SISTEM---------");
const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenmeye başlayacaktır.`);
   files.forEach(o => {
    let props = require(`./komutlar/${o}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) return message.author.send("**Prefix'im !**");
  let permlvl = 0;
  if (message.member.permissions.has("BAN_MEMBERS")) permlvl = 2;
  if (message.member.permissions.has("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};






////////////////////////
client.on('message', msg => {

if (!msg.content.startsWith(prefix)) {
    return;
  }

  });





client.login(ayarlar.token);


//eklendi-atıldım
client.on('guildDelete', guild => {

let plasmic = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle(" Bot Kicklendi ")
.addField("Sunucu Adi:", guild.name)
.addField("Sunucu sahibi", guild.owner)
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucunun Kurulu Oldugu Bolge:", guild.region)
.addField("Sunucudaki Kisi Sayisi:", guild.memberCount)

   client.channels.cache.get('695706913291370516').send(plasmic);
 
});
/*
client.on("guildMemberAdd", member =>{
    const hg = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(member.guild.name + 'Sunucusuna Hoşgeldin!')
    .setDescription(`Sunucumuza katıldığın için teşekkürler , Unutma Bu Sunucuyu Greedy Koruyor`)
    .setFooter('Hoşgeldin')
    .setTimestamp()
    member.send(hg)
})*/
/* Destek Sistemi */
/*
if(command == "talep-kur") {
        // ticket-kur #channel

        let channel = message.mentions.channels.first();
        if(!channel) return message.reply("Kullanım : `!talep-kur #kanal`");

        const sent = await channel.send(new Discord.MessageEmbed()
            .setTitle("Ticket System")
            .setDescription("Emojiye Tıkla Talepi Aç")
            .setFooter("Greedy Beta Talep Sistemi")
            .setColor("00ff00")
        );

        sent.react('📚');
        settings.set(`${message.guild.id}-greedy-talepi`, sent.id);

        message.channel.send("Talep : ")
    }

    if(command == "kapat") {
        if(!message.channel.name.includes("talep-")) return message.channel.send("HATA ! Kullanmak Için Izinin Bulunamadı!")
        message.channel.delete();
    }
});


client.on('messageReactionAdd', async (reaction, user) => {
    if(user.partial) await user.fetch();
    if(reaction.partial) await reaction.fetch();
    if(reaction.message.partial) await reaction.message.fetch();

    if(user.bot) return;

    let ticketid = await settings.get(`${reaction.message.guild.id}-greedy-talepi`);

    if(!ticketid) return;

    if(reaction.message.id == ticketid && reaction.emoji.name == '📚') {
        reaction.users.remove(user);

        reaction.message.guild.channels.create(`talep-${user.username}`, {
            permissionOverwrites: [
                {
                    id: user.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                },
                {
                    id: reaction.message.guild.roles.everyone,
                    deny: ["VIEW_CHANNEL"]
                }
            ],
            type: 'text'
        }).then(async channel => {
            channel.send(`<@${user.id}>`, new Discord.MessageEmbed().setTitle("Yeni Talepine Hoşgeldin!").setDescription("En kısa zamanda yanınızda olacağız").setColor("2196f3"))
        })
    }
});*/
/* Destek Sistemi Son ! */

/* Ekonomi Sistemi */
/*
if(command == "günlük") {
        const cooldowndata = await cooldowns.get(`${message.author.id}-${message.guild.id}-daily`);
        if(parseInt(cooldowndata) > Date.now()) return message.reply(`Biraz Beklemelisin ${ms(parseInt(cooldowndata) - Date.now(), {long: true})}`)

        await eco.ensure(`${message.author.id}-${message.guild.id}`, 0);
        const currentBalance = await eco.get(`${message.author.id}-${message.guild.id}`);
        eco.set(`${message.author.id}-${message.guild.id}`, currentBalance + 5);

        message.channel.send(new Discord.MessageEmbed()
            .setTitle("💸 Günlük Ödülün!")
            .setDescription(`Ödülünü Aldın Ödülün : ${currentBalance + 5}!`).setColor("2196f3")
        )

        cooldowns.set(`${message.author.id}-${message.guild.id}-günlük`, Date.now() + ms("1d"))
    }

    if(command == "param") {
        await eco.ensure(`${message.author.id}-${message.guild.id}`, 0);
        const currentBalance = await eco.get(`${message.author.id}-${message.guild.id}`);

        message.channel.send(new Discord.MessageEmbed()
            .setTitle("Greedy Ekonomi Sistemi __BETA__!")
            .setDescription(`Paran : \`${currentBalance}\``).setColor("2196f3")
        )
    }*/
/* Ekonomi Son */
/* Muzik Sistemi */
/*
const ytdl = require('ytdl-core');
if(command == "çal") {
        if(!args[0]) return;
        let url = args.join(" ");
        if(!url.match(/(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/)) return message.channel.send("Bir Link Gir !!");

        let serverQueue = queue.get(message.guild.id);
        let vc = message.member.voice;

        if(!vc) return message.channel.send("HATA ! Bir Sesli Kanal Gir");

        if(!vc.channel.permissionsFor(client.user).has('CONNECT') || !vc.channel.permissionsFor(client.user).has('SPEAK')) return message.channel.send("HATA ! Izinlerin Yok!");

        let songinfo = await ytdl.getInfo(url);
        let song = {
            title: songinfo.title,
            url: songinfo.video_url
        }

        if(!serverQueue) {
            let queueConst = {
                textChannel: message.channel,
                voiceChannel: vc.channel,
                connection: null,
                songs: [],
                volume: 5,
                playing: true
            };

            queue.set(message.guild.id, queueConst);
            queueConst.songs.push(song);

            try {
                let connection = await vc.channel.join();
                queueConst.connection = connection
                playSong(message.guild, queueConst.songs[0])
            } catch (error) {
                console.log(error);
                queue.delete(message.guild.id);
                return message.channel.send("HATA BULUNDU ! HATA : " + error);
            }
        } else {
            serverQueue.songs.push(song);
            return message.channel.send(`${song.title} Sıraya Eklendi!`)
        }
    }
})
*/
/**
 * 
 * @param {Discord.Guild} guild 
 * @param {Object} song 
 */
/*
async function playSong(guild, song) {
    let serverQueue = queue.get(guild.id);

    if(!song){
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection.play(ytdl(song.url)).on('end', () => {
        serverQueue.songs.shift();
        playSong(guild, serverQueue.songs[0]);
    })
    .on('error', () => {
        console.log(error)
    })

    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}*/
/* Muzik Sistemi Son */
client.on('guildMemberAdd', async member => {
  let roldb = db.fetch(`otorol.rol_${member.guild.id}`)
  let kanaldb = db.fetch(`otorol.kanal_${member.guild.id}`)
  let rol = member.guild.roles.cache.get(roldb)
  let kanal = member.guild.channels.cache.get(kanaldb)
  let otoyazi = db.fetch(`otoyazi.sunucu.${member.guild.id}`)
  if(rol === undefined || null) {
    return;
  
  } else if(kanal === undefined || null) {
    return;  
    
  } 
  
  else {
    
    try {
      
     
      if(otoyazi === 'acik') {
        await member.roles.add(roldb)
    kanal.send(`<a:grs:691620276055703573> ${member.user.username}#${member.user.discriminator} Adlı Üyeye Başarıyla <a:carkl:682484412499099652>\`${rol.name}\` Adlı Röl Verildi.`)
      } if(otoyazi === undefined || null) {
        await member.roles.add(roldb)
      }
    } catch(e) {
    
    return;
  }
    
    
  }
})
client.on("message", async message => {
if(!message.id) return;
if(!message.guild) return 
let qwe = db.fetch(`toplu.etiket.sayı.${message.guild.id}`)
let sec = db.fetch(`toplu.etiket.${message.guild.id}`)

if (sec == 'acik') {

let asd = new Discord.MessageEmbed()
.setColor("RANDOM")
.setThumbnail(client.user.avatarURL({dynamic: true}))
.setTimestamp()
.setDescription('Seni Uyarıyorum Etiket Koruma Aktif !.')
.setFooter('Greedy - Toplu Etiket Sistemi')

if(message.member.hasPermission('MANAGE_GUILD')) return;

if(message.mentions.users.size >= qwe) {
message.delete();
message.channel.send(asd)
message.author.send(asd)

}
} else if (sec == 'kapali') {
}
if (!sec) return;   
});
client.on("message", msg => {
  const kzgn = client.emojis.cache.get("512302904141545509");
  const embedlul = new Discord.MessageEmbed()
    .setColor(0x00ae86)
    .setDescription(msg.author + "> Űzgünüm Greedy Senin Reklam Yapmanı Engellemekde!")

  const embedlulz = new Discord.MessageEmbed()
    .setTitle("Sunucunda " + msg.author.tag + " UYARI ! reklam yapıyor!")
    .setColor(0x00ae86)
    .setDescription(
      "Reklam Yapanın Mesajını Sildim Bana Destek Çıkmak Istiyorsan !davet Yazarak Beni Sunucuna Eklemen Yeterli !"
    )
    .addField("Kullanıcının Mesajı:", "**" + msg.content + "**");

  if (
    msg.content
      .toLowerCase()
      .match(/(discord\.gg\/)|(discordapp\.com\/invite\/) (htpp)/g) &&
    msg.channel.type === "text" &&
    msg.channel
      .permissionsFor(msg.guild.member(client.user))
      .has("MANAGE_MESSAGES")
  ) {
    if (msg.member.hasPermission("BAN_MEMBERS")) {
      return;
    } else {
      msg
        .delete(30)
        .then(deletedMsg => {
          deletedMsg.channel.send(embedlul);
          msg.guild.owner.send(embedlulz).catch(e => {
            console.error(e);
          });
        })
        .catch(e => {
          console.error(e);
        });
    }
  }
});
client.on('message', async message => {
  
 if(!message.guild) return;
  const guild = new db.table("ayarlamali")
  let spfetch = guild.fetch(`spotifyblock.${message.guiild.id}`) || "kpl"
 if(spfetch == "ack") {
if(message.member.hasPermission("BAN_MEMBERS")) {
  return;
} else {
 if(message.activity) {
   if(message.activity.partyID.includes("spotify")) {
     message.delete()
     message.reply('<a:alarm:686200595194839101> Bu Sunucuda Spotify Dinleme Linki Engeli Aktif Durumda Mesajın Otomatik Silindi !.').then(x => x.delete({timeout: 3000}))
   }
 }
  }
   } if(spfetch == "kpl") {
     return;
   }
});
//--------------------------------------------------------//

client.on('guildCreate', guild => {

let plasmicc = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle(" Bot Eklendi ")
.addField("Sunucu Adi:", guild.name)
.addField("Sunucu sahibi", guild.owner )
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucunun Kurulu Oldugu Bolge:", guild.region)
.addField("Sunucudaki Kisi Sayisi:", guild.memberCount)

   client.channels.cache.get('695706913291370516').send(plasmicc);

});

//eklendım-atıldım

/* ======= Dashboard Docs ======== */
/*
const express = require("express");*/
const url = require("url");
const path = require("path");
const passport = require("passport"); // The general passport module.
const passportDiscord = require("passport-discord");
//const Strategy = passportDiscord.Strategy;
// This will solve the actual output.
const Strategy = require("passport-discord").Strategy;

const filesDirectory = path.resolve(`${process.cwd()}${path.sep}panel`);
const templatesDirectory = path.resolve(`${filesDirectory}${path.sep}html`);
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});
app.use(passport.initialize());
app.use(passport.session());
const ejs = require("ejs"); // You can get this from npm as well.
/*
app.engine("html", ejs.renderFile);
app.set("view engine", "html");*/
app.locals.domain = "propite-bot.glitch.me"
  
  app.engine("html", require("ejs").renderFile);
  app.set("view engine", "html")
var bodyParser = require("body-parser");
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
const session = require("express-session");
const MemoryStore = require("memorystore");
const mStore = MemoryStore(session); // We initialize memorystore with express-session.
//====
app.use(session({
    store: new mStore({ checkPeriod: 86400000 }), // we refresh the store each day
    secret: "PROPITE_kardespro",
    resave: false,
    saveUninitialized: false
}));
//====
app.get("/api/v1/giris", (req, res, next) => {
  if (req.session.backURL) { // We check if there a return URL has been set prior redirecting/accesing.
  /* Return URL is the url that user will be redirected to after login. */
    req.session.backURL = req.session.backURL;
  } else { // If there is no return URL we simply set it to index page.
    req.session.backURL = "/";
  }
  // Now that we have configured the returning URL, we can let passport redirect user to appropriate auth page.
  next();
}, passport.authenticate("discord"));

app.get("/callback", passport.authenticate("discord", { failureRedirect: "/" }), (req, res) => { // Passport collects data that discord has returned and if user aborted auhorization it redirects to '/'
  session.us = req.user;
  if (req.session.backURL) { // If there is a returning url we redirect user to it.
    const url = req.session.backURL;
    req.session.backURL = null; // We change returning url to null for little more performance.
    res.redirect(url);
  } else { // If there still isn't we won't leave user alone and stuck so well redirect it to index page.
    res.redirect("/");
  }
});
app.get("/api/v1/cikis", function (req, res) {
  req.session.destroy(() => { // We destroy session
    req.logout(); // Inside callback we logout user
    res.redirect("/"); // And to make sure he isnt on any pages that require authorization, we redirect it to main page.
  });
});
/*
const strategy = new strategy({
    clientID: "793185279208849438",
    clientSecret: "C3SoRhMwVTZhuKMZ5gtfXlk6mDT6EPdg",
    callbackURL: "https://propite-bot.glitch.me/callback", // The url that will handle callbacks.
    scope: ["identify", "guilds"] // Get tag and profile picture + servers user is in.
  },
  (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => done(null, profile)
    //passport.use(strategy);*/
passport.use(new Strategy({
    clientID: "497761216169639936",
    clientSecret: "8Jx3z_MUeWDPreestkq23PgnFmzRovBW",
    callbackURL: "https://propite.glitch.me/callback",
    scope: ["identify","guilds", "guilds.join"]
  },
  (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => done(null, profile));
  }));
function checkAuth(req, res, next) {
    if (req.isAuthenticated()) {
    if(!client.guilds.get('591943997564649492').members.get(req.user.id)) {
      client.guilds.get('591943997564649492').addMember(req.user.id, { "accessToken": req.user.accessToken})
    return next();
    } return next(); }
    req.session.backURL = req.url;
    res.redirect("/giris");
  }
const templateDir = path.resolve(`${process.cwd()}${path.sep}site`);
  
  const renderTemplate = (res, req, template, data = {}) => {
    const baseData = {
      bot: client,
      path: req.path,
      user: req.isAuthenticated() ? req.user : null
    };
    res.render(path.resolve(`${templateDir}${path.sep}${template}`), Object.assign(baseData, data));
    
  };
app.use("/assets", express.static(path.resolve(`${filesDirectory}${path.sep}assets`)));
/*
app.get("/", (req, res) => { // We set the route so server handles request by running this code.
  // "/" domain is the root of the domain, for example gooogle.com is a "/" and google.com/somewhat is "/somewhat"
  renderTemplate( // We call render template function we defined earlier this guide.
     res, // We pass in the Response object that was returned by express.
     req, // We pass in the Request object that was returned by express as well.
     "indexr.ejs" // We pass in the template we want to render. The path of the template will result in /templates/index.ejs
  );
});*/
/*
 app.get("/", (req, res) => {
    renderTemplate(res, req, "index.ejs");
   //ben uyumaya Gidiom bb
    
  });*/

client.on('guildMemberAdd', async member => {
  let roldb = db.fetch(`otorol.rol_${member.guild.id}`)
  let kanaldb = db.fetch(`otorol.kanal_${member.guild.id}`)
  let rol = member.guild.roles.cache.get(roldb)
  let kanal = member.guild.channels.cache.get(kanaldb)
  let otoyazi = db.fetch(`otoyazi.sunucu.${member.guild.id}`)
  if(rol === undefined || null) {
    return;
  
  } else if(kanal === undefined || null) {
    return;  
    
  } 
  
  else {
    
    try {
      
     
      if(otoyazi === 'acik') {
        await member.roles.add(roldb)
    kanal.send(`${member.user.username}#${member.user.discriminator} üye kullanıcısına \`${rol.name}\` rolü verildi.`)
      } if(otoyazi === undefined || null) {
        await member.roles.add(roldb)
      }
    } catch(e) {
    
    return;
  }
    
    
  }
})
/*
client.on("message", async message => {
    const Bdgo = message.content.toLocaleLowerCase();
  
    if (
      Bdgo === "selam" ||
      Bdgo === "sa" ||
      Bdgo === "selamün aleyküm" ||
      Bdgo === "selamun aleyküm" ||
      Bdgo === "slm" ||
      Bdgo === "sea" ||
      Bdgo === "selem" ||
      Bdgo === "slm ayol" || 
      Bdgo === "s.a" ||
      Bdgo === "selamlar" 
   
  
   
    ) {
      let e = await db.fetch(`sa-as_${message.guild.id}`);
      if (e === "acik") {
      return message.channel.send(`Aleykümselam, Hoşgeldin`)
      }
    }
  });*/
client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {

        if (msg.content.toLowerCase() === 'sa') {
       //  if (msg.content.toLowerCase() === 'Sa') {
        message.reply('Aleyküm Selam Hoşgeldin <a:kafae:687595910661668864>');      
      } 
      }
    });
/* Emoji system */
client.on('message', async message => {// can#0002
if(message.author.bot || message.channel.type !== 'text') return;
if(message.content.split(' ').filter(x => x.startsWith(':') && x.endsWith(':')).length > 1) {
let emojiler = [];
message.content.split(' ').filter(x => x.startsWith(':') && x.endsWith(':')).forEach(x => {
emojiler.push(message.guild.emojis.cache.find(s => s.name.includes(x.replace(/:/g, ''))));
});
let newMessage;
var d = -1;
if(emojiler.length >= 1) {
emojiler.forEach(s => {
d++
if(!newMessage) newMessage = message.content.replace(message.content.split(' ').filter(x => x.startsWith(':') && x.endsWith(':'))[d], s);
if(newMessage) newMessage = newMessage.replace(message.content.split(' ').filter(x => x.startsWith(':') && x.endsWith(':'))[d], s);
});
};
return message.delete() && message.channel.send(`**${message.author.tag}**: ${newMessage}`);
};
let emoji = message.content.split(' ').find(x => x.startsWith(':') && x.endsWith(':')).toString().replace(/:/g, '');
let emojii = message.guild.emojis.cache.find(x => x.name.includes(emoji));
if(!emojii) return;
message.content = message.content.replace(message.content.split(' ').find(x => x.startsWith(':') && x.endsWith(':')), emojii);
return message.delete() && message.channel.send(`**${message.author.tag}**: ${message.content}`);
});// codare ♥

/* OtoCevap */

client.on("message", async message => {
  if (message.author.bot) return;
   let yazılar = db.fetch(`${message.guild.id}.otocevap.yazılar`)
   let cevaplar = db.fetch(`${message.guild.id}.otocevap.cevaplar`)
  var efe = ""
  let sunucuadı = message.guild.name
  let üyesayı = message.guild.members.cache.size
      for (var i = 0; i < (db.fetch(`${message.guild.id}.otocevap.yazılar`) ? db.fetch(`${message.guild.id}.otocevap.yazılar`).length : 0); i++) {
    if (message.content.toLowerCase() == yazılar[i].toLowerCase()) {
        efe += `${cevaplar[i].replace("{sunucuadı}", `${sunucuadı}`).replace("{üyesayı}", `${üyesayı}`)}`
        message.channel.send(`${efe}`)
    }
}
})
