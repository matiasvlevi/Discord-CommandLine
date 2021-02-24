// RUN CMD COMMAND:
commands.add('cmd', (arg) => {
    //Combine arguments to create a batch command
    let batch = combine(arg);
    //Run command
    exec(batch,(err,stdout,stderr)=>{
        if (err) {
            msg.channel.send(stderr);
        } else {
            if (stdout.length > 0) {
                if (stdout.length >= 2000) {
                    msg.channel.send('The output of this command is too large (2000 characters or more) for discord to display...');
                } else {
                    msg.channel.send('```'+stdout+'```');
                }
            }
        }
    });

    return undefined;
});
