let express = require('express');
const path = require('path');
const ejs = require('ejs');

let acontroller = require('./controllers/acontroller');
let app = express();

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname + '/public')));

acontroller(app);

app.listen(process.env.PORT|| 5000);
console.log('You are listening to port 3000 !!');
