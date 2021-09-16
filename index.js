const fs= require('fs');

//BLocking synchronous way;
const textIn1= fs.readFileSync('./1-node-farm/starter/txt/input.txt', 'utf-8');
console.log(textIn1);

const textOut1 =  `This is what we know about the avocado: ${textIn1}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./1-node-farm/starter/txt/start.txt',textOut1);
console.log('File written');


//Non-BLocking Asynchronous way;

fs.readFile(`./1-node-farm/starter/txt/start.txt`,'utf-8',(err, data1) => {
    fs.readFile(`./1-node-farm/starter/txt/${data1}.txt`,'utf-8',(err, data2) => {
        console.log("Find the data:",data2);
        fs.readFile(`./1-node-farm/starter/txt/append.txt`,'utf-8',(err, data3)=>{
            console.log(data3);
        }
        )
});
});
console.log('Read Successfully');