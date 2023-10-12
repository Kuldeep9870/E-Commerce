import express from "express";

const app=express();
const port =3000;

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.redirect("/home");
});
app.get("/home",(req,res)=>{
    res.render("index.ejs");
});
app.get("/shop",(req,res)=>{
    res.render("shop.ejs");
});
app.get("/about",(req,res)=>{
    res.render("about.ejs");
});
app.get("/blog",(req,res)=>{
    res.render("blog.ejs");
});

app.get("/contact",(req,res)=>{
    res.render("contact.ejs");
});

app.listen(port,()=>{
    console.log(`Server running on ${port}`);
});