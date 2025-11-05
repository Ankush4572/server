const express=require('express');
const app=express();
const authRouter=require('./controllers/authController');
const userRouter=require('./controllers/userController');
const chatRouter=require('./controllers/chatController');
const messageRuter=require('./controllers/messageController');


app.use(express.json());
app.use('/api/auth',authRouter);
app.use('/api/user',userRouter);
app.use('/api/chat',chatRouter);
app.use('/api/message',messageRuter);

module.exports=app;