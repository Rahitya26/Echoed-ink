import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

let blogs= [];

app.get("/",(req,res) => {
    res.render("index.ejs",{
        blogs
    });
});

app.get("/write",(req,res) => {
    res.render("write.ejs");
});

app.get("/read",(req,res)=>{
    res.render("index.ejs",{
        blogs
    });
});

app.post("/submit",(req,res) => {
    let user_title = req.body["title"];
    let user_blog = req.body["blog"];
    let pre_cont = user_blog.substring(0,400);
    blogs.push({
        title : user_title,
        post : user_blog,
        preview : pre_cont
    })
    res.redirect("/");
});

app.post("/delete",(req,res)=>{
    let del_index = req.body["index"];
    if(del_index >=0 && del_index<blogs.length)
    {
        blogs.splice(del_index,1);
    }
    res.redirect("/");

});

app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`);
});