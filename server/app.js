const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser'); 
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const PORT = 3000;
const path = require('path')
const db = require('../models').db

app.use(bodyParser.json())
app.use(urlencodedParser)
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '..', 'public')))


// app.get('/',(req,res,next)=>{
//     res.send('hello')
// })

app.use('/api',require('./routes'))

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    console.error(err);
    res.send(
      'Something went wrong'
    );
  });

  app.listen(PORT, function() {
    console.log("The server is listening closely on port", PORT);
    db
      .sync({force:true})
      .then(function() {
        console.log("Synchronated the database");
      })
      .catch(function(err) {
        console.error("Trouble right here in River City", err, err.stack);
      });
  });