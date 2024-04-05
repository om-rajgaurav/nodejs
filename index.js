const express = require("express");
const app = express();
const { logReqRes } = require("./middleware");
const { connectMongoDB } = require("./connection");
const userRouter = require('./Routes/user')


const PORT = 3000;
app.use(express.urlencoded({ extended: true }));

//db connection
connectMongoDB("mongodb://localhost:27017/MyDB");


app.use(logReqRes("log.txt"));

//Router
app.use('/user',userRouter)



app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
