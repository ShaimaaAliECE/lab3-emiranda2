const express = require('express');

const app = express();

app.use(express.urlencoded({
    extended: true
}))

app.post('/login', (req,res) => {

    let userName = req.body.usr;
    let password = req.body.pwd;
    let message = "Access Denied";

    if(userName == 'admin' && password == '123'){
        res.redirect("admin.html");
    }
    res.send(message);
})

app.post('/guest', (req, res) => {

    let onClick = req.body.gst;
    let message = 'Uh oh something went wrong!'

    onClick = true;
   
    if(true){
        res.redirect("guest.html");
    }
    res.send(message)
})


//serve static contents
app.use(express.static('static'))
//dynamic handling

app.listen(80);