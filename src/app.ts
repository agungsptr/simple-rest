import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import router from "./router";

/** set env from .env file */
dotenv.config();

/** create instance for web server */
const app = express();

/** apply cors in server */
app.use(cors());

/** apply to parse JSON from request */
app.use(express.json())

/** apply router */
app.use("/api", router);

/** run server and set where port it running */
app.listen(process.env.APP_PORT, () => {
  console.log(`Listening on PORT: ${process.env.APP_PORT}`);
});
