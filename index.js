const express = require('express');

const app = express();

const newConnection = require('./connectDB');

app.use(express.urlencoded({
    extended: true
}))

app.get('/showPreference', (req, res) => {
    let conn = newConnection();
    conn.connect();
    let userList;
    conn.query(`select * from Preference`, (err,rows,fields) => {
  
        if (err)
            res.send('ERROR: ' +err)
        else
        {
            userList = rows;
  
            let content ='';
            for (u of userList)
            {
                content += '<div>';
                content += u.Name + " : " + u.t1 + " : " + u.t2 + " : " + u.t3 + " : " + u.t4 + " : " + u.t5 + " : " + u.t6 + " : " + u.t7 + " : " + u.t8 + " : " + u.t9 + " : " + u.t10 
                content += '</div>'
                content += '\n';
                content += '\n';
            }
            content += '<br/>';
            content += `<a href='/'>Click here to return to the homepage</a>`;
  
            res.send(content);
        }
    })    
  })

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

app.get('/add-preference', (req,res) => {
    let conn = newConnection();
    conn.connect();
    conn.query(`insert into Preference values ('${req.query.name}','${req.query.t1}','${req.query.t2}','${req.query.t3}','${req.query.t4}','${req.query.t5}','${req.query.t6}','${req.query.t7}','${req.query.t8}','${req.query.t9}','${req.query.t10}')`
            ,(err,rows,fields) => {
                if (err)
                console.log(err);
                else{
               res.redirect('/showPreference');   
                    console.log("row updated")
                }
            } );
  
    conn.end();
  })
  
  app.get('/add-times', (req,res) => {
    let conn = newConnection();
    conn.connect();
    conn.query( `UPDATE Time SET  t1 = '${req.query.t1}', t2 = '${req.query.t2}', t3 = '${req.query.t3}', t4 = '${req.query.t4}', t5 = '${req.query.t5}', t6 = '${req.query.t6}', t7 = '${req.query.t7}', t8 = '${req.query.t8}', t9 = '${req.query.t9}', t10 = '${req.query.t10}'`
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('row updated');
                   
            });
  
    conn.end();
  })

//serve static contents
app.use(express.static('static'))
//dynamic handling

app.listen(80);