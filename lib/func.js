const {settings} = require('./parseSettings.js');

function combine(params) {
    let str = '';
    for (let i = 0; i < params.length;i++) {
        str += params[i]+' ';
    }
    return str;
}
function segment(str) {
    let segSize = 2000;
    let seg = Math.floor(str.length/segSize);
    console.log('seg: ',seg)
    let ans = [];
    for (let i = 0; i < seg; i++) {
        let startpoint = i*segSize;
        ans.push(str.slice(startpoint,startpoint+segSize));
    }
    ans.push(str.slice(seg*segSize,str.length));
    console.log('ans: ',ans)
    return ans;
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
    combine,
    segment
}
