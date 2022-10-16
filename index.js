const express=require("express");
const mongoose=require("mongoose");
const StudentModel=require("./Student");
const app=express();
app.use(express.json());
mongoose.connect("mongodb+srv://SAI123:SAI123@cluster0.0ypfhbt.mongodb.net/RER?retryWrites=true&w=majority",
{useNewUrlParser: true, },()=>console.log("Connected to DB"));
app.get('/gets',(req,res)=>res.json(StudData.find()))
app.post("/newstud",async(req,res)=>{
    const studName=req.body.studName;
    const studNumber=req.body.studNumber;
    const studName1=req.body.studName1;
    const studName2=req.body.studName2;
    const student=new StudentModel({
        name:studName,
        name1:studName1,
        htno:studNumber,
        name2:studName2,

    });
    try{
    await student.save();
    res.send("Inserted Values");}

catch(err){
    console.log(err);
}});
app.get("/display",async(req,res)=>{
    StudentModel.find({},(err,result)=>{
        if(err){
            res.send(err);
        }
        res.json(result);
    });
});
    app.listen(3001,()=>console.log("Server Ready."))