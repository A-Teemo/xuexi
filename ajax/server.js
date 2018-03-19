/**
 * Created by 007 on 2017/4/5.
 */


var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express3-handlebars');


var app = express();
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({extended: false}));

app.get("/index", function(req, res, next){

    console.log(req.query);

    res.status(200);
    res.send(req.query);

});

app.post("/index", function(req, res, next){

    console.log(req.body);
    res.status(200);
    res.send(req.body);
});

app.post("/login", function(req, res, next){

    // console.log(req.body);
    var info = req.body
    if (info.name === 'lisi' && info.passwd === "123") {
      res.status(200);
      res.send("ok");
    } else {
      res.status(200);
      res.send("fail");
    }
});




app.use(function (req, res, next) {
    res.status(404);
    res.send("Not Found...");
});


app.listen(8000, function () {
    console.log("listen 127.0.0.1:8000 ... ");
});
