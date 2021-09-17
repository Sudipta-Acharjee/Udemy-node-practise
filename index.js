const fs = require('fs');
const http = require('http');
const url = require('url');

// BLocking synchronous way;
// const textIn1= fs.readFileSync('./1-node-farm/starter/txt/input.txt', 'utf-8');
// console.log(textIn1);

// const textOut1 =  `This is what we know about the avocado: ${textIn1}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./1-node-farm/starter/txt/start.txt',textOut1);
// console.log('File written');


// Non-BLocking Asynchronous way;

// fs.readFile(`./1-node-farm/starter/txt/starttt.txt`,'utf-8',(err, data1) => {
//     if(err) return console.log("ERROR!**********")
//     fs.readFile(`./1-node-farm/starter/txt/${data1}.txt`,'utf-8',(err, data2) => {
//         console.log("Find the data:",data2);
//         fs.readFile(`./1-node-farm/starter/txt/append.txt`,'utf-8',(err, data3)=>{
//             console.log(data3);
//             fs.writeFile('./1-node-farm/starter/txt/input.txt',`${data2}\n${data3}`,'utf-8',err=>{
//                 console.log("Your file has been written successfully")
//             })
//         }
//         )

// });
// });
// console.log('Read Successfully');

//Creating a SERVER
const server = http.createServer((req, res) => {
    const pathName = req.url;
    if (pathName === '/' || pathName === '/overview') {
        res.end('THis is the overview')
    } else if (pathName === '/product') {
        res.end('This is the product')
    } else if (pathName === '/api') {
        fs.readFile(`./1-node-farm/starter/dev-data/data.json`, 'utf-8', (err, data) => {
            const productData = JSON.parse(data);
            res.writeHead(200, { 'Content-Type': 'application/json'})
            res.end(data)
        })
        
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello world'
        });
        res.end('<h2>Page Not Found</h2>')
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
})