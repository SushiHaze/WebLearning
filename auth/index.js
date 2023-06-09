const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./authRouter");
const PORT = process.env.PORT || 5000;

const app = express();
//Настрой позже/Это костыль not secure//
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use("/auth", authRouter);
const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://Sushi:T6SB8N8xG3R-TW6@cluster0.f5he3bb.mongodb.net/squadron?retryWrites=true&w=majority`
    );
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
start();
