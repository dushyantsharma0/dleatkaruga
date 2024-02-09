import express  from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
const app =express()
const port =9000;

app.use("/",(req,resp)=>{
    resp.json({message:"helllo i an express js"})
})

app.use(cors())
app.use(express.json())
app.post('/',(req,resp)=>{
    let body=req.body
    let value=body.title
    




    const option ={
        service:"gmail",
        port:"587",
        secure:false,
        auth:{
            user:"meammakerds@gmail.com",
            pass:"hmmdlqkubovnngdf"
        }
    }
    const transporter=nodemailer.createTransport(option)
    
    const mailOption={
        to:value,
        from:"meammakerds@gmail.com",
        subject: 'Sick leave',
        html:"Sick leave refers to a period of authorized absence from work that is granted to employees specifically for the purpose of recovering from an illness or addressing personal medical needs . It is a form of paid leave provided by employers to support the well-being and health of their employees. "
    }
    transporter.sendMail(mailOption,(err,data)=>{
        if(err){
            console.log(err)
    
        }else{
            console.log(data)
        }
    })

     resp.send("send messing on"+value)
})







app.listen(port,()=>{
    console.log(`starting server on port ${port}`)
})