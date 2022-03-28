const User=require("../model/user.model");



const register=async(req,res)=>{
    try{
        
    const user=await User.find({email:req.body.email});
    if(user){
        res.send("already registered try to login ")
    }
    else{
        user=await User.create(req.body);

        res.send(user);
    }
    }catch(err){
        console.log(err);
        res.send({message:err.message});
    }
}


const login=async(req,res)=>{
    try{
        const user=await User.find({email:req.body.email});

        if(!user){
            res.status(201).send("email or password is not correct");
        }
        else{
            const match=checkPassword(req.body.password);

            if(!match){
                res.send(201).send("email or password does not matched")
            }
            else{
                res.status(200).send(user);
            }
        }
    }catch(err){
        console.log(err);
    }
}

module.exports = { register, login };
