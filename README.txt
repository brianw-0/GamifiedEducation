DR. MI ZHANG, COLLIN DILLINGER, BRIAN WANG

Humansensing Web Application (Data visualization)

How this project is set up:

server.js acts as the node js server, directing all HTTP requests to 
	index.html, which is located in the view folder.
	
assets folder - contains media used on the website (i.e. loading gifs)
node_modules folder - contains all modules used by Node js.  It currently has Express and a few others.
script folder - contains all javascript files, including D3.js source.
	the only files that you would need to alter for the web app are:
		Dashboard.js (this takes care of all graphs)
		setupInterface.js (this takes care of the user interface, i.e. what each button does, what items show up on the dropdowns)
stylesheet folder - just CSS stuff
view folder - just HTML files.

If you want to host this web app, just do it on Heroku.  It's much easier to 
deploy it if you connect this with github and have Heroku as one of the destinations for pushing.
You can also just get my contact information from Dr. Zhang if you have questions.