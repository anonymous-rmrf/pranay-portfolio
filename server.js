const express = require('express');
const favicon = require('express-favicon');
var bodyParser = require('body-parser');
const path = require('path');
var cors = require('cors')

const sendEmail = require('./nodemailer-config.js')

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(express.json());
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

// app.use(favicon(__dirname + '/build/favicon.ico'));
// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, 'build')));


app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.post('/sendmail', (req, res) => {
  console.log(req.body)
  sendEmail(req.body).then(response => {
    console.log(response)
    res.status(200).json({"result": "yo broo"})
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({"error": err})
  })
})

// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname+'/build/index.html'));
// });

app.listen(process.env.PORT || PORT, () => {
    console.log(`Running on PORT ${PORT}`)
});