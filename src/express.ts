import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ name: "Express" });
});

app.listen(4000, () => {
  console.log("server started");
});
