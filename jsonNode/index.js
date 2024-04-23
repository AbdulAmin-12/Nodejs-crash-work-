fs = require('fs')
const bioData ={
    name: "amin",
    age:26,
    roll:35
};

// const jsonData = JSON.stringify(bioData)
// console.log(jsonData+"and type "+ typeof(jsonData))

// const obj = JSON.parse(jsonData)
// console.log(obj.age)

const jsonData = JSON.stringify(bioData)

// fs.writeFile('json1.json',jsonData,()=>{
//     console.log("done")
// });

fs.readFile('./json1.json','utf-8',(err,data)=>{
    const orgdata = JSON.parse(data)
    console.log(orgdata)
});
