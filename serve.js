const express = require('express');
const app = express();

app.put("/user",(req,res)=>{
  const email = req.query.email
  const password = req.query.password
  const Users = [
    {email:"venkyroy@gmail.com", password:"venky@22"},
    {email:"bharat@gmail.com", password:"bharat@123"},
    {email:"hari@gmail.com", password:"hari123"}
    
  ];
  let message = "Hello";

  if(email!=Users){
    console.log("Email Not Found")
  }else if(email==Users){
    console.log("Email already exists")
  }else{
    return message;
  }


  app.delete("/user",(req,res)=>{
    const email = req.query.email
    const password = req.query.password
    const Users = [
      {email:"venkyroy@gmail.com", password:"venky@22"},
      {email:"bharat@gmail.com", password:"bharat@123"},
      {email:"hari@gmail.com", password:"hari123"}
      
    ];
    let message = "Hello";
  
    if(email!=Users){
      console.log("Email Not Found")
    }else if(email==Users){
      console.log("User deleted Successfully")
    }else{
      return message;
    }
  
  
    
   })
  
 })


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
