echo off

set FLASK_ENV=development

set FLASK_APP=Apollo.py

start cmd /k flask run

TIMEOUT /T 4

start cmd /k ping -t 127.0.0.1
