import express  from 'express'

const app =express()
const port =9000;

app.use("/",(req,resp)=>{
    resp.json({message:"helllo i an express js"})
})

app.listen(port,()=>{
    console.log(`starting server on port ${port}`)
})