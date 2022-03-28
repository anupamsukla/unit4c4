const mongoose=require("mongoose");

const todoSchema={
    title:{type:String,required:true},
    userId:{type:mongoose.Types.ObjectId,ref:"user",required:true},
}

const Todo=mongoose.model("todo",todoSchema);

module.exports=Todo;