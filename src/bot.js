
bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});
bot.on('message', msg => {
    if (msg.author.username !== "Dann") {
        if (msg.channel.id == settings.channel_ID) {
            if (msg.content.charAt(0) == settings.prefix) {

                //Read command
                let input = formatCommand(msg.content);
                let params = input.params;
                let command = input.command;

                //iterate commands & pass parameter/arguments array
                for (request of commands.list) {

                    //Apply condition
                    let cond = eval(request.condition);
                    if (cond) {
                        //Run requested function
                        let f = eval(request.func);
                        let ans = f(params);
                        if (ans !== undefined) {
                            console.log(' return: ',[ans]);
                            if (ans.length >= 2000) {
                                msg.channel.send('The output of this command is too large (2000 characters or more) for discord to display...');
                            } else {
                                msg.channel.send(ans);
                            }
                        } else {
                            //msg.channel.send('Executed command, no output.');
                        }

                    }
                }
            // Run JS code
        } else if (msg.content.charAt(0) == "`" && msg.content.charAt(1) == "`" && msg.content.charAt(2) == "`" && msg.content.charAt(3) == "j" && settings.allowJS == true){

                let pre = msg.content.slice(0,5);
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
if (settings.token.length > 0 || settings.channel_ID.length > 0) {
    if (settings.prefix.length > 0 ) {
        bot.login(settings.token);
    } else {
        console.log('Missing command prefix.');
    }
} else {
    console.log('Missing Discord Bot token or Channel ID.');
}
