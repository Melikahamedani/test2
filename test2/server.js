/************************************************************************* 
 *  WEB322– Assignment 2 
 * I declare that this assignment is my own work in accordance with Seneca Academic 
 Policy. No part * of this assignment has been copied manually or electronically from any
 other source 
 *  (including 3rd party web sites) or distributed to other students. 
 * 
 * Name: Melika Hamedani  Student ID: 175474212  Date: 02/10/2022 
 * 
 * Your app’s URL (from Cyclic) :  https://easy-pear-wombat-vest.cyclic.app
 * 
 * *************************************************************************/
 let HTTP_PORT = process.env.PORT || 8080;
 let express = require("express");
 let app = express();
 let data_prep = require("./data-prep");
 

app.get("/", function(req, res){
    let resText = "<h2>Declaration:</h2><br>";
    resText += "<p> I acknowledge the College's integrity policy-and my own integrity- remain in effect whether my work is </p><br>"
    resText += "<p> done remotely or onsite. Any test or assignment is an act of trust between me and my instructor, and especially with </p><br>"
    resText += "<p> my classmates...even when no one is watching. I declare I will not break that trust.</p><br>"
    resText += "<p> Name: </p> <span>Melika Hamedani</span><br>"
    resText += "<p> Student Number: </p> <span> 175474212 </span><br>"
    resText += "<a href = './about'> CLick to visit CPA Students </a> <br>";
    resText += "<a href = './aboutFile'> Click to see who has the highlight GPA </a> <br>"; 
    res.send(resText);
});

//Error 404
app.use((req, res)=>{
    res.status(404).send("Error 404: Page not found.");
});

//cpa
app.get("/test2", function(req,res){
    data_prep.cpa()
    .then((data) =>{
        res.json(data);
    }).catch((err)=>{
        res.json({ error: err });
    })
});


//cpa
app.get("/test2", function(req,res){
    data_prep.highGPA()
    .then((data) =>{
        res.json(data);
    }).catch((err)=>{
        res.json({ error: err });
    })
});

 //PORT
 function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
}

//prep()
data_prep.prep().then(() => {
    app.listen(HTTP_PORT, onHttpStart);
}).catch(() => {
    console.log("Unable to load data");
});