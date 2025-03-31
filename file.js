const express = require('express')
const abhi= express()
abhi.get('/',function(req,res,next){
    const username = req.header.username;
    const passwars = req.header.passwars;
    if(username!='abhi'&&passwars!='rashi'){
        res.status(500).json({
            msg:"invaild"
        });
    }else{
        next();
    }
},
         
function(req,res){
    console.log('you are corect'+ username,passwars +'passwaord')
}

);
abhi.listen(3000);





