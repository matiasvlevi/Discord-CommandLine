const { exec } = require('child_process');
//require('./token/token.js'); //make this token hidden.
const {formatCommand} = require('./func.js');
const {commands} = require('./commands.js');
const {token,prefix,channel_ID} = require('./settings.js');
const ip = require('ip');
let dataset = [];

require('dotenv').config();
require('mathjs');
let fs = require('fs');
const Discord = require('discord.js');
const bot = new Discord.Client();


let messages = [];
let channel_ID = '';

commands.add('div2',(x)=>(x/2));
commands.add('test',(x)=> {
    return x*x;
});
commands.log();


bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});
bot.on('message', msg => {
    if (msg.author.username !== "Dann") {
        if (msg.channel.id == channelID) {
            if (msg.content.charAt(0) == prefix) {

                let input = formatCommand(msg.content);
                let param = input.param;
                let command = input.command;

                for (request of commands.list) {
                    let cond = eval(request.condition);
                    if (cond) {
                        let f = eval(request.func);
                        msg.channel.send(f(param));
                    }
                }
            } else if (msg.content.charAt(0) == "`"){
                let prefix = msg.content.slice(0,5);
                let code = msg.content.slice(5,msg.content.length-4);
                let suffix = msg.content.slice(msg.content.length-4,msg.content.length-1)
                try {
                    let js = eval(code);

                } catch(err) {

                    msg.channel.send('Syntax Error');

                }

            }
        }
    }
});

bot.login(token);
