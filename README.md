# Discord-CommandLine
Discord-CommandLine is a template for a discord bot, made to simply add custom commands & run CMD commands on the local machine.

### Features
* Create custom commands for a Discord bot.
* Run windows CMD commands on the local machine.
* Run JS scripts.

### Requirements

* Nodejs (npm)

<br/><br/>


## Setup

#### Step 1
Run `setup.bat` to create all the base files & install dependencies.
<br/>

#### Step 2
Add your bot token & the ID of your discord server channel in the `user/options.json` files. You can obtain a token from the [Discord Dev Protal](https://discord.com/developers/applications) after having created a new Application & Discord bot.
```
{
    "token":"",
    "channel_ID":"",
    "prefix":"$",
    "allowJS":"false",
    "log":"true"
}
```
See how you can obtain your channel ID [here](https://www.swipetips.com/how-to-get-channel-id-in-discord/)

See how to obtain a Discord Bot & its token [here](https://www.writebots.com/discord-bot-token/)

<br/>

#### Step 3 (Optional)
Add custom command bindings in the `user/commands.js` file.

#### Step 4
Launch `run.bat` to start the bot.

<br/><br/>

## Run Windows CMD commands

#### $cmd
```
$cmd yourCMDcommand
```

##### Example

User input in discord channel :
```
$cmd dir
```
Bot reply :
```
Volume in drive C is Windows
 Volume Serial Number is XXXX-XXXX

 Directory of C:\Your\Path\to\repo\Discord-CommandLine\build

2021-02-24  09:47 AM    <DIR>          .
2021-02-24  09:47 AM    <DIR>          ..
2021-02-24  11:36 AM             3,312 index.js
               1 File(s)          3,312 bytes
               2 Dir(s)  74,909,536,256 bytes free
```

##### Add `&&` to write multiple cmd commands

try :
```
$cmd cd.. && dir
```

<br/><br/>

## Add Custom Commands

Add the custom commands in `user/commands.js`.

```js
commands.add('COMMAND_NAME', function , permissions);
```

<br/><br/>

## Custom Command examples



#### Simple command
```js
commands.add('ping',() => (
    'pong'
));
```

User input in discord channel :
```
$ping
```

Bot reply :
```
pong
```

<br/>

#### Command with arguments
```js
commands.add('mult',(arg) => (
    arg[0] * arg[1]
));
```
User input in discord channel :
```
$mult 4 5
```

Bot reply :
```
20
```

<br/>

#### Command with no return
```js
commands.add('loop',(arg) => {
    for (let i = 0; i < arg[0]; i++) {
        msg.channel.send(i);
    }
});
```
User input in discord channel :
```
$loop 4
```

Bot reply :
```
0
1
2
3
Executed command, no output.
```

<br/><br/>
#### Add permissions to a command


```js
commands.add('ping',(arg) => {
    'pong'
},['UserA','UserC']);
```
`UserB` would not be able to use this command while `UserA` & `UserC` have access. You might want to disable `allowJS` because this allows for permissions changes.
<br/><br/>

## Run JS scripts

The `allowJS` property in `user/options.json` should be set to `"true"` for the feature to be enabled.

#### Example

User input in discord channel :

```
    ```js
        let a = 10;
        let b = 4;
        msg.channel.send(a+b);
    ```
```

Bot reply :
```
14
```
