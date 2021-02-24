const {settings} = require('./parseSettings.js');

function combine(params) {
    let str = '';
    for (let i = 0; i < params.length;i++) {
        str += params[i]+' ';
    }
    return str;
}


function formatCommand(string) {

    if (string.charAt(0) == settings.prefix) {
        let input = string.split(settings.prefix)[1];

        input = input.split(' ');
        let command = input[0];
        input.splice(0,1);
        let params = input;
        if (settings.log) {
            console.log(' ');
            console.log(' prefix: ',[settings.prefix],' command: ',[command],' params: ',params);
        }

        return {command:command,params:params};
    }
}


module.exports = {
    formatCommand,
    combine
}
