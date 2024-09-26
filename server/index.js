import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userroutes from "./Routes/users.js"
import questionRoutes from "./Routes/Questions.js"
import answerroutes from "./Routes/Answers.js"
const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


app.use('/users',userroutes);
app.use("/questions", questionRoutes);
app.use("/answers", answerroutes);

app.get('/',(req,res)=>{
    res.send(`the app is running`)
})

const PORT= process.env.PORT || 5001
const database_url=process.env.MONGODB_URL

mongoose.connect(database_url)
.then(()=>app.listen(PORT,()=>{console.log(`server is running on port ${PORT}`)}))
.catch((err)=>console.log(err.message))