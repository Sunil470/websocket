const express = require('express')
const app = express()

app.get("/", (req,res)=>{
    res.send("Ayush")
    res.send("Addhyan")
})

// Basic HTTP protocol - Ek baar aap request bhejte ho ek aur ek baar response milta hai, aur cycle khatam ho jaati hai



app.listen(3000, (err)=>{
    if(err)
    console.log(err)
    else
    console.log("Server is running on PORT: 3000")
})