import express from "express";
import * as dotenv from "dotenv";
import router from "./routes/auth.js";
dotenv.config();


const app = express();

app.use(express.json());


app.use("/auth", router);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

