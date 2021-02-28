class CommandBoard {
    constructor() {
        this.list = [];
    }
    log() {
        console.log(this);
    }
    add(command,func,permissions) {
        let cond = '';
        if (typeof command !== 'string') {
            let len = command.length;
            cond+='('
            for (let i = 0; i < command.length-1; i++) {
                cond+=' command == "'+command[i]+'" ';
                cond+='||'
            }
            cond+=' command == "'+command[len-1]+'" ';
            cond+=')';
            console.log(cond);
        } else {
            cond = '( command == "'+command+'")';
        }
        let perm = 'ALL';
        if (permissions !== undefined) {
            perm = permissions;
        }
        let commandInfo = {
            condition:cond,
            func:func.toString(),
            permissions: perm
        };
        this.list.push(commandInfo);
    }
}
const commands = new CommandBoard();

module.exports = {
    commands
}
