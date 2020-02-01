echo "Attempting to serve Apollo via Waitress and Flask"
waitress-serve --port=5000 --url-scheme='https' --channel-timeout=5400 Apollo:app
