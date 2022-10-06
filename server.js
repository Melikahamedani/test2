//cyclic link : https://modern-ant-undershirt.cyclic.app/


 let HTTP_PORT = process.env.PORT || 8080;
 let express = require("express");
 let app = express();
 let data_prep = require("./data_prep.js");
 

app.get("/", function(req, res){
    let resText = "<h2>Declaration:</h2><br>";
    resText += "<p> I acknowledge the College's integrity policy-and my own integrity- remain in effect whether my work is <br>"
    resText += "done remotely or onsite. Any test or assignment is an act of trust between me and my instructor, and especially with <br>"
    resText += "my classmates...even when no one is watching. I declare I will not break that trust.</p><br>"
    resText += "<p style=background-color:yellow> Name: <span>Melika Hamedani</span></p><br>"
    resText += "<p style=background-color:yellow> Student Number: <span>175474212</span></p><br>"
    resText += "<a href = './students.json'> CLick to visit CPA Students </a> <br>";
    resText += "<a href = './students.json'> Click to see who has the highlight GPA </a> <br>"; 
    res.send(resText);
});

//Error 404
app.use((req, res)=>{
    res.status(404).send("Error 404: Page not found.");
});

//cpa
app.get('/cpa', function(req,res){
    data_prep.cpa()
    .then((data) =>{
        res.json(data);
    }).catch((err)=>{
        res.json({ error: err });
    })
});




//highGPA
app.get("/highGPA", function(req,res){
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
