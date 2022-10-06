let fs = require('fs');
let students = [];


//prep()
module.exports.prep = function(){
    return new Promise((resolve, reject) => {
        try {
            fs.readFile("./students.json",
                (err, data) => {
                    if (err){
                        console.log("unable to read file");
                    }
                    students = JSON.parse(data);
                });
        } catch (err) {
            reject("unable to read file");
        }
        resolve();
    })
};


//cpa()
module.exports.cpa = function() {
    return new Promise((resolve, reject) => {
        if (students.length === 0){
            reject('no results returned');
        } 
        else{
            resolve(students);
        }
    });
}


//highGPA()
module.exports.highGPA = function() {
    return new Promise((resolve, reject) => {
        let maxGpa = 4;
        for (let i = 0; i < students.length; i++) {
            if(students.gpa[i] === maxGpa){
            resolve(students);
            }
            else{

                reject('Failed finding the student with the highest GPA');
            }
        }
    });
}
