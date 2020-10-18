const express = require('express');
const path = require('path');
const port = 3000;
const app = express();

app.set('view engine','ejs');
app.set( 'views', path.join(__dirname,'views') );


app.get('/',function(req,res){
    res.render('home');
});


app.get('/practice',function(req,res){
    res.render('practice',{
        title: "Practice is the key to success"
    });
});


app.listen(port,function(err){
    if(err){
        console.log(`Error ${err} `);
        return ;
    }
    console.log(`Express server is up and running on port ${port} `);
});



