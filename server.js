const express=require('express');
const ejs=require('ejs');
const expressLayout=require('express-ejs-layouts');
const path=require('path');

const app=express();  // function calling of express..

const PORT=process.env.PORT || 3000   // if not avilabe then use 3000..

app.get('/',function(req,res){
    res.render("home");
})

//set template engine...
app.use(expressLayout);
app.set('views',path.join(__dirname,'/resources/views'));
app.set('view engine','ejs')

// this listen method listen the request of users....
app.listen(PORT,()=>{
    console.log(`server listen on ${PORT} port `);
})




//npm run dev ...run scripts....