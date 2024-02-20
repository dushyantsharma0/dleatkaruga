const express =require('express')
const nodemailer=require('nodemailer')
const cors=require('cors')
const otpGenerator = require('otp-generator')
const app =express()
const port =9000;
app.use(cors())




app.get("/",(req,resp)=>{
  

 //const otp=otpGenerator.generate(4, { lowerCaseAlphabets:false,upperCaseAlphabets: false, specialChars: false });
      

 resp.send(`your otp is : `)
})


app.use(express.json())
app.post('/',async(req,resp)=>{
    let body=req.body
    let value=body.title
    

let newotp="5555"
let firstname="aman"


    const option ={
        service:"gmail",
        port:"587",
        secure:false,
        auth:{
            user:"meammakerds@gmail.com",
            pass:"hmmdlqkubovnngdf"
        }
    }
    const transporter=await nodemailer.createTransport(option)
         
    const mailOption={
        to:value,
        from:"meammakerds@gmail.com",
        subject: 'Sick leave',
        html:`<!DOCTYPE html><html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Document</title></head> <body> <p>dear ${firstname} </p><br><p>Thank You for registering with demo plateform.com the no1 demo site for checking demo</p> <br><br><p>Enter the below mentioned one time password to complete your regitration</p> <h1 style="font-weight: 900;">OTP:${newotp}</h1></body> </html>`
    }
    transporter.sendMail(mailOption,(err,data)=>{
        if(err){
            console.log(err)
    
        }else{
            console.log(data)
        }
    })

     
})







app.listen(port,()=>{
    console.log(`starting server on port ${port}`)
})