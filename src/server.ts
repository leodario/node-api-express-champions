import express  from "express";
import createApp from "./app";

const app = createApp();
const port = process.env.PORT;

app.listen(port, ()=> {
  console.log(`🔥 Server is running on port ${port}`);
});