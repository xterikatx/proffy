import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ msg: "oi mundo" });
});

app.listen(3333);
