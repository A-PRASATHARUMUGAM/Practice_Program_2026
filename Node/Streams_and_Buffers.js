                                                // Streams And Buffer

// 1.createReadStream 
// 2.writesStream 
//

const fs =require('fs');


// 1.createReadStream 
const readStream = fs.createReadStream("./docs/HugeFile.txt",{encoding:'utf-8'});

// readStream.on('data',(buffer)=>{
//     console.log('\nNew Buffer\n')
//     console.log(buffer);
// })


// 2.writesStream 
const writesStream= fs.createWriteStream("./docs/copyHugeFile.txt");

// readStream.on('data',(buffer)=>{
//    writesStream.write('\nNew Buffer\n');
//    writesStream.write(buffer); 
// })


//Read + write 
readStream.pipe(writesStream);


