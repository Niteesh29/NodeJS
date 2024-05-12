// const http = require('http');
// const data = require('./data')
// http.createServer(((req,resp)=>
// {
//     resp.writeHead(200, {'Content-Type': 'application\json'})
//     resp.write(JSON.stringify(data))
//     resp.end()
// })).listen(5000)


// var colors = require('colors');
// console.log(colors)
 
// console.log('hello how are you'.red); 
//CRETE 5 FILE IN A PARTICULAR FOLDER

// const express = require('express');
// const path = require('path');
// const app = express();
// const filePath = path.join(__dirname,'public')
// app.get('', (req,res)=> 
// {
//     res.sendFile(`${filePath}/index.html`)
// })
// app.get('/home', (req,res)=> 
// {
//     res.sendFile(`${filePath}/home.html`)
// })
// app.get('/about', (req,res)=> 
// {
//     res.sendFile(`${filePath}/about.html`)
// })
// app.get('*', (req,res)=> 
// {
//     res.sendFile(`${filePath}/page-not-found.html`)
// })

// app.listen(8000)


const express = require('express');
const path = require('path');
const app = express();
const filePath = path.join(__dirname,'public')

app.set('view engine', 'ejs')

app.get('/profile', (req,res)=> 
 {
    const user = {
        name:'niteesh',
        age:30,
        mob: 344,
        skills: ['php','node','java','html','css']
    }
    res.render('profile',{user})
})

app.get('/login', (req,res)=>
{
     res.render('login')
})
console.log(0)
app.listen(8000)





