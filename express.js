const express = require('express')
const app = express();

app.get('', (req,res)=>
{
    console.log( `data send by request is ${req.query.name}`)
    res.send(`<h1>this is a home page</h1>
    
    <a href='/about'>Go to About page </a>
    `)
})
app.get('/about', (req,res)=>

{
    res.send(`
      <input type="text" value="${req.query.name}" placeholder="Type here" />
      <button type="button" > Click me </button>
      <a href='/'>Go to Home page </a>
    `)
})

app.get('/help', (req,res)=>
{
    res.send({
        name:'hello',
        age:30
    })
})

app.listen(5001)