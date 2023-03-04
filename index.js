const express = require('express')
const { PrismaClient } = require('@prisma/client')
const app = express()
app.use(express.json()); //Used to parse JSON bodies
const prisma = new PrismaClient()


app.get("/hello",(req,res)=>{
    res.send({data:"Success"})
})

app.get("users", async (req,res)=>{
    const allUsers = await prisma.us 
})
app.post("users",async (req,res)=>{

    try{
        const {name, email } = req.body

        const newUser = prisma.user.create({
            data:{
                name:name,
                email:email,
            }
        })
        res.status(200).json(newUser)

    }catch(err){
        res.status(500).json({
            error:err.message
        })
    }
    
})

app.put("users/:id",async (req,res)=>{
    try{
        const {name,email} = req.body
        const userExists = await prisma.user.findOne({
            where:{
                id:req.params.id
            }
        })
    
        if(!userExists){
            throw new Error("User not found with the requested id")
        }
        const updateUser = await prisma.user.update({
            where:{
                id:req.params.id,
            },
            data:{
                name:name,
                email:email
            }
        })

        res.status(200).json(newUser)
    }catch(err){
      res.status(500).json({
          message:err.message
      })
    }
   
})

app.listen(5000,()=>{
    console.log("Server listening on port 5000")
})