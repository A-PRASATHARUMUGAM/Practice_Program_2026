                    //  File System in Node.js 

/*
1.fs  - File System
2.mkdir()    - Make Directory and it is Asynchronous Function 
3.fs.existsSync() - 1 Args = It is check already folder have in location  
4.fs.writeFile()   - It is create the file > text also 
5.fs.readFile()    - It is read the file 
6.fs.unlink()      - It is delete the file 
7.rmdir()          - It is delete the folder and can only delete an ! empty directory.

*/


// 1.fs

const console = require('console');
const fs=require('fs');

// console.log(fs)

// 2.mkdir - Make Directory and it is Asynchronous Function 

// 2 Args = path+filename, Callback function  

fs.mkdir('./docs',(err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log("Folder Created")
    }
})


//3. fs.existsSync
// 1 Args = (filePathname) It is check already folder have in location 

if(!fs.existsSync('./docs')){
    console.log(true)
}else{
    console.log(false)
}


//4.fs.writeFile()
// 2 Args = ("filepathname/ +File name",'message',(error) )

fs.writeFile("./docs/file.txt","Secret Key",(error)=>{
 
    if(error){
        console.log(error.message);

    }else{
        console.log("File Written")
    }
    
})


//5. fs.readFile()

if(fs.existsSync("./docs/file.txt")){


fs.readFile('./docs/file.txt',( err, data)=>{

     if(err){
        console.log(err)
     }else{
        console.log(data.toString())
     }
})  
}else{
console.log("No file ");


}


//6.fs.unlink()

// if(fs.existsSync('./docs/file.txt')){

//     fs.unlink('./docs/file.txt',(err)=>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log("Deleted Successfully")
//         }
//     })
// }


//7. rmdir()

// if(fs.existsSync('./docs')){
// fs.rmdir('./docs',(err)=>{

//     if(err){
//         console.log(err);
//     }else{
//         console.log("Folder is Deleted")
//     }
// })
// }

