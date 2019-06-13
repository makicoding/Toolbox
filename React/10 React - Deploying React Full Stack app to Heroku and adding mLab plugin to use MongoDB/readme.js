// ----------------------------------------------------------------------------------------------------
// INSTRUCTIONS AND ADDITIONAL NOTES

/*
.gitignore file

For when uploading folder to a GitHub repository.

Create .gitignore file at start of project and include inside it the following lines of code:
node_modules
.DS_Store

It's good practice to always include node_modules in the .gitignore file because this folder can get huge.
We have coded to "require" npm install of any packages necessary for this node app, so if someone clones this repo from
GitHub, all they have to do is npm install any necessary packages for the app to work. Therefore the node_modules folder 
doesn't need to be uploaded to GitHub.



------------------------------------------------------------
COMMAND LINE commands

Before running server.js file in node, install package dependencies listed in package.json
by typing either of the following into the command line:
// npm i            // this is just a shorthand version of npm install
// npm install



--------------------
Starting up and running MongoDB with React in a Full Stack App (when running app locally):

In a new command line window, type into the command line 
(This can be from any location of the computer, root level or otherwise. 
For mongod, you don’t necessarily have to be in the project folder):
// mongod

MongoDB must be running first before running the React Full Stack App.



--------------------
Initialize Mongo DB with the seeds file (when running app locally):

Then in a separate command line window, go to the project folder directory and type in 
the following to initially populate the database with the seeds file:
// npm run seed

What “npm run seed” is doing is the app looks into the package.json file and looks at 
the “scripts” section and runs the “seed” line.

The alternative to “npm run seed” is to type out the seed line command in the 
package.json file long hand into the command line: 
// node scripts/seedDB.js

The populated database will now show up in Robo 3T.



--------------------
To start the React Full Stack App (when running app locally):

While in the project directory in the command line 
(this must be a separate command line window to the command line window that has mongod running)
type the following to start the React Full Stack App:
// npm start

(for React, use npm start in the command line instead of node server)

The React App will open up automatically in the Chrome Browser



--------------------
Deployment to Heroku and adding mLab plugin to use MongoDB:

The React Full Stack App must first be in a git repository.

From the command line, navigate to the folder where the React Full Stack App resides locally,
then type:
// npm run build

What “npm run build” is doing is the app looks into the package.json file and looks at 
the “scripts” section and runs the “build” line.



Then:
// heroku create    (This creates the app on Heroku.com)



Then:
// git add .
// git commit -m "Enter here commit message of your choice"
// git push heroku master



Adding mLab plugin to use MongoDB on Heroku:
On Heroku, go to the newly created app folder, click the resources tab,
and then add mLab in the Add-ons section.



--------------------
If you need to exit at any point, type into the command line:
// control c



*/