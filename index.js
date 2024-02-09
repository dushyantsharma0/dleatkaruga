const express =require('express')
const nodemailer=require('nodemailer')
const cors=require('cors')
const app =express()
const port =9000;
app.use(cors())
app.get("/",(req,resp)=>{
    resp.send("hello hi")
})


app.use(express.json())
app.post('/',async(req,resp)=>{
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
    const transporter=await nodemailer.createTransport(option)
    
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

     
})







app.listen(port,()=>{
    console.log(`starting server on port ${port}`)
})