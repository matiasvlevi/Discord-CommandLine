
const exec = require('child_process').exec;


module.exports = function (grunt) {
  function addLine(name, ext, line) {
    exec('echo ' 
      + line 
      + ' >> ' 
      + name 
      + '.' 
      + ext, function(){
      // console.log('addedLine: ' 
      //   + line 
      //   + 'to ' 
      //   + name 
      //   + '.' 
      //   + ext
      // );
    });
  }
  function addFile(name, ext, text) {
    let lines = text.split('\n');
    for (let i = 0; i < lines.length; i++) {
      addLine(name, ext, lines[i]);
    }
  }
  grunt.registerMultiTask('write','write run batch file',function(){
    addFile('user/run', 'bat',
      "@echo off" + "\n" +
      "title Disord bot" + "\n" +
      "call grunt build" + "\n" +
      "cd build" + "\n" +
      ":a" + "\n" +
      "node index.js" + "\n" +
      "TIMEOUT /t 5 /NOBREAK" + "\n" +
      "goto a"
    );
  });
}