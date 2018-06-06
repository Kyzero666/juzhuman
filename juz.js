
const Discord = require('discord.js');
const unicus = new Discord.Client();
const weather = require('weather-js');
const prefix = '-';
let cooldown = new Set();
let cdsec = 5;

//    const blacklisted = [ID1, ID2, ID3]
//bot.on('message', message => {
//for (var i in blacklisted) {
//if(message.author.id === blacklisted[i]) return;
//}
//});﻿

unicus.on('ready', function() {
    console.log('Unicus started.');
});

unicus.on('message', function(message) {
  if(message.author.equals(unicus.user)) return;

      if (!message.content.startsWith(prefix)) return;
      if(cooldown.has(message.author.id)){
        message.delete();
        return message.reply('You have to wait 5 sec between commands.')
      }
      if(!message.member.hasPermission('ADMINISTRATOR')){
          cooldown.add(message.member.id);
       }
        setTimeout(() => {
          cooldown.delete(message.author.id)
        }, cdsec * 1000)

      var caseargs = message.content.substring(prefix.length).split(' ');
      var decisions = [
              'Yes',
              'No',
              'Maybe',
              'No Comment'
      ];

      var deci = [
              'Kyzero',
              'Teestroy',
              'juzhuman',
              'Me'
      ];

          var rps = [
            ':v:',
            ':hand_splayed:',
            ':fist:'
          ];

      switch (caseargs[0].toUpperCase()) {
        case 'WEBSITE':
            message.channel.send('http://toramnexus.cf/').then(message => {message.delete(60000)});
            break;
        case 'WEBSITEPASSWORD':
            message.channel.send('**2404** *april2018*').then(message => {message.delete(60000)});
            break;
        case 'WEBSITEPASS':
            message.channel.send('**2404** *april2018*').then(message => {message.delete(60000)});
            break;
        case 'PASS':
            message.channel.send('**2404** *april2018*').then(message => {message.delete(60000)});
            break;
//        case 'DISCORD':
//            message.channel.send('https://bit.do/nexusgroup');
//            break;
        case 'RULES':
            message.channel.send(['','```md','1. Contribution Points','2. Friendly & be nice to others','3. NO SCAM','4. Respect each others','5. Only "English" in guild chat','6. Be proud of our guild','```']).then(message => {message.delete(60000)});
            break;
        case 'COOKIES':
            message.channel.send(':cookie::cookie::cookie::cookie::cookie::cookie:').then(message => {message.delete(60000)});
            break;
        case 'RANK':
            message.channel.send(['','```md','1. Guild Master','2. Officer Master','3. Senior Officer','4. Officer','5. Junior Officer','6. Recruiter','7. Member','8. New Member','```']).then(message => {message.delete(60000)});
            break;
        case 'RANKS':
            message.channel.send(['','```md','1. Guild Master','2. Officer Master','3. Senior Officer','4. Officer','5. Junior Officer','6. Recruiter','7. Member','8. New Member','```']).then(message => {message.delete(60000)});
            break;
        case 'BENEFIT':
            message.channel.send(['','```md','1. FREE Refinement (0-9)','Including Armor, Additional and Weapons. No Slot, 1 Slot or 2 Slot.','Discount 15% compare to market price from E-S.','','2. FREE 3-Locks Service','Provide the same dyes or appearances to get 4/5-Locks Service.(FREE)','','3. FREE Stating Service','Discount 10% compare to market price if using stating service materials.','','4. FREE Crafting','Providing with the materials. Success rate and Slots are not guaranteed.','Discount 10% compare to market price if buying specific weapons or armors.','','5. Guild Events','Various reward from range of spina, crysta, armor, dyes, appearances, etc. Depending majority how people are active.','','6. Nightmare Crystal','Max price will be 50,000 Spina for 4 stack of Nightmare Crystal (99).','','7. Monthly Care Package','Choose from ONE these 3 OPTIONS per month```']);
            break;
        case 'BENEFITS':
            message.channel.send(['','```md','1. FREE Refinement (0-9)','Including Armor, Additional and Weapons. No Slot, 1 Slot or 2 Slot.','Discount 15% compare to market price from E-S.','','2. FREE 3-Locks Service','Provide the same dyes or appearances to get 4/5-Locks Service.(FREE)','','3. FREE Stating Service','Discount 10% compare to market price if using stating service materials.','','4. FREE Crafting','Providing with the materials. Success rate and Slots are not guaranteed.','Discount 10% compare to market price if buying specific weapons or armors.','','5. Guild Events','Various reward from range of spina, crysta, armor, dyes, appearances, etc. Depending majority how people are active.','','6. Nightmare Crystal','Max price will be 50,000 Spina for 4 stack of Nightmare Crystal (99).','','7. Monthly Care Package','Choose from ONE these 3 OPTIONS per month```']);
            break;
        case 'TOPCONTRIB':
            message.channel.send(['','```md','Top Contribution Points in mid May','1. •Rook','2. *Liea*','3. "Ania"```']).then(message => {message.delete(60000)});
            break;
        case 'EVENTS':
            message.channel.send(['','```md','1. Attacker Rank','2. Quiz(5-10)','3. Musical Chair','4. Maze Land','5. Fashion Show','6. Pickup Lines','7. Scramble Words','8. Contribution Points','NOTE: You can now navigate using -e(1 to 8)','```']).then(message => {message.delete(60000)});
            break;
        case 'INTRO':
            message.channel.send(['','```','INTRODUCTION of YOURSELF to let everyone knows your IGN','Format example are below','Name(nickname): Uni/Cus/Unicus','IGN(In Game Name): >Unicus<','```']).then(message => {message.delete(60000)});
            break;
        case 'INTROD':
            message.channel.send(['','```','INTRODUCTION of YOURSELF to let everyone knows your IGN','Format example are below','Name(nickname): Uni/Cus/Unicus','IGN(In Game Name): >Unicus<','```']).then(message => {message.delete(60000)});
            break;
        case 'EVENT':
            message.channel.send(['','```md','1. Attacker Rank','2. Quiz(5-10)','3. Musical Chair','4. Maze Land','5. Fashion Show','6. Pickup Lines','7. Scramble Words','8. Contribution Points```']).then(message => {message.delete(60000)});
            break;
            case 'E1':
                message.channel.send(['','```prolog','Attacker Rank','```','```','-Forming 1 or 3 parties members. (3 or 9 members attacker)','-Each party will get 3 or 5 battle with <CERTAIN BOSSES>','-If the same person claim attacker 3 times it will declare',' a winner on THAT PARTY.','(Do note that it need to wait for the others party to finish',' if they arent finish yet.)','-All party should have 1 winner (If 3 party are assemble)','-All the winner will joined into 1 party to claim the reward',' (3 or 5 battle)','```']).then(message => {message.delete(60000)});
                message.channel.send(['','```prolog','RULES','```','```','-Cannot switch character once the event is started','-Cannot use PROVOKE skill','-MUST HAVE CHARACTER LEVEL 150','-MUST HAVE TIER4 SKILL','-Must met certain LEVEL condition level 70-150',' (depend on members)','-Must be range level -/+ 3','-Cannot use 2 account at the same time.','(example level80, But Unicus can join with level83','(have 150 char)','-ONLY CERTAIN VP/OFFICERS CAN JOINED. DEFINITELY NOT KAZUO XD','-If broke the rules, you will be disqualified from that events.','```']).then(message => {message.delete(60000)});
                break;
            case 'E2':
                message.channel.send(['','```prolog','Quiz','```','```','-Will be on DISCORD only.','-Question related/unrelated to Toram.','-5 to 10 questions.','-5 seconds is the time of each question','-Every correct and fastest answer will be given 10 points',' Second would get 8 points and Third will get 5 points.',' 0 on Fourth.','-Highest Point First, Second and Third will get the reward.','```']).then(message => {message.delete(60000)});
                message.channel.send(['','```prolog','RULES','```','```','-Cannot spam more than 2 times','-Dont cursing.','-Only guild member can join. (Including VP/OFFICERS)','-Cannot use 2 account','-If broke the rules, you will be disqualified from that events.','```']).then(message => {message.delete(60000)});
            break;
            case 'E3':
                message.channel.send(['','```prolog','Musical Chair','```','```','-5 to 11 members can play.','-VP/OFFICERS will count from 5 to 1','-Event will be held in LAND','-Anyone can WATCH (include outsider)','-The person who left out without chair will be disqualified','-Playing until 1 person 1 chair is left. Reward will be given.','```']).then(message => {message.delete(60000)});
                message.channel.send(['','```prolog','RULES','```','```','-Cannot sit on the chair early.','-If stop walking/running while waiting the count down,',' automatic disqualified.','-Only guild member can join. (Including VP/OFFICERS)','-Cannot use 2 account','-If broke the rules, you will be disqualified from that events.','```']).then(message => {message.delete(60000)});
                break;
            case 'E4':
                message.channel.send(['','```prolog','Maze Land','```','```','-4 to 50 members can play','-VP/OFFICERS will count from 3 to 1','-Met certain OBJECTIVE e.g. Treasure Chest','-Certain VP/OFFICERS will stand on Treasure Chest to make sure',' you did get there.','-Certain VP/OFFICERS will stand at the ending of the Maze Land.','-The 3 person come first will be given the Reward','```']).then(message => {message.delete(60000)});
                message.channel.send(['','```prolog','RULES','```','```','-Disqualified if not met certain Condition.','-Only guild member can join. (Including VP/OFFICERS)','-Cannot use 2 account','-If broke the rules, you will be disqualified from that events.','```']).then(message => {message.delete(60000)});
                break;
            case 'E5':
                message.channel.send(['','```prolog','Fashion Show','```','```','-3, 6, 9 or 12 members','-Will be held in El Scaro or Hora(public)','-VP/OFFICERS will takes a vote in public.','-All dyes, weapons, additional and armor included.','-The highest vote of 2 person will be given the Reward','```']).then(message => {message.delete(60000)});
                message.channel.send(['','```prolog','RULES','```','```','-Cannot used ANY AVATARS','-Only guild member can join. (Including VP/OFFICERS)','-Cannot use 2 account','-No spamming','-If broke the rules, you will be disqualified from that events.','```']).then(message => {message.delete(60000)});
                break;
            case 'E6':
                message.channel.send(['','```prolog','Pickup Lines','```','```','-ALL guild members can join','-Will be held only in Discord group #Events6','-1 female VP/OFFICERS will be the target','-Only 1 member will be given the Reward','```']).then(message => {message.delete(60000)});
                message.channel.send(['','```prolog','RULES','```','```','-Only English','-Cannot used cursing words','-Only guild member can join. (Including VP/OFFICERS)','-Dont spam or fighting.','-Nothing related to personal or private problems matter.','-If broke the rules, you will be disqualified from that events.','```']).then(message => {message.delete(60000)});
                break;
            case 'E7':
                message.channel.send(['','```prolog','Scramble Words','```','```','-ALL guild members can play','-Will be held only in Discord group #Events7','-VP/OFFICERS will give the scramble words.','-The longest words used in that scramble words will be given',' the Reward','```']).then(message => {message.delete(60000)});
                message.channel.send(['','```prolog','RULES','```','```','-Cannot used cursing words','-Only guild member can join. (Including VP/OFFICERS)','-Dont spam or fighting.','-Cannot used any others letters.','-ONLY USED LETTER THAT IS GIVEN','-If broke the rules, you will be disqualified from that events.','```']).then(message => {message.delete(60000)});
                break;
            case 'E8':
                message.channel.send(['','```prolog','Contribution Points','```','```','-ALL guild members can join','-All info is in our official nexus website(guide page)','-The first 3 member with highest contribution will be given',' the Reward','```']).then(message => {message.delete(60000)});
                message.channel.send(['','```prolog','RULES','```','```','-Only guild member can join. (Including VP/OFFICERS)','-Must follow -Nexus- rules','-If broke the rules, you will be disqualified from that events.','```']).then(message => {message.delete(60000)});
                break;
        case 'NEXUS':
            message.channel.send(['','```','We are one big happy family that share the same belief,','shares different ideas and different play styles.','Although we not the same country and different ages,','-Nexus- is the connection that hold us together.','A connection link for all the server into 1 guild, 1 community, 1 family. and this is just our beginning.','```']).then(message => {message.delete(60000)});
            break;
        case 'HELP':
            message.channel.send(['','-website','-websitepassword','-rules','-rank','-benefits','-topcontrib','-events','-cookies','-nexus','-intro','-senpai (question)','-roll','-weather (namePlace)','-rps<Input :fist: :raised_hand: :v:>','-help']).then(message => {message.delete(60000)});
            break;
        case 'WEATHER':
            message.channel.send(`Requesting weather from the satellite..`).then(function(w) {
              w.delete()
            })
            break;
        case 'SAYZX':
            message.channel.send(`Sec lemme copy-paste for you master..`).then(function(s) {
              s.delete()
            })
            break;
        case 'PING':
        message.channel.send(`Requesting ms speed from the brains..`).then(function(m) {
          m.edit(`Success! ${m.createdTimestamp - message.createdTimestamp}ms`).then(function(m) {
          m.delete(10000);
              })
            })
            break;
        case 'SENPAI':
            if (caseargs[2]) message.channel.send(decisions[Math.floor(Math.random() * decisions.length)]);
            else message.channel.send('Sorry, what was that again?');
            break;
        case 'ROLL':
        message.channel.send(`Throwing and rolling the dice..`).then(function(di) {
          di.delete()
        })
            break;
        case 'TESTING':
            message.channel.send('DELAYING FOR 3 SECONDS');
            sleep.sleep(2);
            break;
        case "RPS✌":
          if (caseargs[0]) message.reply(rps[Math.floor(Math.random() * rps.length)]);
          else message.reply('Input :fist: :raised_hand: :v: with no spaces example: -rps:v:');
            break;
        case "RPS✋":
          if (caseargs[0]) message.reply(rps[Math.floor(Math.random() * rps.length)]);
          else message.reply('Input :fist: :raised_hand: :v: with no spaces example: -rps:v:');
            break;
        case 'RPS✊':
          if (caseargs[0]) message.reply(rps[Math.floor(Math.random() * rps.length)]);
          else message.reply('Input :fist: :raised_hand: :v: with no spaces example: -rps:v:');
            break;
        default:
            message.channel.send('Invalid commands').then(message => {message.delete(10000)});
            break;
          }
  });


  unicus.on('message', function(message) {
    if(message.author.unicus) return;


    var msg = message.content.split(' ')[0].toUpperCase()
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(' ');
    let args = message.content.split(' ').slice(1);
    let suffix = args.join(' ')
    var rolldicee = [
      'You roll 1!',
      'You roll 1!',
      'You roll 1!',
      'You roll 1!',
      'You roll 1!',
      'You roll 1!',
      'You roll 2!',
      'You roll 2!',
      'You roll 2!',
      'You roll 2!',
      'You roll 2!',
      'You roll 3!',
      'You roll 3!',
      'You roll 3!',
      'You roll 3!',
      'You roll 4!',
      'You roll 4!',
      'You roll 4!',
      'You roll 5!',
      'You roll 5!',
      'You roll 6!'
    ];

    if(msg === "-SAYZX") {
       message.delete(0);
      if(suffix) {
        message.channel.send(suffix)
      } else {
        message.channel.send('nothing to say master')
      }
    }

    if(msg === "-ROLL") {
      message.delete(120000);
      if(message.reply(rolldicee[Math.floor(Math.random() * rolldicee.length)]).then(message => {message.delete(120000)})); {
      }
    }

    if (msg === 'RESPOND') {
        message.channel.send('No error was found');
    }
    if (msg === 'HI :3') {
      message.channel.send('Hi! :grin:');
    }
      if (msg === 'HI') {
        message.channel.send('Hi! :grin:');
      }
      if (msg === 'HII') {
        message.channel.send('Hi! :grin:');
      }
      if (msg === 'HEY') {
        message.channel.send('Hi! :grin:');
      }
      if (msg === 'HEYY') {
        message.channel.send('Hi! :grin:');
      }
      if (msg === 'HELLO') {
        message.channel.send('Hi! :grin:');
      }
      if (msg === 'HELLOO') {
        message.channel.send('Hi! :grin:');
      }
      if (msg === 'HI <@436427031056744499>') {
        message.channel.send('Hi! :grin:');
      }
      if (msg === 'HII <@436427031056744499>') {
        message.channel.send('Hi! :grin:');
      }
      if (msg === 'HEY <@436427031056744499>') {
        message.channel.send('Hi! :grin:');
      }
      if (msg === 'HEYY <@436427031056744499>') {
        message.channel.send('Hi! :grin:');
      }
      if (msg === 'HELLO <@436427031056744499>') {
        message.channel.send('Hi! :grin:');
      }
      if (msg === 'HELLOO <@436427031056744499>') {
        message.channel.send('Hi! :grin:');
      }
      if (msg === '<@436427031056744499> HI') {
        message.channel.send('Hi! :grin:');
      }
      if (msg === '<@436427031056744499> HII') {
        message.channel.send('Hi! :grin:');
      }
      if (msg === '<@436427031056744499> HEY') {
        message.channel.send('Hi! :grin:');
      }
      if (msg === '<@436427031056744499> HEYY') {
        message.channel.send('Hi! :grin:');
      }
      if (msg === '<@436427031056744499> HELLO') {
        message.channel.send('Hi! :grin:');
      }
      if (msg === '<@436427031056744499> HELLOO') {
        message.channel.send('Hi! :grin:');
      }
      if (msg === 'HELLOY GUYS') {
        message.channel.send('Hi! :grin:');
      }
      if (msg === 'HELLO ALL') {
        message.channel.send('Hi! :grin:');
      }


      //calling out ky

      if (msg === 'KYY') {
        message.channel.send('┬─┬ ノ( ゜-゜ノ)');

        message.channel.send('(╯°□°）╯︵ ┻━┻ ');
      }
      if (msg === 'KYZERO') {
        message.channel.send('┬─┬ ノ( ゜-゜ノ)');

        message.channel.send('(╯°□°）╯︵ ┻━┻ ');
      }
      if (msg === 'KYZERO SAMA') {
        message.channel.send('┬─┬ ノ( ゜-゜ノ)');

        message.channel.send('(╯°□°）╯︵ ┻━┻ ');
      }
      if (msg === 'BOSS') {
        message.channel.send('┬─┬ ノ( ゜-゜ノ)');

        message.channel.send('(╯°□°）╯︵ ┻━┻ ');
      }
      if (msg === 'BOSSS') {
        message.channel.send('┬─┬ ノ( ゜-゜ノ)');

        message.channel.send('(╯°□°）╯︵ ┻━┻ ');
      }
      if (msg === 'GM') {
        message.channel.send('┬─┬ ノ( ゜-゜ノ)');

        message.channel.send('(╯°□°）╯︵ ┻━┻ ');
      }
      if (msg === 'GM KY') {
        message.channel.send('┬─┬ ノ( ゜-゜ノ)');

        message.channel.send('(╯°□°）╯︵ ┻━┻ ');
      }
      if (msg === 'KY GM') {
        message.channel.send('┬─┬ ノ( ゜-゜ノ)');

        message.channel.send('(╯°□°）╯︵ ┻━┻ ');
      }
    if (msg === 'KY?') {
      message.channel.send('┬─┬ ノ( ゜-゜ノ)');

      message.channel.send('(╯°□°）╯︵ ┻━┻ ');
    }



      //how are you unicus?

      if (msg === 'HOW ARE YOU UNI?') {
        message.channel.send('Great!');
        message.channel.send('How about you? :smiley:');
      }
      if (msg === 'HOW ARE YOU UNI') {
        message.channel.send('Great!');
        message.channel.send('How about you? :smiley:');
      }
      if (msg === 'HOW ARE YOU UNICUS?') {
        message.channel.send('Great!');
        message.channel.send('How about you? :smiley:');
      }
      if (msg === 'HOW ARE YOU UNICUS') {
        message.channel.send('Great!');
        message.channel.send('How about you? :smiley:');
      }
      if (msg === 'HOW ARE YOU CUS?') {
        message.channel.send('Great!');
        message.channel.send('How about you? :smiley:');
      }
      if (msg === 'HOW ARE YOU CUS') {
        message.channel.send('Great!');
        message.channel.send('How about you? :smiley:');
      }
      if (msg === 'HRU UNICUS?') {
        message.channel.send('Great!');
        message.channel.send('How about you? :smiley:');
      }
      if (msg === 'HRU CUS?') {
        message.channel.send('Great!');
        message.channel.send('How about you? :smiley:');
      }
      if (msg === 'HRU UNI?') {
        message.channel.send('Great!');
        message.channel.send('How about you? :smiley:');
      }
      if (msg === 'HRU UNI') {
        message.channel.send('Great!');
        message.channel.send('How about you? :smiley:');
      }
      if (msg === 'HRU CUS') {
        message.channel.send('Great!');
        message.channel.send('How about you? :smiley:');
      }
      if (msg === 'HRU UNICUS') {
        message.channel.send('Great!');
        message.channel.send('How about you? :smiley:');
      }
      if (msg === 'HOW R YOU CUS') {
        message.channel.send('Great!');
        message.channel.send('How about you? :smiley:');
      }
      if (msg === 'HOW R YOU UNI') {
        message.channel.send('Great!');
        message.channel.send('How about you? :smiley:');
      }
      if (msg === 'HOW R YOU UNICUS') {
        message.channel.send('Great!');
        message.channel.send('How about you? :smiley:');
      }
      if (msg === 'HOW R YOU CUS?') {
        message.channel.send('Great!');
        message.channel.send('How about you? :smiley:');
      }
      if (msg === 'HOW R YOU UNI?') {
        message.channel.send('Great!');
        message.channel.send('How about you? :smiley:');
      }
      if (msg === 'HOW R YOU UNICUS?') {
        message.channel.send('Great!');
        message.channel.send('How about you? :smiley:');
      }
      if (msg === 'HOW R U CUS') {
        message.channel.send('Great!');
        message.channel.send('How about you? :smiley:');
      }
      if (msg === 'HOW R U UNI') {
        message.channel.send('Great!');
        message.channel.send('How about you? :smiley:');
      }
      if (msg === 'HOW R U UNICUS') {
        message.channel.send('Great!');
        message.channel.send('How about you? :smiley:');
      }
      if (msg === 'HOW R U CUS?') {
        message.channel.send('Great!');
        message.channel.send('How about you? :smiley:');
      }
      if (msg === 'HOW R U UNI?') {
        message.channel.send('Great!');
        message.channel.send('How about you? :smiley:');
      }
      if (msg === 'HOW R U UNICUS?') {
        message.channel.send('Great!');
        message.channel.send('How about you? :smiley:');
      }


    if (msg === 'HOW ARE YOU? <@436427031056744499>') {
      message.channel.send('Great!');
      message.channel.send('How about you? :smiley:');
    }
    if (msg === 'HOW ARE YOU <@436427031056744499>') {
      message.channel.send('Great!');
      message.channel.send('How about uni? :smiley:');
    }
    if (msg === 'HOW R YOU? <@436427031056744499>') {
      message.channel.send('Great!');
      message.channel.send('How about you? :smiley:');
    }
    if (msg === 'HOW R YOU <@436427031056744499>') {
      message.channel.send('Great!');
      message.channel.send('How about uni? :smiley:');
    }
    if (msg === 'HOW R U <@436427031056744499>') {
      message.channel.send('Great!');
      message.channel.send('How about you? :smiley:');
    }
    if (msg === 'HOW R U? <@436427031056744499>') {
      message.channel.send('Great!');
      message.channel.send('How about you? :smiley:');
    }


    if (msg === '<@436427031056744499>HOW ARE YOU') {
      message.channel.send('Great!');
      message.channel.send('How about you? :smiley:');
    }
    if (msg === '<@436427031056744499>HOW ARE YOU?') {
      message.channel.send('Great!');
      message.channel.send('How about you? :smiley:');
    }
    if (msg === '<@436427031056744499>HOW R YOU') {
      message.channel.send('Great!');
      message.channel.send('How about you? :smiley:');
    }
    if (msg === '<@436427031056744499>HOW R YOU?') {
      message.channel.send('Great!');
      message.channel.send('How about you? :smiley:');
    }
    if (msg === '<@436427031056744499>HOW R U') {
      message.channel.send('Great!');
      message.channel.send('How about you? :smiley:');
    }
    if (msg === '<@436427031056744499>HOW R U?') {
      message.channel.send('Great!');
      message.channel.send('How about you? :smiley:');
    }
    if (msg === '<@436427031056744499> HOW ARE YOU') {
      message.channel.send('Great!');
      message.channel.send('How about you? :smiley:');
    }
    if (msg === '<@436427031056744499> HOW ARE YOU?') {
      message.channel.send('Great!');
      message.channel.send('How about you? :smiley:');
    }
    if (msg === '<@436427031056744499> HOW R YOU?') {
      message.channel.send('Great!');
      message.channel.send('How about you? :smiley:');
    }
    if (msg === '<@436427031056744499> HOW R YOU') {
      message.channel.send('Great!');
      message.channel.send('How about you? :smiley:');
    }
    if (msg === '<@436427031056744499> HOW R U') {
      message.channel.send('Great!');
      message.channel.send('How about you? :smiley:');
    }
    if (msg === '<@436427031056744499> HOW R U?') {
      message.channel.send('Great!');
      message.channel.send('How about you? :smiley:');
    }


    if (msg === 'HRU <@436427031056744499>') {
      message.channel.send('Great!');
      message.channel.send('How about you? :smiley:');
    }
    if (msg === 'HRU? <@436427031056744499>') {
      message.channel.send('Great!');
      message.channel.send('How about you? :smiley:');
    }
    if (msg === '<@436427031056744499>HRU') {
      message.channel.send('Great!');
      message.channel.send('How about you? :smiley:');
    }
    if (msg === 'HRU? <@436427031056744499>HRU?') {
      message.channel.send('Great!');
      message.channel.send('How about you? :smiley:');
    }
    if (msg === '<@436427031056744499> HRU') {
      message.channel.send('Great!');
      message.channel.send('How about you? :smiley:');
    }
    if (msg === 'HRU? <@436427031056744499> HRU?') {
      message.channel.send('Great!');
      message.channel.send('How about you? :smiley:');
    }




      if (msg === '<@436427031056744499>') {
        message.channel.send('yes? sorry busy atm');
      }
      if (msg === 'UNICUS') {
        message.channel.send('yes? sorry busy atm');
      }
      if (msg === 'UNI') {
        message.channel.send('yes? sorry busy atm');
      }
      if (msg === 'CUS') {
        message.channel.send('yes? sorry busy atm');
      }
      if (msg === 'UNICUS SAMA') {
        message.channel.send('yes? sorry busy atm');
      }
      if (msg === 'UNICUS SENPAI') {
        message.channel.send('yes? sorry busy atm');
      }
      if (msg === 'UNI SAMA') {
        message.channel.send('yes? sorry busy atm');
      }
      if (msg === 'UNI SENPAI') {
        message.channel.send('yes? sorry busy atm');
      }
      if (msg === 'CUS SAMA') {
        message.channel.send('yes? sorry busy atm');
      }
      if (msg === 'CUS SENPAI') {
        message.channel.send('yes? sorry busy atm');
      }
      if (msg === 'UNICUS?') {
        message.channel.send('yes? sorry busy atm');
      }
      if (msg === 'UNI?') {
        message.channel.send('yes? sorry busy atm');
      }
      if (msg === 'CUS?') {
        message.channel.send('yes? sorry busy atm');
      }
      if (msg === 'UNICUS SAMA?') {
        message.channel.send('yes? sorry busy atm');
      }
      if (msg === 'UNICUS SENPAI?') {
        message.channel.send('yes? sorry busy atm');
      }
      if (msg === 'UNI SAMA?') {
        message.channel.send('yes? sorry busy atm');
      }
      if (msg === 'UNI SENPAI?') {
        message.channel.send('yes? sorry busy atm');
      }
      if (msg === 'CUS SAMA?') {
        message.channel.send('yes? sorry busy atm');
      }
      if (msg === 'CUS SENPAI?') {
        message.channel.send('yes? sorry busy atm');
      }
      if (msg === 'UNICHII') {
        message.channel.send('lol');
      }
      if (msg === 'UNICHI') {
        message.channel.send('lol');
      }
      if (msg === 'UNICHII?') {
        message.channel.send('lol');
      }
      if (msg === 'UNICHI?') {
        message.channel.send('lol');
      }
      if (msg === 'UNICHI SAMA') {
        message.channel.send('lol');
      }
      if (msg === 'UNICHI SENPAI') {
        message.channel.send('lol');
      }
      if (msg === 'UNICHII SAMA') {
        message.channel.send('lol');
      }
      if (msg === 'UNICHII SENPAI') {
        message.channel.send('lol');
      }

      //replying how are you with unicus

      if (msg === 'GOOD <@436427031056744499>') {
        message.channel.send('AWESOME!');
      }
      if (msg === 'GREAT <@436427031056744499>') {
        message.channel.send('AWESOME!');
      }
      if (msg === 'AWESOME <@436427031056744499>') {
        message.channel.send('AWESOME!');
      }
      if (msg === 'FINE <@436427031056744499>') {
        message.channel.send('AWESOME!');
      }
      if (msg === 'NEVER BETTER <@436427031056744499>') {
        message.channel.send('AWESOME!');
      }
      if (msg === 'GOOD ^^ <@436427031056744499>') {
        message.channel.send('AWESOME!');
      }
      if (msg === 'GOOD :3 <@436427031056744499>') {
        message.channel.send('AWESOME!');
      }
      if (msg === 'GOOD ;3 <@436427031056744499>') {
        message.channel.send('AWESOME!');
      }
      if (msg === 'GREAT TOO <@436427031056744499>') {
        message.channel.send('AWESOME!');
      }
      if (msg === 'GOOD<@436427031056744499>') {
        message.channel.send('AWESOME!');
      }
      if (msg === 'GREAT<@436427031056744499>') {
        message.channel.send('AWESOME!');
      }
      if (msg === 'AWESOME<@436427031056744499>') {
        message.channel.send('AWESOME!');
      }
      if (msg === 'FINE<@436427031056744499>') {
        message.channel.send('AWESOME!');
      }
      if (msg === 'NEVER BETTER<@436427031056744499>') {
        message.channel.send('AWESOME!');
      }
      if (msg === 'GOOD ^^<@436427031056744499>') {
        message.channel.send('AWESOME!');
      }
      if (msg === 'GOOD :3<@436427031056744499>') {
        message.channel.send('AWESOME!');
      }
      if (msg === 'GOOD ;3<@436427031056744499>') {
        message.channel.send('AWESOME!');
      }
      if (msg === 'GREAT TOO<@436427031056744499>') {
        message.channel.send('AWESOME!');
      }


      if (msg === '<@436427031056744499> GOOD') {
        message.channel.send('AWESOME!');
      }
      if (msg === '<@436427031056744499> GREAT') {
        message.channel.send('AWESOME!');
      }
      if (msg === '<@436427031056744499> AWESOME') {
        message.channel.send('AWESOME!');
      }
      if (msg === '<@436427031056744499> FINE') {
        message.channel.send('AWESOME!');
      }
      if (msg === '<@436427031056744499> NEVER BETTER') {
        message.channel.send('AWESOME!');
      }
      if (msg === '<@436427031056744499> GOOD ^^') {
        message.channel.send('AWESOME!');
      }
      if (msg === '<@436427031056744499> GOOD :3') {
        message.channel.send('AWESOME!');
      }
      if (msg === '<@436427031056744499> GOOD ;3') {
        message.channel.send('AWESOME!');
      }
      if (msg === '<@436427031056744499> GREAT TOO') {
        message.channel.send('AWESOME!');
      }

    //bye, see ya

    if (msg === 'BYE') {
    message.channel.send('Bubye');
    }
    if (msg === 'SEE YA') {
    message.channel.send('Bubye');
    }
    if (msg === 'CYA') {
    message.channel.send('Bubye');
    }
    if (msg === 'BYE BYE') {
    message.channel.send('Bubye');
    }
    if (msg === 'SEE YOU GUYS LATER') {
    message.channel.send('Bubye');
    }
    if (msg === 'BYE ALL') {
    message.channel.send('Bubye');
    }
    if (msg === 'CYA ALL') {
    message.channel.send('Bubye');
    }
    if (msg === 'BYE GUYS') {
    message.channel.send('Bubye');
    }
    if (msg === 'CYA GUYS') {
    message.channel.send('Bubye');
    }
    if (msg === 'BYE BYE ALL') {
    message.channel.send('Bubye');
    }
    if (msg === 'BYE BYE GUYS') {
    message.channel.send('Bubye');
    }
    if (msg === 'SEE YA GUYS LATER') {
    message.channel.send('Bubye');
    }
    if (msg === 'SEE YA GUYS') {
    message.channel.send('Bubye');
    }

    if (msg === '-ME') {
    message.channel.send('You are BB of all user combined');
    }





    // Weather Command - We're going to need a new package for this, so open up the console again.
    // Lets make a basic version of this, then make it look good.

    if (msg.startsWith(prefix + 'WEATHER')) {


        weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
            if (err) message.channel.send(err);

            if (result === undefined || result.length === 0) {
                message.channel.send('**Please enter a valid location.**')
                return;
            }

            // Variables
            var current = result[0].current;
            var location = result[0].location;


            const embed = new Discord.RichEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`Weather for ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .setColor(0x00AE86)
                .addField('Timezone',`UTC${location.timezone}`, true)
                .addField('Degree Type',location.degreetype, true)
                .addField('Temperature',`${current.temperature} Degrees`, true)
                .addField('Feels Like', `${current.feelslike} Degrees`, true)
                .addField('Winds',current.winddisplay, true)
                .addField('Humidity', `${current.humidity}%`, true)


                message.channel.send({embed});
        });
    }

});

unicus.login(process.env.UNICUS_TOKEN);
