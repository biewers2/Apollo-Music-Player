echo "Checking to see if you have all the requirements for this Apollo build"
python3 -m pip install --upgrade pip
pip3 install python-musicpd
pip3 install Flask
pip3 install Flask-Cors
pip3 install Werkzeug
pip3 install requests
pip3 install waitress
pip3 install colorthief
echo "You are up to date"
