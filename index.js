const fs= require('fs');

//BLocking synchronous way;
const textIn1= fs.readFileSync('./1-node-farm/starter/txt/input.txt', 'utf-8');
console.log(textIn1);

const textOut1 =  `This is what we know about the avocado: ${textIn1}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./1-node-farm/starter/txt/start.txt',textOut1);
console.log('File written');


//Non-BLocking Asynchronous way;

fs.readFile(`./1-node-farm/starter/txt/starttttttt.txt`,'utf-8',(err, data1) => {
    if(err) return console.log("ERROR!**********")
    fs.readFile(`./1-node-farm/starter/txt/${data1}.txt`,'utf-8',(err, data2) => {
        console.log("Find the data:",data2);
        fs.readFile(`./1-node-farm/starter/txt/append.txt`,'utf-8',(err, data3)=>{
            console.log(data3);
            fs.writeFile('./1-node-farm/starter/txt/input.txt',`${data2}\n${data3}`,'utf-8',err=>{
                console.log("Your file has been written successfully")
            })
        }
        )
        
});
});
console.log('Read Successfully');