
const Discord = require('discord.js');
const juzhuman = new Discord.Client();
const prefix = '!';
let cooldown = new Set();
let cdsec = 1;

//    const blacklisted = [ID1, ID2, ID3]
//bot.on('message', message => {
//for (var i in blacklisted) {
//if(message.author.id === blacklisted[i]) return;
//}
//});﻿

juzhuman.on('ready', function() {
    console.log('juzhuman started.');
});

juzhuman.on('message', function(message) {
  if(message.author.equals(juzhuman.user)) return;

      if (!message.content.startsWith(prefix)) return;
      if(cooldown.has(message.author.id)){
        message.delete();
        return message.reply('You have to wait 1 hours to typing another stories.')
      }
      if(!message.member.hasPermission('ADMINISTRATOR')){
          cooldown.add(message.member.id);
        }
        setTimeout(() => {
          cooldown.delete(message.author.id)
        }, cdsec * 3000000)

juzhuman.mutes = require ('./mutes.js');
      var sleep = require('sleep');
      var caseargs = message.content.substring(prefix.length).split(' ');

      switch (caseargs[0].toUpperCase()) {
        case 'SAYZX':
            message.channel.send(`Sec lemme copy-paste for you master..`).then(function(s) {
              s.delete()
            })
            break;
        default:
            message.channel.send('Invalid commands').then(message => {message.delete(10000)});
            break;
          }
  });


  juzhuman.on('message', function(message) {
    if(message.author.juzhuman) return;


    var msg = message.content.split(' ')[0].toUpperCase()
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(' ');
    let args = message.content.split(' ').slice(1);
    let suffix = args.join(' ')


    if(msg === "!SAYZX") {
       message.delete(0);
      if(suffix) {
        message.channel.send(suffix)
      } else {
        message.channel.send('nothing to say master')
      }
    }
});

juzhuman.login(process.env.NEXUS_TOKEN);
