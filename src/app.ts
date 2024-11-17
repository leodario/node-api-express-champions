import express, {json, Request, Response} from "express";
import router from "./routes";
import cors from "cors"

function createApp(){
  const app = express();

  app.use(json())
  app.use("/api", router)
  
  const corsOptions = {
    origin: ["http://leodairo.com", "http://localhost:3333"],
    methods:["GET", "POST", "DELETE", "PATCH", "UPDATE"]
  }

  app.use(cors(corsOptions))

  return app;
}

export default createApp;

