@echo off
title Discord Bot
call grunt concat
cd build
:a
node index.js
TIMEOUT /t 5 /NOBREAK
goto a
