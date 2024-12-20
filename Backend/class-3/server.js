const express=require("express");

const app=express();


app.get("/",(req,res)=>{
    res.send("Home page");
});
app.get("/contact",(req,res)=>{
    res.send("contact");
});
app.get("/about",(req,res)=>{
    res.send("About");
});
app.get("/service",(req,res)=>{
    res.send("Service");
});
app.get("/products"(req,res)=>{
    const data=read();
    res.status
});
//app.post();
//app.put();
//app.delete();
const port=process.env.port || 8000;
app.listen(port,()=>{
    console.log('server is running on port $(port)');

})
const app=express;