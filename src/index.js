import express from "express";
import questions from "./data.json" assert { type: "json" };
const app = express();

app.get("/questions", (req, res) => res.json(questions).status(200));

app.listen(5555, () => {
  console.log("server is running");
});
