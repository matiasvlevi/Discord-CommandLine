const fs = require('fs');
const settings = JSON.parse(fs.readFileSync('../user/options.json'));
settings.allowJS = JSON.parse(settings.allowJS);
settings.log = JSON.parse(settings.log);
module.exports = {
    settings
}
