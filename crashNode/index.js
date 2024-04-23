const { rejects } = require('assert');
const { error } = require('console');
const {readFile} = require('fs')
const getText = (path)=>{
return new Promise((resolve,reject)=>{

    readFile(path,'utf-8',(err,data)=>{
        if(err){
            reject(`the error is ${err}`);
        }else{
            resolve(`the data id ${data}`)
    
        }
    });

})

};

const start = async()=>{
    const first = await getText('./read.txt')
    console.log(first)
}

start()


// getText('./read.txt')
// .then((result)=>console.log(result))
// .catch((error)=>console.log(error))




