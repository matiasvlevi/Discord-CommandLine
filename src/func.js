

function formatCommand(string) {
    let s = string.split('$')[1];
    s = s.split(' ');
    let command = s[0];
    let param = '';
    if (s[1] !== undefined) {
        param = s[1];
    }
    return {command:command,param:param};
}


module.exports = {
    formatCommand
}
