const {formatCommand,combine,segment} = require('../lib/func.js');
const {commands} = require('../lib/commandBoard.js');
const {settings} = require('../lib/parseSettings.js');
const {exec} = require('child_process');
const fs = require('fs');
const {floor} = require('mathjs');
require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
