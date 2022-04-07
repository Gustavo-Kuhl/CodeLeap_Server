import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/router";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", router);

const PORT = process.env.PORT || 8080;
const DATABASE_URI = process.env.DATABASE_URI || "";

mongoose
  .connect(DATABASE_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to database: ", err);
  });
