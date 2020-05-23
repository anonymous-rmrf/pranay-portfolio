const express = require('express');
const favicon = require('express-favicon');
var bodyParser = require('body-parser');
const path = require('path');
var cors = require('cors')
var childProcess = require('child_process');
var githubUsername = 'pranayag15'


const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(express.json());
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));


app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.post("/webhooks/github", function (req, res) {
    var sender = req.body.sender;
    var branch = req.body.ref;
	console.log(sender, branch, "webhook body")
    if(branch.indexOf('master') > -1 && sender.login === githubUsername){
        deploy(res);
    }
})

function deploy(res){
    childProcess.exec('cd .. && ./deploy.sh', function(err, stdout, stderr){
        if (err) {
         console.error(err);
         return res.send(500);
        }
        console.log("pullling")
        res.send(200);
      });
}

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname+'/build/index.html'));
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Running on PORT ${PORT}`)
});
