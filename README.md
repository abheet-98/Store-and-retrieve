# Steps to be followed\
1.The first step is to unzip the assignment.zip file.\
2.After this open the assignment folder in any code editor like visual studio code or sublime.I have used visual studio code.\
3.Change the url of the mongoose.connect command in acontroller.js file.I have used the mongodb atlas to host the database on cloud.\
4.Now you are set to launch the app.\
5.Open the terminal and type the command node app and press enter.\
6.Terminal shows the message of listening to port 3000 and connection of the mongodb.\
7.Open the browser and type the url http://localhost:3000/aa \
8.Form is displayed.\
9.Enter the values in the form as per the validation and press the Add item button.\
10.The values are stored in the database.\
11.Now type the url http://localhost:3000/bb in the browser and a form with single email id field is displayed.\
12.Enter the email id and press the Search button.\
13.The details of user is fetched from Database and is displayed on this page.\



app.js is the main entry file.\
aa.ejs, bb.ejs, cc.ejs and dd.ejs are separate view files.\
acontroller.js is the controller file which is used to handle the db connection and various routes.\
aaschema.js is the file which defines the schema of the db.\
aaa.js and bbb.js are the jquery files handling the form submission.\
