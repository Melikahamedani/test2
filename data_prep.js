let fs = require('fs');
let students = [];


//prep()
module.exports.prep = function(){
    return new Promise((resolve, reject) => {
        fs.readFile("./students.json",
                (err, data) => {
                    if (err){
                        reject("unable to read file");
                    }
                    students = JSON.parse(data);
                });
        resolve();
    })
};



//cpa()
module.exports.cpa = function() {
    return new Promise((resolve, reject) => {
        let cpa = [];
        for(let i = 0; i < students.length; i++){
            const stu = students[i];
            if (stu.program === 'CPA'){
                cpa.push(stu)
        }}
        if (cpa.length === 0){
            reject('no results returned');
        } 
        else{
            resolve(cpa);
        }
    });
};



//highGPA()
module.exports.highGPA = function() {
    return new Promise((resolve, reject) => {
        let maxGpa = 4;
        let highStudentGPA;
        for (let i = 0; i < students.length; i++) {
            if(students.gpa[i] === maxGpa){
            resolve(highStudentGPA);
            }
            else{

                reject('Failed finding the student with the highest GPA');
            }
        }
    });
};

