const EXPRESS = require('express'),
 FILESYS= require('fs'),
 HTTP = require("http"),
 OS = require('os'),
 PATH = require('path');
const { listen } = require('express/lib/application');
const { url } = require('inspector');



 const fileWrite = FILESYS.writeFile
 const fileRead = FILESYS.readFile

 


//  fileRead('./public/fist.txt','utf8', (err,data)=>{

//     if(err){
//         console.log(err);
//         return
//     }
//     const fist = data
//     console.log(data);
    
//     fileWrite('./public/fist_second.txt',`Second Door, ${fist}`,(err,data)=>{
//         if(err){
//             console.log(err);
//         }

//         console.log('file Created');

//         fileRead('./public/fist_second.txt','utf8', (err,data)=>{

//             if(err){
//                 console.log(err);
//                 return
//             }
//             console.log(data);
        
//   });
//  });
// });


function nodeTemp(){

    fileWrite('./public/app.js',
    `const EXPRESS = require('express'),
    FILESYS= require('fs'),
    HTTP = require("http"),
    OS = require('os'),
    PATH = require('path');`
    ,(err,data)=>{
        if(err){
            console.log(err);
        }

        console.log('file Created');
    });


}



// const server = HTTP.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.end('hello world1')
//     }
//     if(req.url === '/about'){
//         res.end('about Me')
//     }
//     if(req.url === '/home'){
//         res.end('Welcome Home')
//     }
//     if(req.url === '/contect'){
//         res.end('hello world1')
//     }
//     // if(req.url != '/' || 'about' || 'home' || 'contect'){
//     //     res.end('404')
//     // }
   
// })

// server.listen(8080 ,'')


let array = [1,2,3,4]

let obj = {
    
   john:{
    age:'53',
    alive:true
   },
   jobs:{
    OK:'FOOD wORKER',
    GOOD:'MANAGER',
    BEST:'OWNER',
    BEST:'OWNER'
   }
    



}

console.log(obj.john.age,obj.jobs.BEST);