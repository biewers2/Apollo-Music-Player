echo off

set FLASK_ENV=development

set FLASK_APP=Apollo.py

start cmd /k flask run --with-threads

TIMEOUT /T 4

powershell -Command Test-NetConnection 127.0.0.1 -Port 5000

:loop

TIMEOUT /T 1

powershell -Command Test-NetConnection 127.0.0.1 -Port 5000

goto loop

