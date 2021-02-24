@echo off
setlocal enableDelayedExpansion

set ^"LF=^
%= This creates a Line Feed character =%
^"



set "multiline=@echo off!LF!title Discord Bot!LF!call grunt concat!LF!cd build!LF!:a!LF!node index.js!LF!TIMEOUT /t 5 /NOBREAK!LF!goto a"
echo !multiline!
echo !multiline!>run.bat

mkdir user

cd user

echo //COMMANDS HERE>commands.js

set "multiline={!LF!    "token":"",!LF!    "channel_ID":"",!LF!    "prefix":"$",!LF!    "allowJS":"false",!LF!    "log":"true"!LF!}"
echo !multiline!
echo !multiline!>options.json

cd..
echo.
echo Installing dependencies...
call npm install
del setup.bat
