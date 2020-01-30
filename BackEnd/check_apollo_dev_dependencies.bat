@ECHO OFF

ECHO ### Checking to see if you have all the requirements for this Apollo build ###

powershell -Command python -m pip install --upgrade pip

powershell -Command pip install python-musicpd

powershell -Command pip install Flask

powershell -Command pip install Flask-Cors

powershell -Command pip install Werkzeug

powershell -Command pip install requests

powershell -Command pip install waitress

powershell -Command pip install colorthief

ECHO ### You are up to date ###

TIMEOUT /T 5