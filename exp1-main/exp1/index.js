const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const comment = require("./routes/comments");
const user = require("./routes/user");
const auth = require("./routes/auth");
const log = require("./middlewares/logger");

const cors = require("cors");
mongoose.set("strictQuery", true);
const app = express();
mongoose
  .connect("mongodb://127.0.0.1:27017/commently")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("coudnt connect to MogoDB"));
mongoose.set("strictQuery", false);
// console.log(` this is the node env ${process.env.NODE_ENV}`) //und
// console.log(app.get('env')) ///

app.use(cors());
app.use(express.json()); // conver json to javascript and javascript to json
app.use(log);

app.use(express.static("public"));

if (app.get("env") === "development") app.use(morgan("tiny"));

app.use("/api/comments", comment);
app.use("/api/users", user);
app.use("/api/auth", auth);

//et('/api/checksum/:num1/:num2',(req,res)=>{
//onst number1= parseInt(req.params.num1);
//onst number2= parseInt(req.params.num2);
//onst actualAns= parseInt(req.query['answer']);
//
//f(number1+number2===actualAns)
//es.send('Positive')
//lse
//es.send('negative')
//

// PORT
const port = process.env.PORT || 3002;

app.listen(port, () => console.log(`active on ${port}`));
