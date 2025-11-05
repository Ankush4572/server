const jwt=require('jsonwebtoken');

module.exports=(req,res,next)=>{
    try{
        const token=req.headers.authorization.split(' ')[1];
// console.log(token)
        const decodedToken=jwt.verify(token,process.env.SECRET_KEY);//{userId:user._id}
// console.log(decodedToken)
        req.body.userId=decodedToken.userId;
        // console.log(req, req.body)
        next();
    }catch(error){
        res.send({
            message:error.message,
            success:false
        });
    }
}