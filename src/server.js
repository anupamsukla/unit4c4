const app=require("./index");
const connect=require("./config/db.connect")

app.listen(5000,async(req,res)=>{
    try{
        await connect();

        console.log("listning at port 5000");
    }
    catch(err){
        console.log(err);
        res.status(500).send({"connect err":err.message});
    }
})